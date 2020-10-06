module.exports = (format) => {
    return (req, res, next) => {
        switch (format) {
            case "short":
                console.log(`[${req.method}] [${req.url}]`)
                //  next()
                break
            case "long":
                const time = new Date().toISOString()
                console.log(` TIME [${time}] [${req.ip}] [${req.method}] [${req.url}]`)
            //This middleware is finished , move on to the next piece of middleware in the stack
        }
        next()
    }
}