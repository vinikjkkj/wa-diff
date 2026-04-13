__d(
  "WAWebNuxBannerText.react",
  [
    "WAWebActionLinkButterbar.react",
    "WAWebTabOrder",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.actionText,
        a = e.subtitle,
        i;
      t[0] !== n
        ? ((i =
            n != null
              ? s.jsx(r("WAWebActionLinkButterbar.react"), {
                  dataTab: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
                  inline: !0,
                  children: n,
                })
              : null),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] !== l || t[3] !== a
          ? ((u = s.jsxs(s.Fragment, { children: [a, " ", l] })),
            (t[2] = l),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
