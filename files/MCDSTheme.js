__d(
  "MCDSTheme",
  ["MCDSDefaultStyleXLegacyLightTheme", "StyleXSheet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("StyleXSheet"))({
      rootTheme: r("MCDSDefaultStyleXLegacyLightTheme"),
    });
    function s() {
      e.injected || e.injectTheme();
    }
    function u(e) {
      return r("MCDSDefaultStyleXLegacyLightTheme")[e];
    }
    ((l.rootStyleSheet = e), (l.injectTheme = s), (l.getMCDSColor = u));
  },
  98,
);
