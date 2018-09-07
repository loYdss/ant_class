'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.home.index);
    router.get('/user/logout', controller.user.logout);
    // router.get('/user/collection/:uid', controller.user.getUserCollection); //用户权限
    router.get('/user', controller.user.getInfo);

    // 用户相关信息
    // router.get('/user/results/:uid', controller.user.getUserResults)
    router.post('/user/results/:uid', controller.user.addUserResults)
        // router.post('/user/collection', controller.user.addCollectionExam); //拥有者权限
        // router.delete('/user/collection/:eid', controller.user.deleteCollectionExam); //拥有者权限
        // 试卷
    router.get('/Exam', controller.exam.getExamList);
    router.post('/Exam', controller.exam.createExam); // 用户
    router.delete('/Exam/:eid', controller.exam.deleteExam); //拥有者权限

    router.put('/Exam/:eid', controller.exam.editExam); // 拥有者权限

    router.get('/Exam/:eid', controller.exam.getExamInfo);
    // 选择题
    router.get('/Exam/:eid/question', controller.exam.getExamQuestion);
    router.post('/Exam/:eid/question', controller.exam.addExamQuestion); //拥有者
    router.delete('/Exam/:eid/question/:qid', controller.exam.deleteExamQuestion); //拥有者
    // 听力题
    router.get('/Exam/:eid/hear', controller.exam.getExamHear);
    router.post('/Exam/:eid/hear', controller.exam.addExamHear); //拥有者
    router.delete('/Exam/:eid/hear/:hid', controller.exam.deleteExamHear); //拥有者
    // 题库
    router.get('/Bank/question', controller.bank.getQuestion);
    router.get('/Bank/hear', controller.bank.getHear);
    router.post('/upload', controller.multipart.upload); //上传音频
    router.post('/Bank/question', controller.bank.addQuestion);
    router.post('/Bank/hear', controller.bank.addHear);

    app.passport.mount('github', {
        successRedirect: 'http://localhost:8080/'
    });
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
}