import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    const email = "info@aparaitech.com";
    const password = "aparaitech@2189";

    console.log("👉 MONGO_URI:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected");

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created successfully");
    console.log("Email:", email);
    console.log("Password:", password);

    process.exit(0);
  } catch (error) {
    console.log("❌ Seed admin error:", error.message);
    process.exit(1);
  }
};

seedAdmin();
