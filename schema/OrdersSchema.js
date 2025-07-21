const {Schema} = require('mongoose');

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String, //buy or sell
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Make sure this matches the name of your user model
        required: true
    }
});

module.exports = {OrdersSchema};