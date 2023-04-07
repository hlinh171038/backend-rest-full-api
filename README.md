// descripttion: build the REST API with node.js, Express,& MongoDB
// npm init ---> create package.json file
// npm i express mongoose
// npm i --save-dev dotenv nodemon ( dot env pull the environment from DNV file and nodemon allow us refesh every change or restart it)
//  "scripts": {
    "start":"nodemon server.js"
  }, --> then,create the server.js file
//.env file --> environment variable
// .gitignore file

///////////////////////////////////////////////////////////////////////
how to connect nodejs to mongo db
1. create a model of data in database
    // node js want to connect mongo --> nead product modal ( inside product modal contain product chema ( detemine what kind of data of product modal))
2. use a model to save data in mongoose db
3. use middleware
/////////////////////////////////////////////////////////////////////////
Fetch or get data form mongodb
// get( get data from mongoose db)
// post ( post data to mongoose + middleware)
// updata (put/patch data by id to mongoose + middleware)
// delete ( delete data by id to mongoose db + middleware )
// get single product ( findById)
