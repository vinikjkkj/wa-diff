__d(
  "WAWebVoipCallsTabCallInfoRequest",
  ["WAWebVoipCallsTabPanelManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = 0,
      u = 1e4;
    function c(t) {
      ((e = t),
        (s = self.performance.now()),
        r("WAWebVoipCallsTabPanelManager").trigger("openCallLogInfoPanel", t));
    }
    function d() {
      var t = e,
        n = self.performance.now() - s > u;
      ((e = null),
        t != null &&
          !n &&
          r("WAWebVoipCallsTabPanelManager").trigger(
            "openCallLogInfoPanel",
            t,
          ));
    }
    function m() {
      e = null;
    }
    ((l.requestOpenCallLogInfoPanel = c),
      (l.flushRequestedCallLogInfoPanel = d),
      (l.clearRequestedCallLogInfoPanel = m));
  },
  98,
);
