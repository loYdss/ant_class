exports.install = function(Vue, option){
    Vue.prototype.deleteExam = function(index){
        this.items.splice(index,1);
    };

}