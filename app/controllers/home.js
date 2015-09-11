module.exports =  function(){
    var controller = {};
    controller.index = function(req,res){
        var datetime = new Date();
        var hour = datetime.getHours() + ':' + datetime.getMinutes() + ':' + datetime.getSeconds() + '.'+ datetime.getMilliseconds()
        
        res.render('index',{hour: hour });
    };
    
    return controller;
}