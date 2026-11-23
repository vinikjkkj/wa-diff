__d(
  "MAIBAPlatformAsyncStop",
  ["MAIBAInFlightMessageHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t, n, r) {
      var a = function () {
        (e.delete(n), r());
      };
      (e.set(n, function () {
        (e.delete(n),
          o("MAIBAInFlightMessageHandler").deleteStopInflightMessage(t, a));
      }),
        o("MAIBAInFlightMessageHandler").setStopInflightMessage(t, a));
    }
    function u(t) {
      var n;
      (n = e.get(t)) == null || n();
    }
    ((l.registerMAIBAPlatformAsyncStop = s),
      (l.releaseMAIBAPlatformAsyncStop = u));
  },
  98,
);
