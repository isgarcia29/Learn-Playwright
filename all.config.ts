import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests',
    use: {
        headless: true,
        viewport: {width: 1200, height: 720},
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off', 
        screenshot: 'off'
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit'},
        },
    ],
    reporter: [
        ['html', { open: 'never' }]
      ],

}

export default config