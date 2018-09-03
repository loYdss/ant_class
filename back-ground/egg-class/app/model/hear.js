//  评论表


'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY,
        DATE
    } = app.Sequelize;

    const HearModel = app.model.define('Hear', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: STRING(200),
            allowNull: false,
            defaultValue: 'undefined',
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

        tableName: 'Hear', // 设置表名
    });

    return HearModel;
};