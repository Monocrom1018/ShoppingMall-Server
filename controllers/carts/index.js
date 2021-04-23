const models = require('../../models');
const { Item, Option, Lineitem } = models;
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  createCart: async (req, res) => {
    const { weight, itemId, price, quantity, total_price } = req.body;

    try {
      const optionData = await Option.findOne({
        where: {
          item_id: itemId,
          grams: weight,
        },
      });

      await Lineitem.create({
        user_id: req.userId,
        item_id: itemId,
        option_id: optionData.id,
        price: price,
        weight: weight,
        quantity: quantity,
        total_price: total_price,
      });

      res.status(200).json('cartIn worked well!');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCart: async (req, res) => {
    try {
      const lineItemData = await Lineitem.findAll({
        where: {
          user_id: req.userId,
          order_id: null,
        },
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
      });

      res.status(200).json(lineItemData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteCart: async (req, res) => {
    const { id } = req.params;

    try {
      await Lineitem.destroy({
        where: {
          id: id,
          user_id: req.userId,
        },
      });

      res.status(200).json('okok');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
