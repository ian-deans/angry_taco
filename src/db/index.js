require('dotenv').config()
import mongoose from 'mongoose'

mongoose.Promise = Promise
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', error => console.error(`MONGOOSE ERROR: ${error}`))
db.once('open', () => console.log('Mongoose successfully connected to database.'))

export default db
