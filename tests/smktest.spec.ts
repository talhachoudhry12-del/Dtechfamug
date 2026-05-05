import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('button', { name: 'Übersp.' }).click();
  await page.getByRole('button', { name: 'Kostenlos starten' }).first().click();
  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await page.getByRole('button', { name: 'EN' }).press('Tab');
  await page.getByRole('banner').getByRole('button', { name: 'Home', exact: true }).press('ArrowRight');
  await page.getByRole('banner').getByRole('button', { name: 'Home', exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Training', exact: true }).press('ArrowRight');
  await page.getByRole('button', { name: 'Training', exact: true }).press('Enter');
  await page.getByRole('button', { name: 'Training', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Quiz' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Vocab' }).click();
  await page.getByRole('button', { name: 'Cards', exact: true }).click();
  await page.getByRole('button', { name: 'Cards', exact: true }).click();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Home', exact: true }).click();
});