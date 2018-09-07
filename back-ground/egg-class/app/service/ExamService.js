'use strict';
// app/service/user.js
const Service = require('egg').Service;
// const Github = require('../extend/application');
class examService extends Service {
    constructor(ctx) {
        super(ctx);
        this.User = this.ctx.model.User;
        this.Exam = this.ctx.model.Exam;
        this.questionExam = this.ctx.model.QuestionExam;
        this.hearExam = this.ctx.model.HearExam;
        this.Hear = this.ctx.model.Hear;
        this.Question = this.ctx.model.Question;
        this.OwnExam = this.ctx.model.OwnExam;

    }
    async getExamList() {
        const data = this.Exam.findAll({

        });
        return data;
    }
    async createExam(title, describe, uid) {
        // console.log(this.app.model.sequelize)
        const t = await this.ctx.model.transaction();
        try {
            const data = await this.Exam.create({
                title,
                describe,
            });
            // console.log(data.get('id'));
            await this.OwnExam.create({
                uid,
                eid: data.get('id'),
            });
            await t.commit();
            return data;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }
    async editExam(id, title, describe) {
        const data = await this.Exam.update({
            title,
            describe,

        }, {
            where: {
                id,
            },
        });
        return data;
    }
    async deleteExam(eid, uid) {
        const t = await this.ctx.model.transaction();
        try {
            const dele = await this.OwnExam.destroy({
                where: {
                    uid,
                    eid,
                },
            });
            await this.Exam.update({
                status: 2,
            }, {
                where: {
                    id: eid,
                },
            });
            await t.commit();
            return dele;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }

    // async addExamQuestion(eid, qid) {
    //     const data = await this.questionExam.findOrCreate({
    //         where: {
    //             qid,
    //             eid,
    //         },
    //     });
    //     return data;
    // }
    // async deleteExamQuestion(eid, qid) {
    //     const data = await this.questionExam.destroy({
    //         where: {
    //             eid,
    //             qid,
    //         }
    //     });
    //     // console.log(data);
    //     return data;
    // }

    // async addExamHear(eid, hid) {
    //     const data = await this.hearExam.findOrCreate({
    //         where: {
    //             hid,
    //             eid,
    //         },
    //     });
    //     return data;
    // }
    // async deleteExamHear(eid, hid) {
    //     const data = await this.hearExam.destroy({
    //         where: {
    //             hid,
    //             eid,
    //         }
    //     });
    //     // console.log(data);
    //     return data;
    // }


    async getExamInfo(eid) {
        const t = await this.ctx.model.transaction();
        try {
            const Question = await this.questionExam.findAll({

                where: {
                    eid
                }
            });
            // console.log(Question)

            let tiem;
            const result = {
                question: [],
                hear: []
            };

            for (tiem in Question) {
                // const temp = await this.ctx.helper.getIssue(data[tiem].get('sid'));
                // result.push(temp); //issues 获取
                console.log(Question)
                const score = await this.Question.findOne({
                    where: {
                        id: Question[tiem].get('qid')
                    }
                });
                // console.log(score)
                result.question.push(score);
            }
            const Hear = await this.hearExam.findAll({
                // attributes: ['vid', 'uid'],
                where: {
                    eid,
                },
            });
            for (tiem in Hear) {
                // const temp = await this.ctx.helper.getIssue(data[tiem].get('sid'));
                // result.push(temp); //issues 获取
                const score = await this.Hear.findOne({
                    where: {
                        id: Hear[tiem].get('hid')
                    }
                });
                result.hear.push(score);
            }
            await t.commit();
            return result;
        } catch (err) {
            await t.rollback();
            return err;
        }

    }

    async getExamHear(eid) {
        const data = await this.hearExam.findAll({
            where: {
                eid
            }
        })
        return data;
    }
    async getExamQuestion(eid) {
        const data = await this.questionExam.findAll({
            where: {
                eid
            }
        })
        return data;
    }
    async addExamHear(eid, hid) {
        const data = await this.hearExam.findOrCreate({
            where: {
                eid,
                hid
            }
        })
        return data;
    }
    async addExamQuestion(eid, qid) {

        const data = await this.questionExam.findOrCreate({
            where: {
                eid,
                qid
            }
        })
        return data;
    }
    async deleteExamQuestion(eid, qid) {
        const data = await this.questionExam.destroy({
            where: {
                eid,
                qid
            }
        })
        return data;
    }
    async deleteExamHear(eid, hid) {
        const data = await this.hearExam.destroy({
            where: {
                eid,
                hid
            }
        })
        return data;
    }

    async findOwner(eid) {
        const data = await this.OwnExam.findOne({
            where: {
                eid
            }
        })
        return data;
    }
}

module.exports = examService;