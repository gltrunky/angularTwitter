const db = require('../config/database');
const Sequelize = require('sequelize');

const Tw = db.define('tw', {
    message: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    /* timestamps: false, */
    underscored: true,
    /*freezeTableName: true,*/
    tableName: 'tw'
});

module.exports = Tw;