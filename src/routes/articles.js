const express = require("express");
const router = express.Router();

router.get("/articles", (req, res, next) => {
  res.json([
    {
      title: "O que é racismo reverso?",
      content:
        "O racismo reverso é um mito que desmascara ainda mais o racismo que realmente existe no Brasil. O racismo reverso seria a discriminação de pessoas brancas pela sua raça. Isso é uma besteira, pois o racismo é uma opressão, como todas, que ocorre de grupos sociais privilegiados em detrimento de outros grupos em razão da raça. Ou seja, para um grupo social ser discriminado pela raça, este grupo deve ser um dos grupos dominados. Não faz sentido nenhum que um grupo deminante se sinta discriminados, pois ele é o dominante; isso quer dizer que um grupo que tem todas ou a maioria das instrumentos de poder não pode ser discriminados, porque a discriminação é perpetrada pelos instrumentos de poder, logo, um grupo minoritário, que não possue tais instrumentos, não pode discriminar grupos que possuem esses instrumentos. Além disso, como já ficou latente no dito acima, o racismo ocorre no plano social, ou seja, o racismo não é uma discriminação de pessoa para pessoa e sim de grupos sociais para outros grupos sociais.",
      autor: "Tiago Santos",
      id: 1
    }
  ]);
});

module.exports = router;
