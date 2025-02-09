//import { expect, test } from "@playwright/test";

//test( 'the user login with success', async ({page}) => {
//await page.goto('https://www.advantageonlineshopping.com/#/');
//await expect(await page.title()).toBe('Compras com vantangem');

//await page.locator('[id="menuUser"]')
//await page.locator('[name="username"]').fill('Carmen');
//await page.locator('[name="password"]').fill('Casa123');

//await page.pause();})

import { expect, test } from "@playwright/test";
test('the user login with success', async ({ page }) => {
    // Acessa o site
    await page.goto('https://www.advantageonlineshopping.com#/');

    // Espera até que o elemento do menu de login esteja visível (opcional, já que provavelmente já estará visível)
    await page.locator('[id="menuUser"]').waitFor({state:'visible',timeout:10000});
    await page.locator('[id="menuUser"]').click();

    // Preenche o nome de usuário e a senha
    await page.locator('input[name="username"]').waitFor({state: 'visible',timeout:10000});
    await page.locator('input[name="username"]').fill('Carmen');
    //await page.waitForTimeout(2000);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Casa123');

    // Clica no botão de login
    await page.locator('[name="login"]').click();

    // Espera até que o menu de usuário seja alterado ou outro indicativo de login bem-sucedido
    // Em vez de esperar apenas o 'menuUser', pode ser interessante verificar se a URL mudou ou se um outro elemento aparece
    await page.waitForSelector('[id="menuUser"]', { state: 'attached',timeout:10000 });

    // Verifica se o menu do usuário agora está visível (indicando login bem-sucedido)
    await expect(page.locator('[id="menuUser"]')).toBeVisible();

    // Ou você pode verificar outra coisa, como se a URL mudou
    const url = await page.url();
    expect(url).toContain('home');  // Ajuste conforme a URL que aparece após o login

    // Pausa para poder ver o que acontece
    await page.pause();
});


