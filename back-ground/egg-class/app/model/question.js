//  评论表


'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY,
        DATE,
        Deferrable
    } = app.Sequelize;

    const QuestionModel = app.model.define('Question', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: STRING(200),
            allowNull: true,
        },
        answer: {
            type: STRING(10),
            allowNull: false,
            defaultValue: 'A',
        },
        a: {
            type: STRING(100),
            allowNull: false,
            defaultValue: 'undefined',
        },
        b: {
            type: STRING(100),
            allowNull: false,
            defaultValue: 'undefined',
        },
        c: {
            type: STRING(100),
            allowNull: false,
            defaultValue: 'undefined',
        },
        d: {
            type: STRING(100),
            allowNull: false,
            defaultValue: 'undefined',
        },
        status: { // -1已删除 0不可编辑 1可编辑 2回收站
            type: INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        created_at: {
            type: DATE,
            allowNull: true,
        },
        updated_at: {
            type: DATE,
            allowNull: true,
        },

    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',

        tableName: 'Question', // 设置表名
    });

    return QuestionModel;
};