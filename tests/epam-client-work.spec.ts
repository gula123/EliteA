import { test, expect } from '@playwright/test';

// Test suite for EPAM - Client Work navigation
test.describe('EPAM Client Work', () => {
  test('Explore Our Client Work shows Client Work', async ({ page }) => {
    // Navigate to EPAM home
    await page.goto('https://www.epam.com/');

    // Click the "Services" link in the header
    await page.getByRole('link', { name: /Services/i }).click();

    // Click the "Explore Our Client Work" link
    await page.getByRole('link', { name: /Explore Our Client Work/i }).click();

    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');

    // Verify that the "Client Work" text is visible
    await expect(page.locator('text=Client Work')).toBeVisible();
  });
});
