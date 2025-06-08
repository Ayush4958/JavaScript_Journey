console.log('\xa9') // '0' in hexadecimal, \x used before hexadecimal
console.log("\u00A9") // '0' in hexadecimal with unicode escape sequences ,It require at least four hexadecimal digits following \u

// IN todays documentation we learn lot of string and number function and it's not possible to mention them all 
// So, you can directly look on them directly from mozzila documentation

// Date and Time Method 

// using date function and fetching hours , minutes & seconds from it
let x = new Date()
let hour = x.getHours()
let min = x.getMinutes()
let sec = x.getSeconds()

// These 3 line of code will help you to convert the 24 hr clock in 12 hr clock 
let hr = String(hour%12)
if (hr == 0){
  hr = '12'
}

// These line of code will maintain the ouput in proper digitaL clock form 
hr += (min < 10 ? ":0" : ":") + min
hr += (sec < 10 ? ":0" : ":") + sec
hr += (hour > 12 ? " P.M." : " A.M.") 
console.log(hr)

// Regular Expression 
// For better and full udersatnding of Regular expression, go and visit regexr.com and practice there
const re = new RegExp("ab+c");
console.log(re)