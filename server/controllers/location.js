const Location = require('../models').Location;
const Node = require('../models').Node;
const to = require('await-to-js').default;
module.exports = {
  async create (req, res) {
    let err, location;
    [err, location] = await to(
      Location.create({
        name: req.body.name,
        description: req.body.description
      })
    );
    if(err) return res.status(400).send(err);
    res.status(201).send(location)
  },
  async list (req, res) {
    let err, locations;
    [err, locations] = await to(
      Location.findAll({
        include: [{
          model: Node,
          as: 'nodes',
        }]
      })
    );
    if(err) return res.status(400).send(err);
    res.status(200).send(locations)
  }
};