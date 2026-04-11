__d(
  "WAWebWrapperReactionsQuickActionButton.react",
  [
    "fbt",
    "WAWebRound.react",
    "WDSIconIcMood.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.ref,
        a = e.msg,
        i = e.onToggleReactionTray,
        l = e.showButton,
        d;
      t[0] !== a || t[1] !== i || t[2] !== l
        ? ((d = l
            ? u.jsx(o("WAWebRound.react").Round, {
                testid: void 0,
                label: s._(/*BTDS*/ "React"),
                title: null,
                theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
                onClick: function () {
                  return i(a);
                },
                children: u.jsx(r("WDSIconIcMood.react"), {
                  xstyle: c.svgColorRefreshed,
                  height: 20,
                }),
              })
            : null),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] !== m || t[5] !== n
        ? ((p = u.jsx("div", { ref: n, children: m })),
          (t[4] = m),
          (t[5] = n),
          (t[6] = p))
        : (p = t[6]);
      var _ = p;
      return _;
    }
    l.default = d;
  },
  226,
);
