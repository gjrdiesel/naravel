var models = require('../models');
var _ = require('lodash');

var recent = [];
var hours = [];

module.exports = {
    index (req, res) {
        recent.push([new Date().getSeconds(), _.random(60, 1800)]);
        hours.push(new Date().getSeconds());

        res.send({recent, hours});
    }
};