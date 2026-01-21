import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import generateToken from "../utils/generateToken.js";

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({ success: false, message: "Email & Password required" });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invlaid credentials" })
        }

        const token = generateToken(admin);

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({ success: true, message: "Admin login successfull" })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};