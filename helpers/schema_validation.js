// const Joi = require('joi');
// const headerInputSchema = Joi.object({
//     ["lbg-txn-branch-location"]: Joi.string(),
//     headers:Joi.string()
// })
// module.exports ={
//     headerInputSchema
// }

const Joi = require("joi");
const {object} = require('joi')
const validatJoi = (schema) => {
    return (req, res, next) => {
        const {error} = Joi.validate(req.headers, schema);
        if (error) {
            return res.status(400).json({
                status: "failure",
                message: error.details[0].message,
            });
        }
        next();
    };


}

