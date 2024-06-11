module.exports = {
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: "/",
  sameSite: "None" // browser sends the cookie with both cross-site and same-site requests
};
