import connectDB from "@/config/db"
import Property from "@/models/Property"

// GET /api/properties
export const GET = async (request) => {
    try{
        await connectDB()
        console.log('Connected to DB with GET')

        const properties = await Property.find({}).sort({createdAt: -1});

        console.log(properties)


        return new Response(JSON.stringify(properties), {status: 200})
    } catch (err){
        console.log(err)
        return new Response('Internal Server Error', {status: 500})
    }
}