__d(
  "WAWebBroadcastMenuDropdown.react",
  [
    "WAWebConversationMenus",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["_ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(6),
        a;
      if (n[0] !== t) {
        var i = t._ref,
          l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((a = l), (n[0] = t), (n[1] = a));
      } else a = n[1];
      var s = a,
        c = s.chat,
        d;
      n[2] !== c
        ? ((d = o("WAWebConversationMenus").broadcastMenu(c)),
          (n[2] = c),
          (n[3] = d))
        : (d = n[3]);
      var m = d,
        p;
      return (
        n[4] !== m
          ? ((p = u.jsx(r("WDSMenu.react"), { children: m })),
            (n[4] = m),
            (n[5] = p))
          : (p = n[5]),
        p
      );
    }
    l.default = c;
  },
  98,
);
