const locationController = require('../controllers').location;
const nodeController = require('../controllers').node;
const sensorController = require('../controllers').sensor;
const sensorActionController = require('../controllers').sensorAction;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Homenet API!',
  }));

  app.post('/location', locationController.create);
  app.get('/location', locationController.list);

  app.post('/node', nodeController.create);
  app.get('/node', nodeController.list);

  app.post('/sensor', sensorController.create);
  app.get('/sensor', sensorController.list);

  app.post('/sensor/:sensorId/action', sensorActionController.create);
  app.get('/sensor/:sensorId/action', sensorActionController.list);
};