import express from 'express';
import jwt from "jsonwebtoken";
import cookieSession from "cookie-session";

const router = express.Router()

router.post('/api/users/signout', (req, res) => {
    req.session = null;
    res.send({})
});

export { router as signOutRouter }