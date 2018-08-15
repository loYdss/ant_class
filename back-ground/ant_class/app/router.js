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
  router.get('/user/collection/:uid', controller.user.getUserCollection); //用户权限
  router.get('/user/:uid', controller.user.getInfo);
  router.get('/user/resulys/:uid', controller.user.getUserResults)

  router.post('/user/collection', controller.user.addCollectionExam); //拥有者权限
  router.delete('/user/collection/:eid', controller.user.deleteCollectionExam); //拥有者权限
  router.get('/Exam', controller.Exam.getExamList);
  router.post('/Exam', controller.Exam.createExam); // 用户
  router.delete('/Exam/:eid', controller.Exam.deleteExam); //拥有者权限
  router.put('/Exam/:eid', controller.Exam.editExam); // 拥有者权限
  router.get('/Exam/:eid', controller.Exam.getExamInfo);
  router.get('/Exam/:eid/score', controller.Exam.getExamScore);
  router.post('/Exam/:eid/score', controller.Exam.addExamScore); //拥有者
  router.delete('/Exam/:eid/score/:sid', controller.Exam.deleteExamScore); //拥有者
  router.post('/upload', controller.multipart.upload); //拥有者
  router.get('/Exam/:eid/comment', controller.Exam.getComment);
  router.post('/Exam/:eid/comment', controller.Exam.addComment); //用户
  router.delete('/comment/:cid', controller.Exam.delectComment); //拥有者
  router.delete('/subcomment/:cid', controller.Exam.delectSubcomment); //拥有者
  app.passport.mount('github', {
    successRedirect: '/'
  });
};