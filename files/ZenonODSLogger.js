__d(
  "ZenonODSLogger",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.logCounter = function (n) {
            ((e || (e = o("ODS"))).bumpEntityKey(4083, "zenon_multiway", n),
              e.flush());
          }),
          (n.logE2eeCounter = function (n) {
            ((e || (e = o("ODS"))).bumpEntityKey(4083, "zenon_e2ee", n),
              e.flush());
          }),
          (n.logSignalingCounter = function (n) {
            ((e || (e = o("ODS"))).bumpEntityKey(4083, "zenon_signaling", n),
              e.flush());
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
