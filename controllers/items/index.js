const models = require('../../models');
const { Item, Option, Lineitem, Order, Like, RecentView } = models;
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  getItems: async (req, res) => {
    try {
      const data = await Item.findAll({
        include: [
          {
            model: Option,
            attributes: ['item_id', 'grams', 'price'],
          },
          {
            model: Like,
            attributes: ['user_id', 'liked'],
          },
        ],
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  details: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Item.findOne({
        where: { id: id },
        include: [
          {
            model: Option,
          },
          {
            model: Like,
          },
        ],
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createRecentView: async (req, res) => {
    const { id } = req.body;
    try {
      await RecentView.destroy({
        where: {
          user_id: req.userId,
          item_id: id,
        },
      });

      await RecentView.create({
        user_id: req.userId,
        item_id: id,
      });

      const allRecentData = await RecentView.findAll({
        where: {
          user_id: req.userId,
        },
      });

      if (allRecentData.length > 5) {
        await RecentView.destroy({
          where: {
            id: allRecentData[0].dataValues.id,
            user_id: req.userId,
          },
        });
      }
      res.status(200).json('okok');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getRecentView: async (req, res) => {
    try {
      const allRecentData = await RecentView.findAll({
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Item,
          },
        ],
      });

      res.status(200).json(allRecentData.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  },

  patchQuantity: async (req, res) => {
    const { quantity, id, totalPrice } = req.body;

    try {
      await Lineitem.update(
        {
          quantity: quantity,
          total_price: totalPrice,
        },
        {
          where: {
            user_id: req.userId,
            option_id: id,
          },
        },
      );

      res.status(200).json('hello');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  toggleLike: async (req, res) => {
    const { id } = req.body;

    try {
      let likeData = await Like.findOne({
        where: {
          user_id: req.userId,
          item_id: id,
        },
      });

      if (!likeData) {
        const likeData = await Like.create({
          user_id: req.userId,
          item_id: id,
          liked: 1,
        });

        res.status(200).json(likeData);
      }

      await likeData.destroy({ where: { user_id: req.userId, item_id: id } });
      res.status(200).json([]);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getLike: async (req, res) => {
    const { id } = req.params;

    try {
      const likeData = await Like.findOne({
        where: {
          user_id: req.userId,
          item_id: id,
        },
      });

      if (likeData) {
        res.status(200).json(likeData);
      } else {
        res.status(200).json([]);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllLikes: async (req, res) => {
    try {
      const likeData = await Like.findAll({
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Item,
          },
        ],
      });

      if (likeData) {
        res.status(200).json(likeData);
      } else {
        res.status(200).json([]);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createOrder: async (req, res) => {
    const { purchaser, email, phone, method, totalPrice, address } = req.body;

    try {
      const newOrder = await Order.create({
        user_id: req.userId,
        final_price: totalPrice,
        destination: address,
        phone_number: phone,
        purchaser: purchaser,
        email: email,
        method: method,
        state: '결제완료',
      });

      await Lineitem.update(
        {
          order_id: newOrder.id,
        },
        {
          where: {
            user_id: req.userId,
            order_id: null,
          },
        },
      );

      res.status(200).json('okok');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getOrder: async (req, res) => {
    try {
      const orderData = await Order.findAll({
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Lineitem,
            include: [
              {
                model: Option,
                include: [
                  {
                    model: Item,
                  },
                ],
              },
            ],
          },
        ],
      });

      res.status(200).json(orderData.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
