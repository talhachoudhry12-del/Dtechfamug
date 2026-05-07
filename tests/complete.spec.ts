import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('button', { name: 'Schließen' }).click();
  await page.getByRole('button', { name: 'Kostenlos starten' }).first().click();
  await page.getByRole('button', { name: 'Training', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Quiz' }).click();
});