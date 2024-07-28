import mongoose from 'mongoose';

let connected = false;

const connectDB = async () =>{
    mongoose.set('strictQuery', true)

    if(connected){
        console.log('Already connected to DB');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, )
        connected = true;
        console.log('Connected to DB: connected');  
    }catch(err){
        console.log('Failed to connect to DB');
        console.log(err);
    }
}
export default connectDB;