# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\smoke test.spec.ts >> Smoke Test Suite >> User can navigate: Start for free > Training > Quiz
- Location: tests\smoke test.spec.ts:4:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Smoke Test Suite', () => {
  4  |   test('User can navigate: Start for free > Training > Quiz', async ({ page }) => {
  5  | 
  6  |     // ─── Step 1: Go to the base URL ───────────────────────────────────────
> 7  |     await page.goto('/'); // or replace with your full URL e.g. 'https://dtechfamug.com'
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  | 
  9  |     // ─── Step 2: Wait for page to fully load ──────────────────────────────
  10 |     await page.waitForLoadState('domcontentloaded');
  11 | 
  12 |     // ─── Step 3: Click "Start for free" (with explicit wait + stability) ──
  13 |     const startForFreeBtn = page.getByRole('button', { name: 'Start for free' }).first();
  14 |     await startForFreeBtn.waitFor({ state: 'visible', timeout: 10000 });
  15 |     await expect(startForFreeBtn).toBeEnabled();
  16 |     await startForFreeBtn.click();
  17 | 
  18 |     // ─── Step 4: Wait for navigation/transition after click ───────────────
  19 |     await page.waitForLoadState('networkidle');
  20 | 
  21 |     // ─── Step 5: Click "training" button (exact match) ────────────────────
  22 |     const trainingBtn = page.getByRole('button', { name: 'training', exact: true });
  23 |     await trainingBtn.waitFor({ state: 'visible', timeout: 10000 });
  24 |     await expect(trainingBtn).toBeEnabled();
  25 |     await trainingBtn.click();
  26 | 
  27 |     // ─── Step 6: Wait for the banner/nav to update ────────────────────────
  28 |     await page.waitForLoadState('networkidle');
  29 | 
  30 |     // ─── Step 7: Click "quiz" inside the banner ───────────────────────────
  31 |     const quizBtn = page.getByRole('banner').getByRole('button', { name: 'quiz' });
  32 |     await quizBtn.waitFor({ state: 'visible', timeout: 10000 });
  33 |     await expect(quizBtn).toBeEnabled();
  34 |     await quizBtn.click();
  35 | 
  36 |     // ─── Step 8: Assert final state (customize as needed) ─────────────────
  37 |     await expect(page).toHaveURL(/quiz/i); // adjust regex to your URL
  38 |   });
  39 | });
  40 | 
```