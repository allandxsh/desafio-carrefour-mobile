import { config as sharedConfig } from './wdio.shared.conf.js';
import path from 'path';

export const config = {
    ...sharedConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './app/android.wdio.native.app.v2.2.0.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240,
        'appium:noSign': true,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': false
    }]
};