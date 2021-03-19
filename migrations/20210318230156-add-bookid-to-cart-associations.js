'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn("Carts", "bookId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Books",
        },
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn("Carts", "bookId");
  }
};
