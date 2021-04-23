const models = require('../../models');
const { User, Review, Lineitem } = models;
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  createReview: async (req, res) => {
    const { id, rating, title, content } = req.body;

    try {
      await Review.create({
        user_id: req.userId,
        item_id: id,
        rating: rating,
        title: title,
        content: content,
      });

      await Lineitem.update(
        {
          reviewed: true,
        },
        {
          where: {
            user_id: req.userId,
            item_id: id,
          },
        },
      );

      res.status(200).json('okok');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAll: async (req, res) => {
    const { id } = req.params;

    try {
      const reviewData = await Review.findAll({
        where: {
          item_id: id,
        },
        include: [
          {
            model: User,
            attiributes: ['email', 'name'],
          },
        ],
      });

      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getTarget: async (req, res) => {
    const { id } = req.params;

    try {
      const reviewData = await Review.findOne({
        where: {
          user_id: req.userId,
          item_id: id,
        },
      });

      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  patchReview: async (req, res) => {
    const { id, rating, title, content } = req.body;

    try {
      await Review.update(
        {
          user_id: req.userId,
          item_id: id,
          rating: rating,
          title: title,
          content: content,
        },
        {
          where: {
            user_id: req.userId,
            item_id: id,
          },
        },
      );

      res.status(200).json('okok');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
