import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/next-ecom-d3e30.appspot.com/o/Logo.png?alt=media&token=c5b2ee33-fecd-4461-8423-b6480a68b55b"
        className="h-14 w-14"
      ></img>
      <span className="">BTLSTORE ADMIN</span>
    </Link>
  );
}
