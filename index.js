const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")
const logger=require("./middleware/logger")

const morgan = require("morgan")
const deny=require("./middleware/deny")
const server = express()
const port = 4000

server.use(express.json())
//3rd party middleware
//server.use(morgan("combined"))
//server.use(deny())
server.use(logger("long"))
server.use(welcomeRouter)
server.use(usersRouter)
server.use((err,req,res,next)=>{
	console.log(err)
	res.status(500).json({
		message:"something, went wrong"
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
