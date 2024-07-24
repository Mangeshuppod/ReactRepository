import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://mangesh:Qwerty1234@cluster0.io9yvj3.mongodb.net/ReactRepository').then(()=>console.log("DB Connected"));
}