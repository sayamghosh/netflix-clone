import mongoose from "mongoose";

let isConnected = false; // Global variable to track connection status

export async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log("Using existing MongoDB connection.");
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!); 
    isConnected = true;
    console.log("Connected to MongoDB.");

    // Add event listeners if not already added
    if (!mongoose.connection.listeners("connected").length) {
      mongoose.connection.on("connected", () => {
        console.log("MongoDB connected.");
      });
    }

    if (!mongoose.connection.listeners("error").length) {
      mongoose.connection.on("error", (error) => {
        console.error("MongoDB connection error:", error);
      });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Throw error to handle in calling function
  }
}