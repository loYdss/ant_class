'use strict';
const Controller = require('egg').Controller;

class Bank extends Controller {

    constructor(ctx) {
        super(ctx);
        this.BankService = ctx.service.bankService;
        // this.ctx.session.uid = 123; // 测试用
    }


    async addQuestion(){
        const {
            title,
            a,b,c,d,answer,
        } = this.ctx.request.body;
         const response = await this.BankService.addQuestion(title, title, a, b, c, d, answer);
         this.ctx.body = response;
    }
      async addHear() {
          const {
              title,
              a,
              b,
              c,
              d,
              answer,url
          } = this.ctx.request.body;
          const response = await this.BankService.addHear(title, title, a, b, c, d, answer,url);
          this.ctx.body = response;
      }
      async getQuestion(){
          
      }
}

module.exports = VolumeController;