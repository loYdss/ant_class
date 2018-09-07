'use strict';
// app/service/user.js
const Service = require('egg').Service;

class BankService extends Service {
    constructor(ctx) {
        super(ctx);
        // this.User = this.ctx.model.User;
        // this.Exam = this.ctx.model.Exam;
        // this.questionExam = this.ctx.model.questionExam;
        // this.hearExam = this.ctx.moudle.hearExam;
        this.Hear = this.ctx.model.Hear;
        this.Question = this.ctx.model.Question;

    }
    async addQuestion(title, a, b, c, d, answer) {
        const data = await this.Question.create({
            title,
            a,
            b,
            c,
            d,
            answer
        });
        return data;
    }

    async addHear(title, a, b, c, d, answer, url) {
        const data = await this.Hear.create({
            title,
            a,
            b,
            c,
            d,
            answer,
            url
        });
        return data;
    }

    async getQuestion() {
        const data = await this.Question.findAll();
        return data;
    }
    async getHear() {
        const data = await this.Hear.findAll();
        return data;
    }


}

module.exports = BankService;