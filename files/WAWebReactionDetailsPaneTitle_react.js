__d(
  "WAWebReactionDetailsPaneTitle.react",
  ["fbt", "WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { titleText: { userSelect: "x1hx0egp", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.count,
        a = e.titleRef,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x1p57kb1 x1iw51ew xde1mab" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            xstyle: c.titleText,
            children: s._(
              /*BTDS*/ '_j{"*":"{number} reactions","_1":"1 reaction"}',
              [s._plural(n, "number")],
            ),
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var d;
      return (
        t[3] !== l || t[4] !== a
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, i, {
                ref: a,
                "data-testid": void 0,
                children: l,
              }),
            )),
            (t[3] = l),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = d;
  },
  226,
);
