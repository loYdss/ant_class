// 用户收藏谱册表

'use strict';

module.exports = app => {
    const {
        INTEGER,
    } = app.Sequelize;
    const questionExamModel = app.model.define('questionExam', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        qid: {
            type: INTEGER,
            allowNull: false,

        },
        eid: {
            type: INTEGER,
            allowNull: false,
        },

    }, {

        timestamps: false,
        tableName: 'questionExam', // 设置表名
    });


    return questionExamModel;
};