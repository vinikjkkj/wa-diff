__d(
  "AdsHelpTrayUtils",
  ["cssVar", "WebStorage"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["isEligibleForAdsAINux"],
      u,
      c = "help_tray_state",
      d = parseInt("200", 10),
      m = parseInt("401", 10);
    function p() {
      if (window.location.pathname.startsWith("/intern/asp")) {
        var e = new URL(window.location.href),
          t = e.searchParams.get("pathname");
        if (t !== null) return t;
      }
      return window.location.pathname.replace(/[0-9]/g, "");
    }
    function _(t) {
      var n = t.isEligibleForAdsAINux,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = (u || (u = r("WebStorage"))).getSessionStorage();
      u.setItemGuarded(a, c, JSON.stringify(babelHelpers.extends({}, o)));
    }
    ((l.HELP_TRAY_STATE_LOCAL_STORAGE_KEY = c),
      (l.HELP_TRAY_Z_INDEX = d),
      (l.ABOVE_MODAL_Z_INDEX = m),
      (l.getReleventArticlesProcessedURL = p),
      (l.storeHelpTrayStateToSessionStorage = _));
  },
  98,
);
