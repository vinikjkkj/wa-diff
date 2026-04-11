__d(
  "AutoplayRulesEngine",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = -2,
      l = -1,
      s = (function () {
        function t(t) {
          ((this.$1 = e), (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.evaluateAutoplay = function (t, n) {
            var e = n(),
              r = l;
            if (t)
              for (var o = 0; o < this.$2.length; o++) {
                var a = this.$2[o](t);
                if (a !== "SKIP") {
                  ((e = a), (r = o));
                  break;
                }
              }
            return ((this.$1 = r), e);
          }),
          (n.getIndexOfLastWinningRule = function () {
            return this.$1;
          }),
          (n.getRules = function () {
            return this.$2;
          }),
          t
        );
      })();
    i.default = s;
  },
  66,
);
