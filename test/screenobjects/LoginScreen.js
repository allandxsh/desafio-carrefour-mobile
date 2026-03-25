class LoginScreen {
    get btnLoginContainer() {
        return $('~button-login-container')
    }
    get btnSignUpContainer() {
        return $('~button-sign-up-container')
    }
    get inputEmail() {
        return $('~input-email')
    }
    get inputPassword() {
        return $('~input-password')
    }
    get confirmPassword() {
        return $('~input-repeat-password')
    }
    get btnLoginAccess() {
        return $('~button-LOGIN')
    }
    get btnSignUp() {
        return $('~button-SIGN UP')
    }
    get alertTextLogin() {
        if (driver.isAndroid) {
            return $('//android.widget.TextView[@text="Success"]')
        }
        return $('-ios predicate string:type == "XCUIElementTypeAlert" AND name == "Success"')
    }
    get alertTextSignUp() {
        if (driver.isAndroid) {
            return $('//android.widget.TextView[@text="Signed Up!"]')
        }
        return $('-ios predicate string:type == "XCUIElementTypeAlert" AND name == "Signed Up!"')
    }
    get txtEmailErrorMessage() {
        if (driver.isAndroid) {
            return $('//android.widget.TextView[@text="Please enter a valid email address"]')
        }
        return $('-ios predicate string:type == "XCUIElementTypeAlert" AND name == "Please enter a valid email address"')
    }
    get txtPasswordErrorMessage() {
        if (driver.isAndroid) {
            return $('//android.widget.TextView[@text="Please enter the same password"]')
        }
        return $('-ios predicate string:type == "XCUIElementTypeAlert" AND name == "Please enter the same password"')
    }

    async isLoginScreenVisible() {
        await this.btnLoginAccess.waitForDisplayed({timeout: 5000})
        return await this.btnLoginAccess.isDisplayed()
    }
    async isSignUpSuccessful() {
        await this.alertTextSignUp.waitForDisplayed({timeout: 5000})
        return await this.alertTextSignUp.isDisplayed();
    }
    async isLoginSuccessful() {
        await this.alertTextLogin.waitForExist({ timeout: 8000 });
        await this.alertTextLogin.waitForDisplayed({ timeout: 5000 });
        return await this.alertTextLogin.isDisplayed();
    }
    async isEmailErrorMessageVisible() {
        await this.txtEmailErrorMessage.waitForDisplayed({timeout: 5000})
        return await this.txtEmailErrorMessage.isDisplayed()
    }
    async isPasswordErrorMessageVisible() {
        await this.txtPasswordErrorMessage.waitForDisplayed({timeout: 5000})
        return await this.txtPasswordErrorMessage.isDisplayed()
    }
}

export default new LoginScreen()