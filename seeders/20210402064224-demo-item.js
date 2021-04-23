'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        category: 'Blended',
        name: '에스쇼콜라',
        image:
          'https://user-images.githubusercontent.com/74134503/113382366-3ce97680-93bc-11eb-900a-7db40f849c88.jpg',
        description: '초콜릿, 크림, 카카오',
        price: 12000,
      },
      {
        category: 'Blended',
        name: '프루티봉봉',
        image:
          'https://user-images.githubusercontent.com/74134503/113382368-3e1aa380-93bc-11eb-8f86-9dcd45c19f67.jpg',
        description: '얼그레이, 케인슈가, 시러피, 클린',
        price: 12000,
      },
      {
        category: 'Blended',
        name: '오시게',
        image:
          'https://user-images.githubusercontent.com/74134503/113382367-3d820d00-93bc-11eb-9645-c616d0b14fe3.jpg',
        description: '마카다미아, 카라멜, 베리, 크림',
        price: 12000,
      },
      {
        category: 'Blended',
        name: '봄',
        image:
          'https://user-images.githubusercontent.com/74134503/115193212-d20f9d80-a126-11eb-85da-1ae1aa468bf4.jpg',
        description: '플로럴, 라임, 시러피, 클린',
        price: 18000,
      },
      {
        category: 'Single',
        name: '돈 헥터 엘살바도르',
        image:
          'https://user-images.githubusercontent.com/74134503/113382358-3a871c80-93bc-11eb-9fc1-d0b3d90d4577.jpg',
        description: '피칸, 오렌지, 시트러스, 웰밸런스',
        price: 12000,
      },
      {
        category: 'Single',
        name: '라스 구아카나스 콜롬비아',
        image:
          'https://user-images.githubusercontent.com/74134503/113382361-3bb84980-93bc-11eb-9256-21b78c6ebcbf.jpg',
        description: '시나몬, 다크초콜릿, 럼',
        price: 12000,
      },
      {
        category: 'Single',
        name: '루바 게이샤 코스타리카',
        image:
          'https://user-images.githubusercontent.com/74134503/113382364-3c50e000-93bc-11eb-9ed6-d5f6f43d7ac0.jpg',
        description: '석류, 초콜릿, 라운드',
        price: 12000,
      },
      {
        category: 'Single',
        name: '과테말라 부감빌리아',
        image:
          'https://user-images.githubusercontent.com/74134503/113382365-3ce97680-93bc-11eb-8d04-0a8744f9ada9.jpg',
        description: '오렌지, 헤이즐넛, 웰밸런스, 시러피',
        price: 14000,
      },
      {
        category: 'Single',
        name: '에콰도르 루그마파타',
        image:
          'https://user-images.githubusercontent.com/74134503/115191936-17cb6680-a125-11eb-9d9b-4b58ee6608cb.jpg',
        description: '플로럴, 망고, 케인슈가, 쥬시',
        price: 17000,
      },
      {
        category: 'Single',
        name: '파나마 핀카 데보라',
        image:
          'https://user-images.githubusercontent.com/74134503/115192210-77297680-a125-11eb-8728-906b26b8d9ca.jpg',
        description: '아이스와인, 자스민, 허니, 시러피',
        price: 17000,
      },
      {
        category: 'Single',
        name: '콜롬비아 디카페인',
        image:
          'https://user-images.githubusercontent.com/74134503/115192643-0afb4280-a126-11eb-812a-c46f0ed07167.jpg',
        description: '자몽, 다크초콜릿, 크림',
        price: 14000,
      },
      {
        category: 'Single',
        name: '에티오피아 고구구',
        image:
          'https://user-images.githubusercontent.com/74134503/115192844-501f7480-a126-11eb-869a-b0637b987f85.jpg',
        description: '라즈베리, 푸룬, 과일잼',
        price: 14000,
      },
      {
        category: 'Single',
        name: '코스타리카 카이토',
        image:
          'https://user-images.githubusercontent.com/74134503/115193063-9f65a500-a126-11eb-923a-8dba72bea7ba.jpg',
        description: '카라멜, 웰밸런스, 라운드',
        price: 14000,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
