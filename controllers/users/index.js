const bcrypt = require('bcrypt');
const saltRounds = 3;
const models = require('../../models');
const { User } = models;
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  signup: async (req, res) => {
    try {
      let { email, password, name, address, detailAddress, phone } = req.body;

      const emailCheck = await User.findOne({
        where: {
          email,
        },
      });

      if (emailCheck) {
        res.status(409).send('This email already exists');
      }

      const salt = await bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(password, salt);
      password = hash;

      const userData = await User.create({
        email,
        password,
        name,
        address,
        detailAddress,
        phone,
      });

      delete userData.dataValues.password;
      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body.user;

      const userData = await User.findOne({
        where: {
          email,
        },
      });

      if (!userData) {
        return res.status(401).json({ message: 'Invalid user email' });
      }

      const passwordMatch = await bcrypt.compareSync(
        password,
        userData.dataValues.password,
      );

      if (passwordMatch) {
        delete userData.dataValues.password;
        const accessToken = generateAccessToken(userData.dataValues);
        sendAccessToken(res, accessToken);
      } else {
        res.status(401).json({ message: 'Invalid user password' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  logout: (req, res) => {
    try {
      res.status(200).json('successfully signed out!');
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getUserData: async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          id: req.userId,
        },
      });

      delete userData.dataValues.password;
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  patchUserInfo: async (req, res) => {
    let { password, address, detailAddress, phone } = req.body;

    try {
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(password, salt);
      password = hash;

      await User.update(
        {
          password,
          address,
          detailAddress,
          phone,
        },
        {
          where: {
            id: req.userId,
          },
        },
      );

      res.status(200).json('okok');
    } catch (err) {
      res.status(500).send(err);
    }
  },

  withdrawal: async (req, res) => {
    const { password } = req.body;

    try {
      const userData = await User.findOne({
        where: {
          id: req.userId,
        },
      });

      const passwordMatch = await bcrypt.compareSync(
        password,
        userData.dataValues.password,
      );

      if (passwordMatch) {
        await User.destroy({
          where: {
            id: req.userId,
          },
        });
        res.status(200).json('okok');
      } else {
        res.status(402).json({ message: 'Not matched password' });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
