'use strict';
const Controller = require('egg').Controller;

class BankController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.BankService = ctx.service.bankService;
        // this.ctx.session.uid = 123; // 测试用
    }
    async addQuestion() {
        const {
            title,
            a,
            b,
            c,
            d,
            answer,
        } = this.ctx.request.body;
        const response = await this.BankService.addQuestion(title, a, b, c, d, answer);
        this.ctx.body = response;
    }
    async addHear() {
        const {
            title,
            a,
            b,
            c,
            d,
            answer,
            url
        } = this.ctx.request.body;
        const response = await this.BankService.addHear(title, a, b, c, d, answer, url);
        this.ctx.body = response;
    }

    async getQuestion() {

        const response = await this.BankService.getQuestion();
        this.ctx.body = response;
    }

    async getHear() {
        const response = await this.BankService.getHear();
        this.ctx.body = response;
    }
}

module.exports = BankController;