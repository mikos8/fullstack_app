module.exports.login = function(req,res){
    res.status(200).json({
        login:true,
        text:'fromController'
    })
}

module.exports.register = function(req,res){
    res.status(200).json({
        register:'formContrregister'
    })
}