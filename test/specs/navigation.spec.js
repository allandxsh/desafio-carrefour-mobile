import { expect } from 'chai';
import HomeScreen from '../screenobjects/HomeScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js'
import FormScreen from '../screenobjects/FormScreen.js'

describe('Navegação do App', () => {

    beforeEach(async () => {
        await driver.terminateApp('com.wdiodemoapp'); 
        await driver.activateApp('com.wdiodemoapp');
        await HomeScreen.btnLoginMenu.waitForDisplayed({ timeout: 10000 });
    });

    it('Deve acessar a tela de Login através do menu inferior', async () => {
        await HomeScreen.btnLoginMenu.click()
        await LoginScreen.btnLoginAccess.waitForDisplayed({timeout: 5000})
        const isLoaded = await LoginScreen.isLoginScreenVisible()
        expect(isLoaded).to.be.true
    })

    it('Deve acessar a tela de Forms através do menu inferior', async () => {
        await HomeScreen.btnForms.click()
        await FormScreen.inputField.waitForDisplayed({timeout: 5000})
        const isLoaded = await FormScreen.inputField.isDisplayed()
        expect(isLoaded).to.be.true
    })
})