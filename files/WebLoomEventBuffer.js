__d(
  "WebLoomEventBuffer",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.addEvent = function (n, o) {
            this.$1.push({
              event: n,
              timestamp: o != null ? o : (e || (e = r("performanceNow")))(),
            });
          }),
          (n.flushEvents = function () {
            return this.$1;
          }),
          t
        );
      })();
    l.WebLoomEventBuffer = s;
  },
  98,
);
