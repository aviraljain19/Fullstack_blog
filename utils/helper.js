const truncate = (post) => {
  if (post.length > 100) {
    return post.substring(0, 100) + "... " + "Read more";
  }
  return post;
};

module.exports = { truncate };
