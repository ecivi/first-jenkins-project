import { expect, test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {

  // goto https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");

  let actualTitle = await page.title();

  console.log(actualTitle);

  expect(actualTitle).toBe("Practice");
});

test("Getting the current URL of the page", async ({ page }) => {

  await page.goto("https://practice.cydeo.com/");

  let currentUrl = page.url();

  console.log(currentUrl);
});

test("Set the window size", async ({ page }) => {
    
  await page.setViewportSize({ width: 1532, height: 778 });

  await page.goto("https://practice.cydeo.com/");
});