const express = require("express");
const router = express.Router();

router.get("/comments/:postid", (req, res, next) => {
  res.json([
    {
      content:
        "Para quem deseja conhecer mais sobre esse assunto: https://www.youtube.com/watch?v=hbaJLpV9vyw",
      autor: "desconhecido"
    }
  ]);
});

module.exports = router;
