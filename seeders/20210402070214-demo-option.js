'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Options', [
      {
        item_id: 1,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 1,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 2,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 2,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 3,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 3,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 4,
        grams: 200,
        price: 18000,
      },
      {
        item_id: 4,
        grams: 500,
        price: 36000,
      },
      {
        item_id: 5,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 5,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 6,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 6,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 7,
        grams: 200,
        price: 12000,
      },
      {
        item_id: 7,
        grams: 500,
        price: 24000,
      },
      {
        item_id: 8,
        grams: 200,
        price: 14000,
      },
      {
        item_id: 8,
        grams: 500,
        price: 28000,
      },
      {
        item_id: 9,
        grams: 200,
        price: 17000,
      },
      {
        item_id: 9,
        grams: 500,
        price: 34000,
      },
      {
        item_id: 10,
        grams: 200,
        price: 17000,
      },
      {
        item_id: 10,
        grams: 500,
        price: 34000,
      },
      {
        item_id: 11,
        grams: 200,
        price: 14000,
      },
      {
        item_id: 11,
        grams: 500,
        price: 28000,
      },
      {
        item_id: 12,
        grams: 200,
        price: 14000,
      },
      {
        item_id: 12,
        grams: 500,
        price: 28000,
      },
      {
        item_id: 13,
        grams: 200,
        price: 14000,
      },
      {
        item_id: 13,
        grams: 500,
        price: 28000,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Options', null, {});
  },
};
