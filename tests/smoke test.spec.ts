import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('button', { name: 'Schließen' }).click();
  await page.getByRole('button', { name: 'Kostenlos starten' }).first().click();
  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await page.getByRole('button', { name: 'Training', exact: true }).click();
  await page.getByRole('button', { name: 'New Questions Not seen yet' }).click();
  await page.getByRole('button', { name: 'Exit' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Vocab' }).click();
  await page.getByRole('button', { name: 'Cards', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Grammar' }).click();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Home', exact: true }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Home', exact: true }).click();
  await page.getByRole('button', { name: 'Training Smart Learning' }).click();
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('button', { name: 'Prüfungs-Quiz 33 echte Fragen' }).click();
  await page.getByRole('button', { name: 'Training' }).click();
  await page.getByRole('button', { name: '310 Schwache Fragen Fokus auf' }).click();
  await page.goto('https://www.einbuergercoach.de/');
  await page.getByRole('banner').getByRole('button', { name: 'Grammatik' }).click();
  await page.getByRole('button', { name: 'training' }).click();
});