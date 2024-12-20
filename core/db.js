import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/',{
        dbName:"MY_DB"
    })
    .then(() => { console.log("db connection success...") })
    .catch((err) => { console.log(`error in connection ${err}`) })

}
export default connectDB;