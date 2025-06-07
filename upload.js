import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Erro no upload" });

    const filename = path.basename(files.image.filepath);
    const id = filename.split(".")[0]; // usar como ID
    res.status(200).json({ id });
  });
}