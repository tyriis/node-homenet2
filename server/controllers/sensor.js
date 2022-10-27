const Sensor = require('../models').Sensor;
const to = require('await-to-js').default;

module.exports = {
  async create (req, res) {
    let err, sensor;
    [err, sensor] = await to(
      Sensor.create({
        name: req.body.name,
        key: req.body.key,
        unit: req.body.unit,
        NodeId: req.body.nodeId
      })
    );
    if(err) return res.status(400).send(err);
    res.status(201).send(sensor)
  },
  async list (req, res) {
    let err, sensors;
    [err, sensors] = await to(
      Sensor.all()
    );
    if(err) return res.status(400).send(err);
    res.status(200).send(sensors)
  }
};