import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.aeu.gg/');
  await page.getByRole('textbox', { name: 'Password' }).fill('aeu2026!new');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Unlock' }).click();
  await page.getByRole('button', { name: 'Dismiss' }).click();
  await page.getByRole('link', { name: 'Leaderboards Season rankings' }).click();
  await page.getByRole('link', { name: 'Marketplace Gear, merch &' }).click();
  await page.locator('div').nth(5).click();
  await page.getByRole('link', { name: 'Teams Rosters & recruitment' }).click();
  await page.goto('https://www.aeu.gg/');
});