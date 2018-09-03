// 谱册表

'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY,
        DATE,
    } = app.Sequelize;

    const ExamModel = app.model.define('Exam', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: STRING(50),
            allowNull: false,
            defaultValue: 'undefined',
        },
        describe: {
            type: STRING(300),
            allowNull: true,
            defaultValue: 'undefined',
        },
        status: { // -1已删除 0不可编辑 1可编辑 2回收站
            type: INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        visits: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0
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
        timestamps: true, // 时间戳
        tableName: 'Exam', // 设置表名
    });

    return ExamModel;
};