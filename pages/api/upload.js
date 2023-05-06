import multiparty from "multiparty";
import fs from "fs";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";
import { firebaseStorage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const bucketName = "dawid-next-ecommerce";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  console.log("length:", files.file.length);

  const links = [];
  for (const file of files.file) {
    const ext = file.originalFilename.split(".").pop();
    const newFilename = Date.now() + "." + ext;
    const imageRef = ref(firebaseStorage, newFilename);

    //console.log(ext, newFilename, file);
    await uploadBytes(imageRef, fs.readFileSync(file.path)).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        return res.json({ url });
      });
    });
  }
}

export const config = {
  api: { bodyParser: false },
};
