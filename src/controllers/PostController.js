const Post = require("../models/Post");

module.exports = {
  async index(req, red) {},

  async store(req, res) {
    console.log(req.body);
  }
};
