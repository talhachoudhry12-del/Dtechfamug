import { test, expect } from '@playwright/test';

const SITE_URL = 'https://www.aeu.gg';
const SITE_PASS = 'aeu2026!new';
const USER_EMAIL = 'talhachoudhry12@gmail.com';
const USER_PASS = 'Talha12!';

// ── Helper: unlock the site ─────────────────────────────
async function unlockSite(page: any) {
  await page.goto(SITE_URL, { waitUntil: 'networkidle' });
  const lock = page.getByRole('textbox', { name: 'Password' });
  if (await lock.isVisible()) {
    await lock.fill(SITE_PASS);
    await page.getByRole('button', { name: 'Unlock' }).click();
    await page.waitForLoadState('networkidle');
  }
}

// ── Helper: login ───────────────────────────────────────
async function login(page: any) {
  await page.getByRole('textbox', { name: 'Email or username' }).fill(USER_EMAIL);
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(USER_PASS);
  await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle');
}

// ════════════════════════════════════════════════════════
// SMOKE TESTS
// ════════════════════════════════════════════════════════

test('@smoke 1 - site unlocks and home page loads', async ({ page }) => {
  await unlockSite(page);
  await expect(page).toHaveURL(/aeu\.gg/);
  await expect(page.getByRole('link', { name: 'AEU Home' })).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshots/home.png' });
});

test('@smoke 2 - tournaments page loads', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Tournaments Browse & enter' }).click();
  await expect(page).toHaveURL(/tournaments/);
  await page.screenshot({ path: 'test-results/screenshots/tournaments.png' });
});

test('@smoke 3 - teams page loads', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Teams Rosters & recruitment' }).click();
  await expect(page).toHaveURL(/teams/);
  await page.screenshot({ path: 'test-results/screenshots/teams.png' });
});

test('@smoke 4 - sign in page opens', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('textbox', { name: 'Email or username' })).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshots/signin.png' });
});

test('@smoke 5 - user can login successfully', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await login(page);
  await expect(page.getByRole('link', { name: 'Sign in' }))
    .not.toBeVisible({ timeout: 10000 });
  await page.screenshot({ path: 'test-results/screenshots/logged-in.png' });
});

test('@smoke 6 - create account page opens', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect(page.getByRole('button', { name: 'Sign Up', exact: true })).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshots/signup.png' });
});

test('@smoke 7 - find a tournament link works', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Find a Tournament' }).click();
  await expect(page).toHaveURL(/tournaments/);
  await page.screenshot({ path: 'test-results/screenshots/find-tournament.png' });
});

test('@smoke 8 - back navigation works', async ({ page }) => {
  await unlockSite(page);
  await page.getByRole('link', { name: 'Tournaments Browse & enter' }).click();
  await page.getByRole('link', { name: 'Back' }).click();
  await expect(page).toHaveURL(SITE_URL + '/');
  await page.screenshot({ path: 'test-results/screenshots/back-nav.png' });
});