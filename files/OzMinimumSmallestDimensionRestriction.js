__d(
  "OzMinimumSmallestDimensionRestriction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.applyRestriction = function (t) {
          var e = this;
          if (t.length === 0) return [];
          var n = t.filter(function (t) {
            var n = t.getWidth(),
              r = t.getHeight(),
              o = n < r ? n : r;
            return o >= e.$1;
          });
          return n.length > 0 ? n : [t[t.length - 1]];
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
