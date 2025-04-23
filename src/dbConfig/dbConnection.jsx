import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('Database connected successfully');
        });
        
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectToDatabase;