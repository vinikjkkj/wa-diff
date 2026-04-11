__d(
  "WAWebPipelineColumn.react",
  [
    "WAWebPipelineColumnHeader.react",
    "WAWebPipelineCustomerCard.react",
    "WAWebPipelineDragAndDrop.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.customers,
        a = e.onCardDrop,
        i = e.onCustomerClick,
        l = e.stage,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x78zum5 xdt5ytf x1dz1jew x1okw0bk x5yr21d x1280gxy xyi3aci xwf5gio x1p453bz x1suzm8a",
          }),
          (t[0] = c))
        : (c = t[0]);
      var d = "pipeline-column-" + String(l),
        m;
      t[1] !== n.length || t[2] !== l
        ? ((m = s.jsx(r("WAWebPipelineColumnHeader.react"), {
            count: n.length,
            stage: l,
          })),
          (t[1] = n.length),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p;
      if (t[4] !== n || t[5] !== i || t[6] !== l) {
        var _;
        (t[8] !== i || t[9] !== l
          ? ((_ = function (t) {
              return s.jsx(
                r("WAWebPipelineCustomerCard.react"),
                { customer: t, onClick: i, stage: l },
                String(t.id),
              );
            }),
            (t[8] = i),
            (t[9] = l),
            (t[10] = _))
          : (_ = t[10]),
          (p = n.map(_)),
          (t[4] = n),
          (t[5] = i),
          (t[6] = l),
          (t[7] = p));
      } else p = t[7];
      var f;
      t[11] !== a || t[12] !== l || t[13] !== p
        ? ((f = s.jsx(
            o("WAWebPipelineDragAndDrop.react").PipelineDroppableColumn,
            { stage: l, onCardDrop: a, xstyle: u.cardList, children: p },
          )),
          (t[11] = a),
          (t[12] = l),
          (t[13] = p),
          (t[14] = f))
        : (f = t[14]);
      var g;
      return (
        t[15] !== d || t[16] !== m || t[17] !== f
          ? ((g = s.jsxs(
              "div",
              babelHelpers.extends({}, c, {
                "data-testid": void 0,
                children: [m, f],
              }),
            )),
            (t[15] = d),
            (t[16] = m),
            (t[17] = f),
            (t[18] = g))
          : (g = t[18]),
        g
      );
    }
    l.default = c;
  },
  98,
);
