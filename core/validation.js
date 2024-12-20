import joi from "joi"

export const registerValidation = async (req, res, next) => {
    const schema = joi.object({
        full_name: joi.string().max(30).required().messages({
            "any.required": "full_name is required.",
            "string.empty": "full_name cannot be empty."
        }),
        email: joi.string().email().required().messages({
            "string.email": "Please enter a valid email address.",
            "any.required": "email is required."
        }),
        mobile: joi.string().required().messages({
            "any.required": "mobile is required.",
            "string.empty": "mobile cannot be empty."
        }),
        password: joi.string().required().messages({
            "any.required": "password is required.",
            "string.empty": "password cannot be empty."
        }),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            errors: error.details.map(err => ({
                message: err.message,
            }))
        })
    }
    next();
}
export const loginValidation = async (req, res, next) => {
    const schema = joi.object({
        email: joi.string()
            .email()
            .required()
            .messages({
                "string.email": "Please enter a valid email address.",
                "any.required": "email is required."
            }),
        password: joi.string()
            .required()
            .messages({
                "any.required": "password is required.",
                "string.empty": "password cannot be empty."
            }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            errors: error.details.map(err => ({
                message: err.message,
            }))
        });
    }

    next();
};