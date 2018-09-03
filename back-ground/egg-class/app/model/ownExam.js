//  用户创建谱册表
'use strict';

module.exports = app => {
    const {
        INTEGER,
    } = app.Sequelize;
    const ownExamModel = app.model.define('ownExam', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        eid: {
            type: INTEGER,
            allowNull: false,
        },
        uid: {
            type: INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'ownExam', // 设置表名

    });
    return ownExamModel;
};