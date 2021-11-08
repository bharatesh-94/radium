const loggerobj = require("./logger")
const helperobj = require("./util/helper")
const formatterobj = require("../validator/formatter")
const _ = require('lodash');
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const oddNumbers = [1,3,5,7,9,11,13,15,17,19]
const arr1 = [1,3,5]
const arr2 = [8,0,1]
const arr3 = [5,8,1]
const arr4 = [2,0,7]
const arr5 = [9,8,6]

console.log(_.chunk(month, [size=3]))
console.log(_.tail(oddNumbers))
console.log(_.union([...arr1],[...arr2],[...arr3],[...arr4],[...arr5]))
console.log(_.fromPairs([["horror", "The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))

loggerobj.logName("this is the name of the log which should be printed in the console")
loggerobj.welcomeMessage()
console.log("this is the link to the word largest search engine " +loggerobj.newUrl)

helperobj.printDate()
helperobj.printMonth()
helperobj.getBatchInfo()

formatterobj.trim("        Hello My Name is Bharatesh             ")
formatterobj.LowerCase("HELLO mY nAme iS BHAratEsH")
formatterobj.UpperCase("hello my name is bharatesh")