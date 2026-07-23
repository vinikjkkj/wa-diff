__d(
  "CometSSRStateHistoryFormatter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.length > 0 ? e[0].timestamp : 0;
      return e.map(function (e, n) {
        var r = n > 0 && t > 0 ? e.timestamp - t : 0;
        return {
          duration: e.duration + "ms",
          offset: "@" + r + "ms",
          state: e.state,
          timestamp: new Date(e.timestamp).toLocaleString(),
        };
      });
    }
    i.formatStateHistory = e;
  },
  66,
);
