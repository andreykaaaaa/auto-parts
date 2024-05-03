// https://nuxt.com/docs/api/configuration/nuxt-config
const packageJSON = require('./package.json');
const env = {
    serverOrigin: process.env.SERVER_ORIGIN ?? '',
    isDev: !!process.env.MODE
};
export default defineNuxtConfig({
    //@ts-ignore
    ssr: false,

    modules: [
        '@pinia/nuxt',
        'nuxt-local-auth'
    ],

    css: [
        '~/app/styles/main.scss',
    ],

    localAuth: {
        origin: `${env.serverOrigin}/api/v1`,
        token: {
            path: 'access',
            lifetime: 60 * 60 * 6 // 1 day
        },
        refreshToken: {
            enabled: true
        },
        pages: {
            auth: '/',
            protectAllPages: true
        },
        endpoints: {
            signIn: {path: 'auth/', method: 'POST'},
            refreshToken: {path: 'auth/refresh/', method: 'POST'},
            getMe: {path: 'users/me/', method: 'GET'}
        }
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    }
})
