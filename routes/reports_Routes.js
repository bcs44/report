module.exports = function (app, db) {
    
    app.get('/report', (req, res) => {
      db.collection('c_reports').find().toArray(function (err, reports) {
        res.send(reports);
      });
    });
  
    
    app.post('/report', (req, res) => {
      const report = {
        text: req.body.text
      };
      db.collection('c_reports').insert(report, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
            res.send('ja deu');
        }
      });
    });
  };
  
  