import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  function handleClick() {
    setHide(!hide);
  }
  return (
    <Layout>
      <h1>Đơn hàng</h1>
      <button
        onClick={handleClick}
        type="button"
        className={
          " p-2 mb-2 border rounded-md " +
          (hide ? "bg-green-200" : "bg-red-200")
        }
      >
        {hide ? "Hiện chưa thanh toán" : "Ẩn chưa thanh toán"}
      </button>
      <table className="basic border border-collapse text-center">
        <thead>
          <tr className="">
            <th>Ngày đặt</th>
            <th>Thanh toán</th>
            <th>Tên người đặt hàng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ giao hàng</th>
            <th>Sản Phẩm</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 &&
            orders.map((order) =>
              hide ? (
                order.paid && (
                  <tr key={order._id} className="hover:bg-gray-200">
                    <td className="border-b border-slate-300">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td
                      className={
                        "border-b border-slate-300 " +
                        (order.paid ? "text-green-600" : "text-red-600")
                      }
                    >
                      {order.paid ? "Đã thanh toán" : "Chưa thanh toán"}
                    </td>
                    <td className="border-b border-slate-300">{order.name}</td>
                    <td className="border-b border-slate-300">{order.email}</td>
                    <td className="border-b border-slate-300">
                      {order.phoneNumber}
                    </td>
                    <td className="border-b border-slate-300">
                      {order.address}
                    </td>
                    <td className="border-b border-slate-300">
                      {order.line_items.map((l) => (
                        <>
                          {l.price_data?.product_data.name} x{l.quantity}
                          <br />
                        </>
                      ))}
                    </td>
                  </tr>
                )
              ) : (
                <tr key={order._id} className="hover:bg-gray-200">
                  <td className="border-b border-slate-300">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td
                    className={
                      "border-b border-slate-300 " +
                      (order.paid ? "text-green-600" : "text-red-600")
                    }
                  >
                    {order.paid ? "Đã thanh toán" : "Chưa thanh toán"}
                  </td>
                  <td className="border-b border-slate-300">{order.name}</td>
                  <td className="border-b border-slate-300">{order.email}</td>
                  <td className="border-b border-slate-300">
                    {order.phoneNumber}
                  </td>
                  <td className="border-b border-slate-300">{order.address}</td>
                  <td className="border-b border-slate-300">
                    {order.line_items.map((l) => (
                      <>
                        {l.price_data?.product_data.name} x{l.quantity}
                        <br />
                      </>
                    ))}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </Layout>
  );
}
