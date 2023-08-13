exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/blog/my-first-post`,
    toPath: `/blog/another-post`,
  });
};
