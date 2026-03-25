import 'dotenv/config';
import { config as sharedConfig } from './wdio.shared.conf.js';

export const config = {
    ...sharedConfig,
    
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    
    protocol: 'https',
    hostname: 'hub.browserstack.com',
    port: 443,
    path: '/wd/hub',

    services: [
        ['browserstack', {
            testObservability: true,
            browserstackLocal: false,
        }]
    ],

    capabilities: [{
        'platformName': 'android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Google Pixel 7',
        'appium:automationName': 'UiAutomator2',
        
        'appium:app': process.env.BROWSERSTACK_APP_ID, 

        'bstack:options': {
            projectName: "Desafio Carrefour Mobile",
            buildName: "Versão Final 1.0",
            sessionName: "Suite de Testes de Autenticação",
            debug: true, 
            networkLogs: true,
            video: true,
            userName: process.env.BROWSERSTACK_USERNAME,
            accessKey: process.env.BROWSERSTACK_ACCESS_KEY
        }
    }],

    logLevel: 'error' 
};