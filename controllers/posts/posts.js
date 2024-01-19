const createPostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post created",
    });
  } catch (error) {
    res.json(error);
  }
};

const fetchPostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Fetched",
    });
  } catch (error) {
    res.json(error);
  }
};

const postDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Details",
    });
  } catch (error) {
    res.json(error);
  }
};

const deletePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

const updatePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Updated",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createPostCtrl,
  postDetailsCtrl,
  deletePostCtrl,
  updatePostCtrl,
  fetchPostCtrl,
};
