import connectDB from './core/db.js'
import {app} from './index.js'

connectDB()
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server running on ${process.env.PORT || 5000}`)
})