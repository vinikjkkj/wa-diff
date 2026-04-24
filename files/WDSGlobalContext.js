__d(
  "WDSGlobalContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.createContext,
      c = 150,
      d = u({
        currentOpenMenus: new Map(),
        registerMenu: function () {},
        unregisterMenu: function () {},
        closeAllMenus: function () {},
      });
    ((l.MENU_EXIT_ANIMATION_DURATION = c), (l.WDSContext = d));
  },
  98,
);
