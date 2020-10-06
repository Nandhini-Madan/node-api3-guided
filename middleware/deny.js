module.exports = () => {
    return (req, res, next) => {
        //header value from the reuest that tells us which software was used to call the endpoint
        const agent = req.headers["user-agent"]
        if (/insomnia/.test(agent)) {
            //if user contains insomnia the value " insomnia " in it
            return res.status(418).json({
                message: "No insomnia allowed here"
            })
        }
        next()
    }
}