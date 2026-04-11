__d(
  "WDSMenuContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = r("react")),
      c = (e || (e = o("react"))).createContext,
      d = c({ isClosing: !1, position: "below", align: "start" }),
      m = c({ exitSubmenu: function () {} });
    ((l.WDSMenuAnimationContext = d), (l.WDSMenuSubmenuNavigationContext = m));
  },
  98,
);
