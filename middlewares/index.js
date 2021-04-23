require('dotenv').config();
const { verify } = require('jsonwebtoken');
const models = require('../models');
const { User } = models;

module.exports = {
  auth: async (req, res, next) => {
    const accToken = await req.headers.authorization.slice(7);
    if (!accToken) {
      return res
        .status(401)
        .json({ data: null, message: 'invalid access token' });
    }

    try {
      const accessTokenData = await verify(accToken, process.env.ACCESS_SECRET);
      const findUser = await User.findOne({
        where: { email: accessTokenData.email },
      });

      req.userId = findUser.dataValues.id;
      next();
    } catch (err) {
      return res
        .status(401)
        .json({ data: null, message: 'invalid access token' });
    }
  },
};
