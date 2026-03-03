module.exports = async function handler(req, res) {
  res.status(200).json({ message: "Sync API is active", note: "CommonJS version" });
};