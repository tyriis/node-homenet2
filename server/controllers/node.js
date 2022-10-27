const Node = require('../models').Node;
const Location = require('../models').Location;
const Sensor = require('../models').Sensor;
const to = require('await-to-js').default;

module.exports = {
  async create (req, res) {
    let err, node;
    [err, node] = await to(
      Node.create({
        name: req.body.name,
        deviceId: req.body.deviceId,
        LocationId: req.body.locationId
      })
    );
    if(err) return res.status(400).send(err);
    res.status(201).send(node)
  },
  async list (req, res) {
    let err, nodes;
    [err, nodes] = await to(
      Node.findAll({
        include: [{
          model: Sensor,
          as: 'sensors'
        }],
      })
    );
    console.log(err);
    if(err) return res.status(400).send(err);
    res.status(200).send(nodes)
  }
};