__d(
  "WAWebVoipCallLogPlaceholderTracker",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = 200;
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_offline_resume_ordering",
      );
    }
    function c(t) {
      if (!e.has(t)) {
        if (e.size >= s) {
          var n = e.values().next().value;
          n != null && e.delete(n);
        }
        e.add(t);
      }
    }
    function d(t) {
      return e.has(t);
    }
    function m(t) {
      e.delete(t);
    }
    function p() {
      e.clear();
    }
    ((l.isOfflineCallLogOrderingEnabled = u),
      (l.markPlaceholderPending = c),
      (l.isPlaceholderPending = d),
      (l.markPlaceholderResolved = m),
      (l.clearAllPendingPlaceholders = p));
  },
  98,
);
