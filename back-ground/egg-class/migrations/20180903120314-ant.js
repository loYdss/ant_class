'use strict';
// 注意创建以及卸载顺序,先按照被依赖的再安装依赖别人的,先卸载依赖别人的,再卸载被依赖的
module.exports = {
    async up(queryInterface, Sequelize) {
        const {

            STRING,
            INTEGER,
            ARRAY,
            DATE,

        } = Sequelize;
        await queryInterface.createTable('Exam', {
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

        });

        await queryInterface.createTable('User', {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            avatar: {
                type: STRING(200),
                allowNull: true,
            },
            name: {
                type: STRING(10),
                allowNull: false,
                defaultValue: 'undefined',
            },
            signature: {
                type: STRING(100),
                allowNull: true,
                defaultValue: 'undefined',
            },
            role: { //
                type: INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            results: {
                type: INTEGER,
                allowNull: true,
                defaultValue: 1, //1登录 ,0未登录,2管理员
            },
            created_at: DATE,
            updated_at: DATE,
        });

        await queryInterface.createTable('Hear', {
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
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('Question', {
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
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('ownExam', {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            eid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Exam', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),

            },
            uid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'User', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),
            },
        });
        await queryInterface.createTable('questionExam', {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            eid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Exam', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),

            },
            qid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Question', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),
            },
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('hearExam', {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            eid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Exam', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                })
            },
            hid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Hear', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                })
            },
        });

        await queryInterface.createTable('Authorization', {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            provider: { //第三方
                type: STRING(20),
                allowNull: false,

            },
            token: {
                type: STRING(200),
                allowNull: false,
            },
            uid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'User', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: false,
                }),
            },

        }, {
            createAt: 'created_at',
            updateAt: 'updated_at',

        });
        /*
                  Add altering commands here.
                  Return a promise to correctly handle asynchronicity.

                  Example:
                  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
                */
    },

    async down(queryInterface) {
        await queryInterface.dropTable('hearExam');
        await queryInterface.dropTable('questionExam');
        await queryInterface.dropTable('ownExam');
        await queryInterface.dropTable('Exam');
        await queryInterface.dropTable('Question');
        await queryInterface.dropTable('User');
        await queryInterface.dropTable('Hear');

        await queryInterface.dropTable('Authorization')
            /*
                      Add reverting commands here.
                      Return a promise to correctly handle asynchronicity.

                      Example:
                      return queryInterface.dropTable('users');
                    */
    },
};