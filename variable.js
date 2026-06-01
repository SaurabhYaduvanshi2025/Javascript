const accountId = 196552323
let accountEmail = "saurabhyaduvanshi@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let state ;

// accountId = 2 is not allowed because already define on top of display 

accountEmail = "random@gmail.com"
accountPassword = "21212121"
accountCity = "America"

console.log(accountId)
/* prefer not to user var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,state])