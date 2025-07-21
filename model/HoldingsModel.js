const {model} = require('mongoose');

const {HoldingsSchema} =require("../schema/HoldingSchema");

const HoldingsModel = new model("holding", HoldingsSchema); //give collection name "holding" here...no other way to give collection name elsewhere

module.exports = {HoldingsModel};