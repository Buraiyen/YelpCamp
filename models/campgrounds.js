const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

// Images returned from Cloudinary with be downsized to a width of 200
ImageSchema.virtual('thumbnail').get(function() {
    // 'this' refers to the current image
    return this.url.replace('/upload', '/upload/w_200')
});

const opts = {toJSON: {virtuals: true}};

const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
}, opts);

// Popup modal for single campground on large map
CampgroundSchema.virtual('properties.popUpMarkup').get(function() {
    // 'this' referes to the campground object
    return `<strong>
                <a href="/campgrounds/${this._id}">${this.title}</a>
            </strong>
            <p>${this.description.substring(0, 20)}...</p>`
});

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Review.deleteMany({
            _id: { $in: doc.reviews}
        });
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema);
