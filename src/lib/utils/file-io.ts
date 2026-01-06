import fs from "fs/promises";
import path from "path";

export async function readJson(filePath: string) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function writeJson(data: any, filePath: string) {
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  console.log(`writeJson: ${filePath}`);
}

export async function writeMd(data: string, filePath: string) {
  await fs.writeFile(filePath, data, "utf-8");

  console.log(`writeMd: ${filePath}`);
}
