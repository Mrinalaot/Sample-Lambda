export const getAllUsers = async () => {
  const name = 'United UI';
  return {
    statusCode: 200,
    body: JSON.stringify({
      user: "Happy Coding yo!!",
      name
    }),
  };
};
