function log(name){
    console.log(name)
}

function welcome(){
    console.log("welcome to my application, i am currently a student at function")
}

console.log(module)

const url = "https://google.com"

module.exports.logName = log
module.exports.welcomeMessage = welcome
module.exports.newUrl = url
