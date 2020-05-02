const db = require("../../db");

module.exports = async (request, response) => {
  const {token, requested} = request.body;

  if (!token) return response.status(403).send("You are not logged in.");
  if (!requested) return response.status(400).send("Missing information");

  let requestsList = [];

  try {
    requestsList = await db.getFriendRequests(requested);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send("Internal server error.");
  }

  return response.json({requests: requestsList});
};