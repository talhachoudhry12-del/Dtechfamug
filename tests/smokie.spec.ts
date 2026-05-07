import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('button', { name: 'Schließen' }).click();
  await page.getByRole('button', { name: 'Kostenlos starten' }).first().click();
  await page.getByRole('button', { name: 'Training', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Quiz' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Vokabeln' }).click();
  await page.getByRole('button', { name: 'Karten', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Grammatik' }).click();
  await page.getByRole('button', { name: 'Einstellungen' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Start' }).click();
});