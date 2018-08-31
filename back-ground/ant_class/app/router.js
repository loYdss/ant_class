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
  router.get('/user/:uid', controller.user.getInfo);

  // 用户相关信息
  // router.get('/user/results/:uid', controller.user.getUserResults)
  router.post('/user/results/:uid', controller.user.addUserResults)
  // router.post('/user/collection', controller.user.addCollectionExam); //拥有者权限
  // router.delete('/user/collection/:eid', controller.user.deleteCollectionExam); //拥有者权限


  // 试卷
  router.get('/Exam', controller.Exam.getExamList);
  router.post('/Exam', controller.Exam.createExam); // 用户
  router.delete('/Exam/:eid', controller.Exam.deleteExam); //拥有者权限
  router.put('/Exam/:eid', controller.Exam.editExam); // 拥有者权限
  router.get('/Exam/:eid', controller.Exam.getExamInfo); //所有试题

  // 选择题
  router.get('/Exam/:eid/question', controller.Exam.getExamQuestion);
  router.post('/Exam/:eid/question', controller.Exam.addExamQuestion); //拥有者
  router.delete('/Exam/:eid/question/:qid', controller.Exam.deleteExamQuestion); //拥有者
  
  // 听力题
  router.get('/Exam/:eid/hear', controller.Exam.getExamHear);
  router.post('/Exam/:eid/hear', controller.Exam.addExamHear); //拥有者
  router.delete('/Exam/:eid/hear/:hid', controller.Exam.deleteExamHear); //拥有者


  // 题库
  router.get('/Bank/question', controller.Bank.getQuestion);
  router.get('/Bank/hear', controller.Bank.getHear);
  router.post('/upload', controller.multipart.upload); //上传音频
  router.post('/Bank/question', controller.Bank.addQuestion);
  router.post('/Bank/question', controller.Bank.addHear);

  app.passport.mount('github', {
    successRedirect: '/'
  });
};