__d(
  "UserTimingUtils.shared",
  ["UserTimingUtils", "asyncToGeneratorRuntime", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        typeof (e || (e = r("performance"))).mark == "function" &&
        typeof (e || (e = r("performance"))).clearMarks == "function" &&
        typeof (e || (e = r("performance"))).measure == "function" &&
        typeof (e || (e = r("performance"))).clearMeasures == "function",
      u = !1;
    if (s && (e || (e = r("performance"))).mark != null) {
      var c = "__v3",
        d = {};
      Object.defineProperty(d, "startTime", {
        get: function () {
          u = !0;
        },
      });
      try {
        (e || (e = r("performance"))).mark(c, d);
      } catch (e) {
      } finally {
        (e || (e = r("performance"))).clearMarks(c);
      }
    }
    function m() {
      return u;
    }
    function p(t) {
      s && (e || (e = r("performance"))).mark(t);
    }
    function _(t, n, o) {
      if ((o === void 0 && (o = !0), s)) {
        try {
          (e || (e = r("performance"))).measure(t, n);
        } catch (e) {
          "" + t + n;
        }
        (o && (e || (e = r("performance"))).clearMarks(n),
          (e || (e = r("performance"))).clearMeasures(t));
      }
    }
    function f(t) {
      if (s) {
        try {
          var n = (e || (e = r("performance"))).getEntriesByName(t, "mark");
          if (n != null && n.length > 0) return !0;
        } catch (e) {
          "" + t;
        }
        return !1;
      }
    }
    function g(t) {
      if (s)
        try {
          (e || (e = r("performance"))).clearMarks(t);
        } catch (e) {
          "" + t;
        }
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = (e || (e = r("performance"))).now(),
            i = yield n(),
            l = e.now();
          return (
            o("UserTimingUtils").measureModern(t, { end: l, start: a }),
            i
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {}
    function b(e, t) {}
    function v(t, n, a) {
      var i = (e || (e = r("performance"))).now();
      n();
      var l = e.now();
      o("UserTimingUtils").measureModern(t, { end: l, start: i }, a);
    }
    ((l.isUserTimingV3Supported = m),
      (l.measureStart = p),
      (l.measureEnd = _),
      (l.hasMark = f),
      (l.clearMarks = g),
      (l.asyncMeasure = h),
      (l.measureReactCommit = C),
      (l.measureReactPostCommit = b),
      (l.measureCallback = v));
  },
  98,
);
