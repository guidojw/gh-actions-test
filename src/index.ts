import * as Sentry from '@sentry/node'
import { RewriteFrames } from '@sentry/integrations'
import dotenv from 'dotenv'
import fn from './controllers/test'

dotenv.config()

declare global {
    namespace NodeJS {
        interface Global {
            __rootdir__: string;
        }
    }
}

// @ts-expect-error
global.__rootdir__ = __dirname || process.cwd();

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: 'test',
    environment: 'test',
    integrations: [
        new RewriteFrames({
            // @ts-expect-error
            root: global.__rootdir__
        })
    ]
})

fn()
