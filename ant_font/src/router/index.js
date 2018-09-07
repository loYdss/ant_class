const routers = [{
        path: '/',
        name: 'Home',
        component: (resolve) => require(['../components/Home.vue'], resolve),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['../components/Login.vue'], resolve),
        meta: {
            title: '登录',
            jugg: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: (resolve) => require(['../components/Register.vue'], resolve),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/home',
        name: 'user_home',
        component: (resolve) => require(['../components/Home_login.vue'], resolve),
        meta: {
            title: '用户主页',
            auth: true
        }
    },
    {
        path: '/testlist',
        name: 'test_list',
        component: (resolve) => require(['../components/TestList.vue'], resolve),
        meta: {
            title: '测试列表',
            auth: true
        }
    },
    {
        path: '/test/:id',
        name: 'test',
        component: (resolve) => require(['../components/Test.vue'], resolve),
        meta: {
            title: '查看测试',
            auth: true
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: (resolve) => require(['../components/Admin.vue'], resolve),
        meta: {
            title: '管理页面',
            auth: true
        }
    },
    {
        path: '/admin_test',
        name: 'admin_test',
        component: (resolve) => require(['../components/Admin_test.vue'], resolve),
        meta: {
            title: '试卷详情',
            auth: true
        }
    },
    {
        path: '/admin_testlist',
        name: 'testlist',
        component: (resolve) => require(['../components/Admin_testlist.vue'], resolve),
        meta: {
            title: '管理试卷',
            auth: true
        }
    },
    {
        path: '/show',
        name: 'show',
        component: (resolve) => require(['../components/show.vue'], resolve),
    },
    {
        path: '/cooick',
        name: 'cooick',
        component: (resolve) => require(['../components/cooick.vue'], resolve),
    },
    {
        path: '/createExam',
        name: 'createExam',
        component: (resolve) => require(['../components/CreateExam.vue'], resolve),
        meta: {
            title: '新建试卷',
            auth: true
        }
    },
    {
        path: '/addQuestion',
        name: 'addQuestion',
        component: (resolve) => require(['../components/addQuestion.vue'], resolve),
        meta: {
            title: '新建问题',
            auth: true
        }
    },
    {
        path: '/addListen',
        name: 'addListen',
        component: (resolve) => require(['../components/addListen.vue'], resolve),
        meta: {
            title: '新建听力',
            auth: true
        }
    },
    {
        path: '/addVoice',
        name: 'addVoice',
        component: (resolve) => require(['../components/addVoice.vue'], resolve),
        meta: {
            title: '上传听力',
            auth: true
        }
    },
    {
        path: '/addExam/:id',
        name: 'addExam',
        component: (resolve) => require(['../components/AddExam.vue'], resolve),
        meta: {
            title: '新建问卷',
            auth: true
        }
    },
    {
        path: '/addExamListen/:id',
        name: 'addExamListen',
        component: (resolve) => require(['../components/addExamListen'], resolve),
        meta: {
            title: '添加听力',
            auth: true
        }
    },
];
export default routers;