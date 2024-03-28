const { Sequelize } = require('sequelize');
const toBool = (x) => x === 'true';
const fs = require('fs');
if (fs.existsSync('config.env')) {
    require('dotenv').config({
        path: './config.env'
    });
}
const DATABASE_URL = process.env.DATABASE_URL || './assets/database.db';
module.exports = {
    LOGS: toBool(process.env.LOGS) || true,
    BASE_URL : "https://api.alpha-md.rf.gd/",
    ALPHA_KEY: process.env.ALPHA_KEY || 'alpha-free',
    SESSION_ID: process.env.SESSION_ID || '',
    LANG: process.env.LANG || 'EN',
    HANDLERS: process.env.HANDLER === 'false' || process.env.HANDLER === 'null' ? '^': '^[/]',
    SUDO: process.env.SUDO || '2348114860536',
    OWNER_NAME: process.env.OWNER_NAME || 'Cipher',
    BOT_NAME: process.env.BOT_NAME || 'Alpha',
    WORK_TYPE: process.env.WORK_TYPE || 'public',
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './assets/database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
    }): new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
            native: true,
            ssl: {
                require: true, rejectUnauthorized: false
            },
        },
        logging: false,
    }),
};