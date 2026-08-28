__d(
  "RequestProcessorBase",
  ["abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.runRequest = e;
      }
      var t = e.prototype;
      return (
        (t.scheduleRequest = function (t, n) {
          return r("abstractMethod")("RequestProcessorBase", "scheduleRequest");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
