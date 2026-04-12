__d(
  "WAWebReactionDetailsPaneTitle.react",
  ["fbt", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { titleText: { userSelect: "x1hx0egp", $$css: !0 } };
    function d(e) {
      var t = e.count,
        n = e.titleRef;
      return u.jsx("div", {
        className: "x1p57kb1 x1iw51ew xde1mab",
        ref: n,
        "data-testid": void 0,
        children: u.jsx(r("WDSText.react"), {
          type: "Body2Emphasized",
          colorName: "contentDeemphasized",
          xstyle: c.titleText,
          children: s._(
            /*BTDS*/ '_j{"*":"{number} reactions","_1":"1 reaction"}',
            [s._plural(t, "number")],
          ),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
