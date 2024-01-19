const registerCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Registered",
    });
  } catch (error) {
    res.json(error);
  }
};

const loginCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Login",
    });
  } catch (error) {
    res.json(error);
  }
};

const userDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const profileCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Profile",
    });
  } catch (error) {
    res.json(error);
  }
};

const uploadProfilePhotoCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Profile Image",
    });
  } catch (error) {
    res.json(error);
  }
};

const coverPhotoCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Cover Image",
    });
  } catch (error) {
    res.json(error);
  }
};

const updatePasswordCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Password Update",
    });
  } catch (error) {
    res.json(error);
  }
};

const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Update",
    });
  } catch (error) {
    res.json(error);
  }
};

const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  logoutCtrl,
  updateUserCtrl,
  updatePasswordCtrl,
  coverPhotoCtrl,
  uploadProfilePhotoCtrl,
  profileCtrl,
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
};
