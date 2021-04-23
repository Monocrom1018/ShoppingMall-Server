require('dotenv').config();
const { sign } = require('jsonwebtoken');

module.exports = {
  // acc토큰 발급
  generateAccessToken: data => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '7d' });
  },

  // acc토큰 보내기
  sendAccessToken: (res, accToken) => {
    res.status(200).json({ token: accToken });
  },
};
