const express = require("express");
const router = express.Router();

const comments = require("../data/comments");
const error = require("../utilities/error");

router.route("/")
    .get((req, res) =>{
        res.json({comments});
    })
    .post((req, res, next) => {
        if (req.body.userId && req.body.postId && req.body.body) {
    
          const comment = {
            id: comments[comments.length - 1].id + 1,
            userId: req.body.userId,
            title: req.body.postId,
            content: req.body.body,
          };
    
          comments.push(comment);
          res.json(comments[comment.length - 1]);
        } else next(error(400, "Insufficient Data"));
      });
router.route("/:id")
      .get((req, res) =>{
        res.json
      })
module.exports = router;