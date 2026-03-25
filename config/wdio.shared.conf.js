import path from 'path';

export const config = {
    // Porta padrão do Appium
    port: 4723,
    
    specs: [
        path.join(process.cwd(), 'test', 'specs', '**', '*.js')
    ],
    exclude: [],
    
    // Configurações de execução
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    // Serviços
    services: ['appium'],
    
    // Framework e Relatórios
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}