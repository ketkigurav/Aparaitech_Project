import jwt from 'jsonwebtoken';

const generateToken = (admin) => {
    return jwt.sign(
        { id: admin._id, role: admin.role, email: admin.email }, process.env.JWT_SECRET, {expiresIn:"7d"}
    )
}

export default generateToken;