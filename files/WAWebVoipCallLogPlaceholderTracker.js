__d(
  "WAWebVoipCallLogPlaceholderTracker",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_offline_resume_ordering",
      );
    }
    function u(t) {
      e.add(t);
    }
    function c(t) {
      return e.has(t);
    }
    function d(t) {
      e.delete(t);
    }
    ((l.isOfflineCallLogOrderingEnabled = s),
      (l.markPlaceholderPending = u),
      (l.isPlaceholderPending = c),
      (l.markPlaceholderResolved = d));
  },
  98,
);
