import assert from 'assert'
import dotenv from 'dotenv'

dotenv.config()
const { PORT, HOST, HOST_URL, SQL_SERVER, SQL_PORT, SQL_USER, SQL_DB,JWT_SECRET, SQL_PSW } = process.env;
const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT  is required');
assert(HOST, 'HOST is required');

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,

    sql: {
        user: "charles",
        password: "1234",
        server: "ACER",
        database: "TaskDB",
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }

    },
   jwt_secret:JWT_SECRET
};
export default config;