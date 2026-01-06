import { newDir } from "@/lib/constants/file";
import { ProblemType } from "@/lib/types/url";
import { Page } from "@playwright/test";
import path from "path";

async function getTitle(page: Page) {
  const rawTitle = await page.locator(".pc-text-raw.text-lg").textContent();
  const safeTitle = (rawTitle || `unknown-${Date.now()}`)
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-");

  return safeTitle;
}

export async function getDirPath(page: Page, problemType: ProblemType) {
  // title from page
  // problemType from url
  // data/new/<title>/<problemType>
  const title = await getTitle(page);
  const dirPath = path.join(newDir, title, problemType);

  return dirPath;
}

export function isDataEmpty(data: any, path: string) {
  if (!data || Object.keys(data).length === 0) {
    console.log(`isDataEmpty: ${path}`);
    return true;
  } else false;
}
