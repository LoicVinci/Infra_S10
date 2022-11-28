const DATABASE_URL = ''

const PgUser = 'postgres';
const PgHost = 'localhost';
const PgDb = 'exoplanets';
const PgPassword = 'ipl';
const PgPort = 5432;

module.exports = {
    //ConnectionString: 'postgres://' + PgUser + ':' + PgPassword + '@' + PgHost + ':' + PgPort + '/' + PgDb
    ConnectionString: process.env.DATABASE_URL
};
