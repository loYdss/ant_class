'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

class Exam extends Controller {

    constructor(ctx) {
        super(ctx);
        this.ExamService = ctx.service.ExamService;
        // this.ctx.session.uid = 123; // 测试用
    }

    async getExamList() {
        const {
            offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, role = 'normal'
        } = this.ctx.query;
        const response = await this.ExamService.getExamList(offset, pagesize, role);
        this.ctx.body = response;
    }

    async createExam() {
        const {
            title,
            describe,
        } = this.ctx.request.body;
        const uid = this.ctx.user.id;
        // const uid = 123; //测试用
        const response = await this.ExamService.createExam(title, describe, uid);
        this.ctx.body = response;
    }

    async editExam() {
        const {
            title,
            describe,
            url,

        } = this.ctx.request.body;
        const {
            vid
        } = this.ctx.params;
        const Exam = await this.ExamService.findOwner(vid);
        if (Exam.get(uid) !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.ExamService.editExam(vid, title, describe, url);
        this.ctx.body = response;
    }

    async deleteExam() {
        const {
            vid
        } = this.ctx.params;
        const uid = this.ctx.user.id;

        const response = await this.ExamService.deleteExam(vid, uid);
        if (response) {
            this.ctx.helper.createRes(200, 'Delete success QwQ');

        } else {
            this.ctx.helper.createRes(409, 'Delete err Orz  ');

        }
        this.ctx.body = response;
    }

    async getExamInfo() {
        const {
            vid
        } = this.ctx.params;
        const response = await this.ExamService.getExamInfo(vid);
        this.ctx.body = response;
    }

    async getVolumeScore() {
        const {
            vid
        } = this.ctx.params;
        const {
            offset = DEFAULTOFFSET, pagesize = DEFAULTSCOREPAGESIZE
        } = this.ctx.query;

        const response = await this.VolumeService.getVolumeScore(vid, offset, pagesize);
        // console.log(response)
        this.ctx.body = response;



    }

    async addVolumeScore() {
        const {
            sid,
        } = this.ctx.request.body;
        const {
            vid,
        } = this.ctx.params;
        const volume = await this.VolumeService.findOwner(vid);

        if (volume.get('uid') !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.VolumeService.addVolumeScore(vid, sid);
        this.ctx.body = response;
    }

    async deleteVolumeScore() {
        const {
            vid,
            sid
        } = this.ctx.params;
        const volume = await this.VolumeService.findOwner(vid);

        if (volume.get('uid') !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.VolumeService.deleteVolumeScore(vid, sid);
        this.ctx.body = response;
    }
   
}

module.exports = Exam;