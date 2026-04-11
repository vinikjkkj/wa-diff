__d(
  "WDSGlobalContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = r("react")),
      c = (e || (e = o("react"))).createContext,
      d = 150,
      m = c({
        currentOpenMenus: new Map(),
        registerMenu: function () {},
        unregisterMenu: function () {},
        closeAllMenus: function () {},
      });
    ((l.MENU_EXIT_ANIMATION_DURATION = d), (l.WDSContext = m));
  },
  98,
);
