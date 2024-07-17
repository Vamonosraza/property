import { Schema, model, models, mongoose } from 'mongoose';

// Look at the JSON file to know what fields to create

const PropertySchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true, 'Owner is required'],
    },
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    type:{
        type:String,
        required:[true, 'Type is required']
    },
    description:{
        type:String,
        required:[true, 'Description is required']
    },
    location:{
        street:{
            type:String,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        zipcode:{
            type:String,
        },
    },
    beds:{
        type:Number,
        required:[true, 'Beds is required']
    },
    baths:{
        type:Number,
        required:[true, 'Baths is required']
    },
    square_feet:{
        type:Number,
        required:[true, 'Square Feet is required']
    },
    amenities:[{
        type:String
    }],
    rates:{
        nightly:{
            type:Number
        },
        weekly:{
            type:Number
        },
        monthly:{
            type:Number
        }
    },
    seller_info:{
        name:{
            type:String,
            required:[true, 'Name is required']
        },
        email:{
            type:String,
            required:[true, 'Email is required']
        },
        phone:{
            type:String,
            required:[true, 'Phone is required']
        },
    },
    images:[
        {
            type:String
        }
    ],
    is_featured:{
        type:Boolean,
        default:false
    }

},
{
    timestamps: true
});

const Property = models.Property || model('Property', PropertySchema);

export default Property;