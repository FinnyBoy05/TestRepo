const os = require("os")

//info about current user
const user = os.userInfo()

// method return the system uptime in seconds
console.log(os.uptime())


const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentos)
