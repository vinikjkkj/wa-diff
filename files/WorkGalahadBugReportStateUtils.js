__d(
  "WorkGalahadBugReportStateUtils",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("ifRequired")("MessengerURIStore", function (e) {
          return e;
        }),
        t = r("ifRequired")("WorkGalahadNavStore", function (e) {
          return e;
        }),
        n = r("ifRequired")("GeminiSkeletonState", function (e) {
          return e;
        });
      return {
        messenger: e ? { uriState: e.getState() } : null,
        nav: t
          ? {
              activeEntityKey: t.getActiveEntityKey(),
              stackedChannelData: t.getStackedChannelData(),
              selectedAppTabID: t.getSelectedAppTabID(),
            }
          : null,
        viewport: n ? s(n) : null,
      };
    }
    function s(e) {
      var t = e.ViewportStateContext.currentValue(),
        n = t.entityColumnWidth,
        r = t.navColumnWidth,
        o = t.navColumnXOffset,
        a = t.viewportHeight,
        i = t.viewportWidth;
      return {
        entityColumnWidth: n,
        navColumnWidth: r,
        navColumnXOffset: o,
        viewportHeight: a,
        viewportWidth: i,
      };
    }
    l.getStateSnapshot = e;
  },
  98,
);
