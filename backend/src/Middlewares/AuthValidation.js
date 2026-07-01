import joi from "joi";

const signupValidation = async (req, res, next) => {
  try {
    const schema = joi.object({
      name: joi.string().min(2).max(100).required(),
      email: joi.string().email().max(100).required(),
      password: joi.string().min(8).max(100).required(),
      password_confirmation: joi.string().min(8).max(100).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        status: false,
        message: error.details[0].message,
      });
    }

    next();
  } catch (error) {
    console.log("Something went wrong ", error);
    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

const loginValidation = async (req, res, next) => {
  try {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        status: false,
        message: error.details[0].message,
      });
    }

    next();
  } catch (error) {
    console.log("Something went wrong ", error);
    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export { signupValidation, loginValidation };
