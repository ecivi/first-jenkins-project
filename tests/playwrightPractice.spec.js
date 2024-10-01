//const {test} = require('playwright/test');    <== this is same with below import statement but older version*/

import { test } from "@playwright/test";

test("Youtube Search", async ({ page }) => {

  await page.goto("https://www.youtube.com/");

  let searchBox = page.locator("//input[@name='search_query']");

  await searchBox.click();

  await searchBox.fill("Cydeo");

  await searchBox.press("Enter");
  
  let firstResult = page.locator("(//a[@id='video-title'])[1]");

  await firstResult.click();

  //await page.waitForTimeout(3000);
});

/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">
*/

//input[@name='search_query']
//input[@id='search']
//input[@name='search_query' and @id='search']

// The xpath you generated is not unique, there are other elements sharing the same attributes/value, regenerate it, and here is the entire HTML of the page:

// The Xpath you generated is not unique. Here is the full HTML code of the page, I want you to regenerate the xpath of that previous element one more time:

// Here is the entire HTML code of the page that I am automating, analyze it before generating me the xpath in the next prompt when I give you a piece of HTML code