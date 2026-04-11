__d(
  "RSTBlockingTime",
  ["RSTTimespanBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = 50,
      u = typeof self != "undefined" ? self : window,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$RSTBlockingTime$p_1 = 0),
            (e.$RSTBlockingTime$p_2 = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.startMonitoring = function () {
            var t = this;
            this.$RSTBlockingTime$p_2 ||
              (u.setInterval(function () {
                var n = Date.now();
                (t.$RSTBlockingTime$p_1 === 0 ||
                  (n - t.$RSTBlockingTime$p_1 > e + s
                    ? t.endTimespan()
                    : t.clearLastUnfinishedTimespan()),
                  (t.$RSTBlockingTime$p_1 = n),
                  t.startTimespan());
              }, e),
              (this.$RSTBlockingTime$p_2 = !0));
          }),
          (r.getBlockingTime = function (t, n) {
            var e = this.getIntersectionTime(t, n);
            return Math.max(e - s, 0);
          }),
          n
        );
      })(r("RSTTimespanBase")),
      d = new c();
    d.startMonitoring();
    var m = d;
    l.default = m;
  },
  98,
);
