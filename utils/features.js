import DataURIParser from "datauri/parser.js";
import path from "path";

export const getDataUri = (file) => {
  if (!file || !file.buffer) {
    console.error("Error: file or file.buffer is missing", file);
    return null;
  }

  const parser = new DataURIParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};
