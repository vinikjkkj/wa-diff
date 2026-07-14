__d(
  "WAWebVoipOutgoingSetupLatencyStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t, n) {
      ((e = t), (l = n));
    }
    function u(t) {
      if (l == null || l !== t) return null;
      var n = e;
      return ((e = null), (l = null), n);
    }
    ((i.setOutgoingCallSetupActiveMs = s),
      (i.consumeOutgoingCallSetupActiveMsForCall = u));
  },
  66,
);
