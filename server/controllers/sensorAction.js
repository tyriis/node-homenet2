const SensorAction = require('../models').SensorAction;
const to = require('await-to-js').default;

module.exports = {
  async create (req, res) {
    let err, sensorAction;
    [err, sensorAction] = await to(
      SensorAction.create({
        value: req.body.value,
        SensorId: req.params.sensorId
      })
    );
    if(err) return res.status(400).send(err);
    res.status(201).send(sensorAction)
  },
  async list (req, res) {
    let err, sensorActions;
    [err, sensorActions] = await to(
      SensorAction.all()
    );
    if(err) return res.status(400).send(err);
    res.status(200).send(sensorActions)
  }
};