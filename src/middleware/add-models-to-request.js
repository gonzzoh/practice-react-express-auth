const User = require('../db/models/user');
const Upload = require('../db/models/upload');
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Upload
  };
  next();
};

module.exports = addModelsToRequest;
