import * as Sequelize from 'sequelize';

let sequelize = new Sequelize('hackdb', 'hackuser', 'hackpass', {
    host: 'database',
    dialect: 'mysql'
});

export const MessageSequelize = sequelize.define('message', {
    messageID: {
        type: Sequelize.INTEGER,
        field: 'messageID',
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    message: {
        type: Sequelize.TEXT,
        field: 'message'
    }
}, {
    tableName: 'message',
    timestamps: false
});


