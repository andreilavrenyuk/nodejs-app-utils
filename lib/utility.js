
const mongoose = require('mongoose');
const timestampObjectId = require('timestamp-objectid');

module.exports = {
  isBase64(str) {
    return str && typeof str === 'string' && !str.match(/^http/);
  },
  
  getObjectIdFromDate(date) {
    const timeObjectId = String(timestampObjectId(date));
    const mongoObjectId = String(mongoose.Types.ObjectId());
    return timeObjectId.substring(0, 7) + mongoObjectId.substring(7);
  }
};

