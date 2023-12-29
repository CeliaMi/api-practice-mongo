import mongoose from 'mongoose'

const TrackScheme = new mongoose.Schema(
    {
        name: { type: String},
        album: {type: Number},
        cover: {
            type:String,
            validate:{ 
                validator: (req) =>{
                    return true;
            },
            message: "ERROR_URL",
        },
        },
        artist:{
            name:{type:String},
            nickname:{type:String},
            nationality:{type:String}
        },
        duration:{
            start: {type:number},
            end: {type:number}
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timesstamps:true,
        versionKey: false,
    }
)

export default mongoose.model('track', TrackScheme)