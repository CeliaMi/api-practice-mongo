import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type:String,
            unique: true
        },
        password:{
            type:String
        },
        role:{
            type: ["user", "admin"],
            default: 'user',
        }

    },
    {
        timesstamps:true,
        versionKey: false,
    }
)

export default mongoose.model('user', UserScheme)