
import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
    const { username, password } = req.body;
    console.log('Body+++', username, password)
    const user = await prisma.user.create({
        data: {
            username,
            password: await hashPassword(password)
        }
    });

    const token = createJWT(user);
    res.json({ token });
}

export const signIn = async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!user) {
        res.status(401);
        res.json({ messgae: "nope" });
        return;
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
        res.status(401);
        res.json({ messgae: "nope" });
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}