const ReportsRoutes = require('./reports_Routes');

module.exports = function (app, db) {   
    ReportsRoutes(app, db);
}
