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
            browserstackLocal: false
        }]
    ],

    capabilities: [{
       
        'platformName': 'ios',
        'appium:platformVersion': '17.0',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:automationName': 'XCUITest', 
        
        'appium:app': process.env.BROWSERSTACK_IOS_APP_ID, 

        'bstack:options': {
            projectName: "Desafio Carrefour Mobile",
            buildName: "iOS Build 1.0",
            sessionName: "Teste de Navegação iOS",
            debug: true, 
            networkLogs: true,
            video: true,
            userName: process.env.BROWSERSTACK_USERNAME,
            accessKey: process.env.BROWSERSTACK_ACCESS_KEY
        }
    }],

    logLevel: 'error' 
};