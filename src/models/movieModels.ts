import mongoose, { models, Schema } from "mongoose";

const movieSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    imageString: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    release: {
        type: Date,
        required: true,
    },
    videoSource: {
        type: String,
        required: true,
    },
    caterory: {
        type: String,
        required: true,
    },
    youtubeString: {
        type: String,
        required: true,
    },
    watchList: {
        type: [String]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const watchListSchema = new Schema({
    id :{
        type: String,
        required: true,
        default: mongoose.Types.ObjectId
    },
    userId:{
        type: String,
        required: true,
    },
    movieId:{
        type: String,
        required: true,
    },
})

const Movie = models.Movie || mongoose.model("Movie", movieSchema);
export default Movie;