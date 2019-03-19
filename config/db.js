let username = 'bsilva4';
let password = 'Bruna_silva4';
let dbhost = 'ds123080.mlab.com';
let port = '23080';
let dbname = 'db_reports';

module.exports = {
    url: `mongodb://${username}:${password}@${dbhost}:${port}/${dbname}`
};
