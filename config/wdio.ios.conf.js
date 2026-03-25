import { config as sharedConfig } from './wdio.shared.conf.js';
import path from 'path';

export const config = {
    ...sharedConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14',
        'appium:platformVersion': '16.4',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/wdiodemoapp.app'),
        'appium:newCommandTimeout': 240,
        'appium:noSign': true,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': false
    }]
};