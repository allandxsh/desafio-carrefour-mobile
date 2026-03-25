import {expect} from 'chai';
import LoginScreen from '../screenobjects/LoginScreen.js'
import HomeScreen from '../screenobjects/HomeScreen.js'
import loginData from '../data/loginData.json' with { type: 'json' }

beforeEach(async () => {
    await driver.terminateApp('com.wdiodemoapp'); 
    await driver.activateApp('com.wdiodemoapp');
    await HomeScreen.btnLoginMenu.waitForDisplayed({ timeout: 10000 });
    await HomeScreen.btnLoginMenu.click();
    await LoginScreen.btnLoginAccess.waitForDisplayed({ timeout: 5000 });
});

describe('Login', () => {

    it('Deve realizar login com sucesso', async () => {
        await LoginScreen.inputEmail.setValue(loginData.loginSuccess.email)
        await LoginScreen.inputPassword.setValue(loginData.loginSuccess.password)
        await LoginScreen.btnLoginAccess.click()
        const alertText = await LoginScreen.isLoginSuccessful()
        expect(alertText).to.be.true
    })
    
    it('Deve exibir mensagem de erro para email inválido', async () => {
        await LoginScreen.inputEmail.setValue(loginData.invalidLogin.email)
        await LoginScreen.inputPassword.setValue(loginData.invalidLogin.password)
        await LoginScreen.btnLoginAccess.click()
        const isErrorMessageVisible = await LoginScreen.isEmailErrorMessageVisible()
        expect(isErrorMessageVisible).to.be.true
    })

    it('Deve realizar cadastro com sucesso', async () => {
        await LoginScreen.btnSignUpContainer.click()
        await LoginScreen.inputEmail.setValue(loginData.signUpSuccess.email)
        await LoginScreen.inputPassword.setValue(loginData.signUpSuccess.password)
        await LoginScreen.confirmPassword.setValue(loginData.signUpSuccess.password)
        await LoginScreen.btnSignUp.click()
        const alertText = await LoginScreen.isSignUpSuccessful()
        expect(alertText).to.be.true
    })

    it('Deve exibir mensagem de erro para email inválido no cadastro', async () => {
        await LoginScreen.btnSignUpContainer.click()
        await LoginScreen.inputEmail.setValue(loginData.invalidSignUp.email)
        await LoginScreen.inputPassword.setValue(loginData.invalidSignUp.password)
        await LoginScreen.confirmPassword.setValue(loginData.invalidSignUp.password)
        await LoginScreen.btnSignUp.click()
        const isErrorMessageVisible = await LoginScreen.isEmailErrorMessageVisible()
        expect(isErrorMessageVisible).to.be.true
    })

    it('Deve exibir mensagem de erro para senha e confirmação de senha diferentes no cadastro', async () => {
        await LoginScreen.btnSignUpContainer.click()
        await LoginScreen.inputEmail.setValue(loginData.passwordMismatchSignUp.email)
        await LoginScreen.inputPassword.setValue(loginData.passwordMismatchSignUp.password)
        await LoginScreen.confirmPassword.setValue(loginData.passwordMismatchSignUp.confirmPassword)
        await LoginScreen.btnSignUp.click()
        const isErrorMessageVisible = await LoginScreen.isPasswordErrorMessageVisible()
        expect(isErrorMessageVisible).to.be.true
    })
})