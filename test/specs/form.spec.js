import {expect} from 'chai';
import FormScreen from '../screenobjects/FormScreen.js'
import HomeScreen from '../screenobjects/HomeScreen.js'

beforeEach(async () => {
    await driver.terminateApp('com.wdiodemoapp'); 
    await driver.activateApp('com.wdiodemoapp');
    await HomeScreen.btnForms.waitForDisplayed({ timeout: 10000 });
    await HomeScreen.btnForms.click();
});

describe('Form', () => {

    it('Deve preencher o formulário com sucesso', async () =>  {
        await FormScreen.inputField.setValue('Teste');
        await FormScreen.switch.click();
        await FormScreen.dropDown.click();
        await FormScreen.getOptionByText('Appium is awesome').click();
        await FormScreen.activeButton.click();
        const alertText = await FormScreen.getAlertText();
        expect(alertText).to.be.true
    })

    it('Deve verificar se o valor do campo de texto é exibido corretamente', async () => {
        const testValue = 'Teste de Campo';
        await FormScreen.inputField.setValue(testValue);
        const displayedValue = await FormScreen.inputFieldValue.getText();
        expect(displayedValue).to.equal(testValue);
    })

    it('Deve verificar o estado do switch', async () => {
        await FormScreen.switch.click();
        const switchState = await FormScreen.switchValue.getText();
        expect(switchState).to.equal('Click to turn the switch OFF');
    })

    it('Deve selecionar uma opção do dropdown e verificar se foi selecionada corretamente', async () => {
        await FormScreen.dropDown.click();
        await FormScreen.getOptionByText('Appium is awesome').click();
        const selectedOption = await FormScreen.getOptionByText('Appium is awesome').getText();
        expect(selectedOption).to.equal('Appium is awesome');
    })
})