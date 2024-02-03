// this is deploy json server to host node
//json-server-----npm i json-server

// instead of import
const JSONServer = require('json-server')
// create 
const MPServer = JSONServer.create()
// path--router
const router = JSONServer.router("db.json")
// convert to json
const middleware = JSONServer.defaults()
// create a port to run
const port = 3000 || process.env.port

// now connect our created mpserver 
MPServer.use(middleware)
MPServer.use(router)

// waiting
MPServer.listen(port, () => {
    console.log(`MP Server started at port: ${port} and waiting for client request!`);
})
