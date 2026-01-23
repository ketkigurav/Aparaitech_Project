import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  try {
    const token = req.cookies.token; // ✅ same name as res.cookie('token', ...)

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized (No token)",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied (Admin only)",
      });
    }

    req.admin = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};