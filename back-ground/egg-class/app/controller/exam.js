'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

class ExamController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.examService = ctx.service.examService;
        // this.ctx.session.uid = 123; // 测试用
    }

    async getExamList() {
        const {
            offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, role = 'normal'
        } = this.ctx.query;
        const response = await this.examService.getExamList();
        this.ctx.body = response;
    }

    async createExam() {
        const {
            title,
            describe,
        } = this.ctx.request.body;
        const uid = this.ctx.user.id;
        // const uid = 123; //测试用
        const response = await this.examService.createExam(title, describe, uid);
        this.ctx.body = response;
    }

    async editExam() {
        const {
            title,
            describe,
        } = this.ctx.request.body;
        const {
            eid
        } = this.ctx.params;
        const Exam = await this.examService.findOwner(eid);
        if (Exam.get(uid) !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.examService.editExam(eid, title, describe);
        this.ctx.body = response;
    }

    async deleteExam() {
        const {
            eid
        } = this.ctx.params;
        const uid = this.ctx.user.id;
        // const uid = 123; //测试用
        const response = await this.examService.deleteExam(eid, uid);
        if (response) {
            this.ctx.helper.createRes(200, 'Delete success QwQ');

        } else {
            this.ctx.helper.createRes(409, 'Delete err Orz  ');

        }
        this.ctx.body = response;
    }

    async getExamInfo() {
        const {
            eid
        } = this.ctx.params;
        const response = await this.examService.getExamInfo(eid);
        this.ctx.body = response;
    }
    async addExamQuestion() {
        const {
            eid
        } = this.ctx.params;
        const {
            qid
        } = this.ctx.request.body;
        console.log(eid, qid)
        const response = await this.examService.addExamQuestion(eid, qid);
        this.ctx.body = response;
    }
    async addExamHear() {
        const {
            eid
        } = this.ctx.params;
        const {
            hid
        } = this.ctx.request.body;

        const response = await this.examService.addExamHear(eid, hid);
        this.ctx.body = response;
    }

    async deleteExamHear() {
        const {
            eid,
            hid
        } = this.ctx.params;
        const response = await this.examService.deleteExamHear(eid, hid);
        this.ctx.body = response;
    }
    async deleteExamQuestion() {
        const {
            eid,
            qid
        } = this.ctx.params;
        const response = await this.examService.deleteExamQuestion(eid, qid);
        this.ctx.body = response;
    }

    async getExamHear() {
        const {
            eid
        } = this.ctx.params;
        const response = await this.examService.getExamHear(eid);
        this.ctx.body = response;
    }
    async getExamQuestion() {
        const {
            eid
        } = this.ctx.params;
        const response = await this.examService.getExamQuestion(eid);
        this.ctx.body = response;
    }
}

module.exports = ExamController;