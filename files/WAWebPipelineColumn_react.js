__d(
  "WAWebPipelineColumn.react",
  [
    "WAWebPipelineColumnHeader.react",
    "WAWebPipelineCustomerCard.react",
    "WAWebPipelineDragAndDrop.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        cardList: {
          flex: "x98rzlu",
          overflowY: "x1odjw0f",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.customers,
        n = e.onCardDrop,
        a = e.onCustomerClick,
        i = e.stage;
      return s.jsxs("div", {
        className:
          "x78zum5 xdt5ytf x1dz1jew x1okw0bk x5yr21d x1280gxy xyi3aci xwf5gio x1p453bz x1suzm8a",
        "data-testid": void 0,
        children: [
          s.jsx(r("WAWebPipelineColumnHeader.react"), {
            count: t.length,
            stage: i,
          }),
          s.jsx(o("WAWebPipelineDragAndDrop.react").PipelineDroppableColumn, {
            stage: i,
            onCardDrop: n,
            xstyle: u.cardList,
            children: t.map(function (e) {
              return s.jsx(
                r("WAWebPipelineCustomerCard.react"),
                { customer: e, onClick: a, stage: i },
                String(e.id),
              );
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
