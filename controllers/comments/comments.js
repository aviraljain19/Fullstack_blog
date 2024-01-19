const createCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comments created",
    });
  } catch (error) {
    res.json(error);
  }
};

const commentDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

const updateCommentController = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Updated",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createCommentCtrl,
  deleteCommentCtrl,
  updateCommentController,
  commentDetailsCtrl,
};
