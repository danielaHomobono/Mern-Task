import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.7j9hu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        
            useNewUrlParser: true, // Opciones recomendadas
            useUnifiedTopology: true,
        });
        console.log('>>> DB is connected');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
};
