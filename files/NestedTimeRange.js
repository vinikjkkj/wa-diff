__d(
  "NestedTimeRange",
  ["SimpleHook", "performance", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (o("SimpleHook").SimpleHook)(),
      c = new (o("SimpleHook").SimpleHook)(),
      d = "/";
    function m(e, t) {
      return "" + e + d + t;
    }
    var p = (function () {
      function t(e, t) {
        (t === void 0 && (t = null),
          (this.$3 = 0),
          (this.$1 = e),
          (this.$2 = t));
      }
      var n = t.prototype;
      return (
        (n.isRunning = function () {
          return this.$3 > 0;
        }),
        (n.fullname = function () {
          return this.$2 !== null ? m(this.$2.fullname(), this.$1) : this.$1;
        }),
        (n.start = function (n) {
          if (
            (n === void 0 && (n = (e || (e = r("performanceAbsoluteNow")))()),
            this.$3 === 0)
          ) {
            var t;
            ((t = this.$2) == null || t.start(n), this.__onStart(n));
          }
          return (++this.$3, n);
        }),
        (n.__onStart = function (t) {
          u.call(this, t);
        }),
        (n.stop = function (n) {
          if (
            (n === void 0 && (n = (e || (e = r("performanceAbsoluteNow")))()),
            --this.$3,
            this.$3 === 0)
          ) {
            var t;
            (this.__onStop(n), (t = this.$2) == null || t.stop(n));
          }
          return n;
        }),
        (n.__onStop = function (t) {
          c.call(this, t);
        }),
        t
      );
    })();
    function _() {
      (s || (s = r("performance"))).mark &&
        (s || (s = r("performance"))).measure &&
        (u.add(function (e, t) {
          (s || (s = r("performance"))).mark(e.fullname() + "_start");
        }),
        c.add(function (e, t) {
          (s || (s = r("performance"))).measure(
            e.fullname(),
            e.fullname() + "_start",
          );
        }));
    }
    ((l.OnRangeStart = u),
      (l.OnRangeStop = c),
      (l.TIME_RANGE_LEVEL_SEPARATOR = d),
      (l.rangeFullName = m),
      (l.NestedTimeRange = p),
      (l.enableDevConsoleTimeline = _));
  },
  98,
);
