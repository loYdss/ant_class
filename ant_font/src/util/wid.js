exports.install = function (Vue, option) {
    Vue.prototype.juj_wid = function(wid){
        if(945 < wid < 1080){
            document.getElementById('login').style.marginLeft="0";
             document.getElementById('login').style.marginTop="6.25rem";
        }
        if(wid < 945){
            document.getElementById('login').style.marginLeft="11.2rem";
            document.getElementById('login').style.marginTop="0";
        }
    };
    Vue.prototype.init_wid = function(){
        let wid = document.documentElement.clientWidth;
        if(945 < wid < 1080){
            document.getElementById('login').style.marginLeft="0";
             document.getElementById('login').style.marginTop="6.25rem";
        }
        if(wid < 945){
            document.getElementById('login').style.marginLeft="11.2rem";
            document.getElementById('login').style.marginTop="0";
        }
    };
    Vue.prototype.juj_reg_wid = function(wid){
        if(945 < wid < 1080){
            document.getElementById('register').style.marginLeft="0";
             document.getElementById('register').style.marginTop="6.25rem";
        }
        if(wid < 945){
            document.getElementById('register').style.marginLeft="11.2rem";
            document.getElementById('register').style.marginTop="0";
        }
};
Vue.prototype.init_reg_wid = function(){
    let wid = document.documentElement.clientWidth;
    if(945 < wid < 1080){
        document.getElementById('register').style.marginLeft="0";
         document.getElementById('register').style.marginTop="6.25rem";
    }
    if(wid < 945){
        document.getElementById('register').style.marginLeft="11.2rem";
        document.getElementById('register').style.marginTop="0";
    }
};
    Vue.prototype.init_home = function(){
        let width = document.body.clientWidth;
        if(width < 1000){
          document.getElementById('footer').style.display = 'none';
        } 
    };
    Vue.prototype.init_user_home = function(arr){
        let wid = document.documentElement.clientWidth;
        if(wid < 480){
            for(let i = 0; i < arr.length; i++){
            arr[i].style.marginLeft = '5rem';
        }
        }
    }
};