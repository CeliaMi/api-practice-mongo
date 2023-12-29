import mongoose from 'mongoose'

const StoreScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timesstamps:true,
        versionKey: false,
    }
)

export default mongoose.model('storage', StoreScheme)