const db = require("../../db");

module.exports = async (request, response) => {
  const {id, token, requested} = request.body;

  if (!id || !token || !requested) return response.status(400).send("Invalid request.");

  try {
    const storedToken = await db.getToken(requested);
    if (token !== storedToken) return response.status(403).send("Invalid credentials.");
    
    await db.acceptFriendRequest(requested, id);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send("Internal server error.");
  }

  return response.status(201).send("You are now friends.");
};