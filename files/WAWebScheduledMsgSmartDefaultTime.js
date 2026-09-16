__d(
  "WAWebScheduledMsgSmartDefaultTime",
  ["WATimeUtils", "WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 60,
      s = 1e3,
      u = 9,
      c = 17,
      d = 8 * e + 30,
      m = 16 * e + 30,
      p = 1;
    function _(t, n, o) {
      var a = r("WAWeb-moment")(t),
        i = a.hour() * e + a.minute();
      return i < d
        ? g(f(t, u), n, o)
        : i < m
          ? g(f(t, c), n, o)
          : g(f(t, u, p), n, o);
    }
    function f(e, t, n) {
      return (
        n === void 0 && (n = 0),
        r("WAWeb-moment")(e)
          .add(n, "day")
          .hour(t)
          .minute(0)
          .second(0)
          .millisecond(0)
          .unix()
      );
    }
    function g(e, t, n) {
      var r = Math.max(Math.min(e, n), t);
      return o("WATimeUtils").castMilliSecondsToUnixTime(r * s);
    }
    l.default = _;
  },
  98,
);
