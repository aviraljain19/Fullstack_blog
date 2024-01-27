const appErrHandler = require("../utils/appErr");

const protected = (req, res, next) => {
  if (req.session.userAuth) {
    next();
  } else {
    //next(appErrHandler("Session timeout, login again"));
    res.render("users/notAuthorize");
  }
};

module.exports = protected;
