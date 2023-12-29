import { validationResult } from 'express-validator'

export const validate = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400);
        res.json({ error: result.array() });
    } else {
        next();
    }
}