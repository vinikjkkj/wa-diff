__d(
  "BDSignalWrapper",
  ["BDSignalBufferData", "SignalCollectorMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.signalFlags = e), (this.signalType = t));
      }
      var t = e.prototype;
      return (
        (t.getSignalCollector = function () {
          return r("SignalCollectorMap").get(this.signalType);
        }),
        (t.getBufferConfig = function () {
          return r("BDSignalBufferData")[this.signalType];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
