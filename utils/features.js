import DataURIParser from "datauri/parser.js";
import path from "path";

export const getDataUri = (files) => {
  if (!files || !files.buffer) {
    console.error("Error: file or file.buffer is missing", file);
    return null;
  }

  const parser = new DataURIParser();
  const extName = path.extname(files.originalname).toString();
  return parser.format(extName, files.buffer);
};
