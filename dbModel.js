import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name:String,
    profile_url:String,
    created_at:{
        type:Date,
        default:Date.now
    }
});

const cardModel = mongoose.model('profiles',cardSchema);
export default cardModel;