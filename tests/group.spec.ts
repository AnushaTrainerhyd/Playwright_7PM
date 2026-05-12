import { test, expect } from '@playwright/test';

test.describe("Group1", async() => {

test('Amazon DELL Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptops');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Apply the filter Dell to' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Dell 15 (Previously Inspiron), 13th Gen Intel Core i5-1334U (' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Dell-Generation-i5-1334U-Processor-Keyboard/dp/B0DSFQZTVW/ref=sr_1_1_sspa?crid=3BXS6NQH7P5N2&dib=eyJ2IjoiMSJ9.5FYBeD6FIgBO2rjy6qej_v9EDq5rgqlE49qG0xfoqPfXMIbJbifss6bktwsUpcOxlfNl6ufkipvUwumhf0u2-3c96x-nH_SZJw7fTDciOOAPDGRIzRWSp-G-wJGsWkkjj-35vDLcUuxdLzt4ckCCKfsUOz4sz6XTXR8DkJj8PMvRmkQ4XJIQ9_fXEw_XsgiVK3CiH4H5E6ym0TfDkTjTU0FUb5Qc4vfeg1ssADCt1vs.mkJ9q7mQhaBNaVtGmwEn0klBXfdA3pSws-F1Zr3-yP0&dib_tag=se&keywords=laptops&qid=1777386640&refinements=p_123%3A241862&rnid=91049095031&sprefix=laptops%2Caps%2C436&sr=8-1-spons&aref=hblGNX1gro&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await expect(page1.getByRole('heading', { name: 'Dell 15 (Previously Inspiron' }).locator('#productTitle')).toBeVisible();
});

test('Amazon Todays Deals', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await page.getByRole('link', { name: 'Clearance' }).click();
  await page.getByRole('link', { name: 'Jewellery' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'VOYLLA Green Stone Studded' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'VOYLLA Green Stone Studded' }).locator('#productTitle')).toBeVisible();
});
});

