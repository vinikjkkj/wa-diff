__d(
  "WAWebNotificationsMissedCallTracker",
  [],
  function (t, n, r, o, a, i) {
    var e = 300,
      l = null;
    function s(e) {
      l = e;
    }
    function u(t) {
      var n = l;
      return ((l = null), n != null && t - n <= e);
    }
    function c() {
      l = null;
    }
    ((i.markCallMissedWhileHidden = s),
      (i.consumeRecentMissedCallWhileHidden = u),
      (i.resetForTesting = c));
  },
  66,
);
