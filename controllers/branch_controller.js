const { axiosInstance } = require("../utils/axiosInstance");
const axios = require("axios");
const baseUrl = "you have this";

module.exports = {
  async getBranchByname(header) {
    try {
      const response = await axios.get(baseUrl);
      const { Branch } = response.data.data[0].Brand[0];
      console.log(axiosInstance);
      const FindBranch = Branch.filter(
        (branch) => branch.PostalAddress.TownName === header
      );
      if (!response) {
        throw new Error("Bad Request");
      }
      if (FindBranch.length === 0) {
        throw new Error("No Branch Found");
      } else {
        return FindBranch;
      }
    } catch (error) {
      throw error.message;
    }
  },
};
