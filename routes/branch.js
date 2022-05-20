const express = require("express");
const router = express.Router();
const axios = require("axios");
const branchController = require("../controllers/branch_controller");
const baseUrl = "you have this";
const {headerInputSchema} = require('../helpers/schema_validation')
module.exports = {
  healthCheck: router.get("/", async (req, res, next) => {
    const headers = req.headers["lbg-txn-branch-location"];
    const header = await headerInputSchema.validateAsync(req.headers["lbg-txn-branch-location"])
   console.log(header)
    console.log(typeof(headers))
    try {
      if (!head) {
        res.status(404).json({
          status: "failure",
          message: "Headers require",
        });
      }

      const response = await branchController.getBranchByname(head);
      res.status(200).json({
        status: "success",
        data: response,
        message: "Branch Found",
      });
    } catch (error) {
      res.send(error.message);
    }
  }),
};
