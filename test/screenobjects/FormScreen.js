class FormScreen {
    get inputField() {
        return $('~text-input')
    }
    get inputFieldValue() {
        return $('~input-text-result')
    }
    get switch() {
        return $('~switch')
    }
    get switchValue() {
        return $('~switch-text')
    }
    get dropDown() {
        if (driver.isAndroid) {
            return $('android=new UiSelector().resourceId("dropdown-chevron")')
        }
        return $('~dropdown-chevron')
    }
    getOptionByText(textoDaOpcao) {
        if (driver.isAndroid) {
            return $(`android=new UiSelector().text("${textoDaOpcao}")`)
        }
        return $(`-ios predicate string:label == "${textoDaOpcao}"`);   
    }
    get activeButton() {
        return $('~button-Active')
    }
    get activeButtonMessage(){
        if (driver.isAndroid) {
            return $('id=android:id/message')
        }
        return $('-ios predicate string:type == "XCUIElementTypeAlert" AND name == "This button is active"')
        
    }

    async getAlertText() {
        await this.activeButtonMessage.waitForDisplayed({ timeout: 5000 });
        return await this.activeButtonMessage.isDisplayed();
    }
}

export default new FormScreen()