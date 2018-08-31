'use strict';
// app/service/user.js
const Service = require('egg').Service;
// const Github = require('../extend/application');
class ExamService extends Service {
    constructor(ctx) {
        super(ctx);
        this.User = this.ctx.model.User;
        this.Exam = this.ctx.model.Exam;
        this.questionExam = this.ctx.model.questionExam;
        this.hearExam = this.ctx.moudle.hearExam;
        this.Hear = this.ctx.moudle.Hear;
        this.Question = this.ctx.moudle.Question;

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
    async editExam(id, title, describe, url) {
        const data = await this.Exam.update({
            title,
            describe,
            photo: url,
        }, {
            where: {
                id,
            },
        });
        return data;
    }
    async deleteExam(vid, uid) {
        const t = await this.ctx.model.transaction();
        try {
            const dele = await this.OwnExam.destroy({
                where: {
                    uid,
                    vid,
                },
            });
            await this.Exam.update({
                status: 2,
            }, {
                where: {
                    id: vid,
                },
            });
            await t.commit();
            return dele;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }
    async getExamInfo(vid) {
        const Exam = await this.Exam.findOne({
            where: {
                id: vid,
            },
        });
        return Exam;
    }




    
    async addExamQuestion(eid, qid) {
        const data = await this.questionExam.findOrCreate({
            where: {
                qid,
                eid,
            },
        });
        return data;
    }
    async deleteExamQuestion(eid, qid) {
        const data = await this.questionExam.destroy({
            where: {
                eid,
                qid,
            }
        });
        // console.log(data);
        return data;
    }

   async addExamHear(eid, hid) {
       const data = await this.hearExam.findOrCreate({
           where: {
               hid,
               eid,
           },
       });
       return data;
   }
   async deleteExamHear(eid, hid) {
       const data = await this.hearExam.destroy({
           where: {
               hid,
               qid,
           }
       });
       // console.log(data);
       return data;
   }




    // async getExamScore(vid, offset, pagesize) {
    //     await this.Exam.increment(['visits'], {
    //         by: 1,
    //         where: {
    //             id: vid
    //         }
    //     })
    //     const data = await this.ScoreExam.findAll({
    //         // attributes: ['vid', 'uid'],
    //         where: {
    //             vid,
    //         },
    //         limit: pagesize,
    //         offset,
    //     });
    //     // console.log(data)
    //     let tiem;
    //     const result = [];
    //     for (tiem in data) {
    //         // const temp = await this.ctx.helper.getIssue(data[tiem].get('sid'));
    //         // result.push(temp); //issues 获取
    //         const score = await this.Score.findOne({
    //             where: {
    //                 sid: data[tiem].get('sid')
    //             }
    //         });
    //         result.push(score);
    //     }

    //     return result;
    // }
  


    async findOwner(vid) {
        const data = await this.OwnExam.findOne({
            where: {
                vid
            }
        })
        return data;
    }
}

module.exports = ExamService;