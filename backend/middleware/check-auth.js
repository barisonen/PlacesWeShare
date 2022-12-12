const jwt = require('jsonwebtoken');

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {

  // skip browser's default pre request
  if (req.method === 'OPTIONS') {
    return next();
  }

  // does request has token?
  try {
    const token = req.headers.authorization.split(' ')[1]; //Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    // is the token valid?
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    // add data for the next middleware
    req.userData = { userId: decodedToken.userId};
    next();
  } catch (err) {
    const error = new HttpError(
      'Authentication failed!',
      403
    );
    return next(error);
  }
};