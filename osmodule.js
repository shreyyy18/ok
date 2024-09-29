const os=require('os')
//const user=os.userInfo()
//console.log(user)
//console.log(`The uptime is ${os.uptime()} seconds`)

const currentos={
    name:os.type(),
    release: os.release(),
    totoalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)