__d(
  "WDSMenuContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.createContext,
      c = u({ isClosing: !1, position: "below", align: "start" }),
      d = u({ exitSubmenu: function () {} }),
      m = u({ repositionSubmenu: function () {} });
    ((l.WDSMenuAnimationContext = c),
      (l.WDSMenuSubmenuNavigationContext = d),
      (l.WDSMenuSubmenuRepositionContext = m));
  },
  98,
);
