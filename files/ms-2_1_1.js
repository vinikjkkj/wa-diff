__d(
  "ms-2.1.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        o = r * 7,
        a = r * 365.25;
      l.exports = function (e, t) {
        t = t || {};
        var n = typeof e;
        if (n === "string" && e.length > 0) return i(e);
        if (n === "number" && isNaN(e) === !1) return t.long ? u(e) : s(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e),
        );
      };
      function i(i) {
        if (((i = String(i)), !(i.length > 100))) {
          var l =
            /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              i,
            );
          if (l) {
            var s = parseFloat(l[1]),
              u = (l[2] || "ms").toLowerCase();
            switch (u) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return s * a;
              case "weeks":
              case "week":
              case "w":
                return s * o;
              case "days":
              case "day":
              case "d":
                return s * r;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return s * n;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return s * t;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return s * e;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return s;
              default:
                return;
            }
          }
        }
      }
      function s(o) {
        var a = Math.abs(o);
        return a >= r
          ? Math.round(o / r) + "d"
          : a >= n
            ? Math.round(o / n) + "h"
            : a >= t
              ? Math.round(o / t) + "m"
              : a >= e
                ? Math.round(o / e) + "s"
                : o + "ms";
      }
      function u(o) {
        var a = Math.abs(o);
        return a >= r
          ? c(o, a, r, "day")
          : a >= n
            ? c(o, a, n, "hour")
            : a >= t
              ? c(o, a, t, "minute")
              : a >= e
                ? c(o, a, e, "second")
                : o + " ms";
      }
      function c(e, t, n, r) {
        var o = t >= n * 1.5;
        return Math.round(e / n) + " " + r + (o ? "s" : "");
      }
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
