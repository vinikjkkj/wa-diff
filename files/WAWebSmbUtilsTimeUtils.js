__d(
  "WAWebSmbUtilsTimeUtils",
  ["WAWeb-moment", "WAWebClock"],
  function (t, n, r, o, a, i, l) {
    var e = "h:mm A",
      s = "h:mmA",
      u = "H:mm",
      c = "H.mm",
      d = "HH:mm",
      m = "HH.mm",
      p = [e, s, d, m, u, c];
    function _(e) {
      var t,
        n = e.trim();
      if (n) {
        for (var o of p) {
          var a = r("WAWeb-moment")(n, o, !0);
          if (a.isValid()) {
            t = a;
            break;
          }
        }
        if (t) {
          var i = t,
            l = r("WAWeb-moment")().startOf("day"),
            s = i.diff(l);
          return r("WAWeb-moment").duration(s).asMinutes();
        }
      }
    }
    function f(e) {
      return r("WAWeb-moment")
        .utc()
        .startOf("day")
        .add(e, "minutes")
        .format(o("WAWebClock").Clock.timestampStrFormat());
    }
    ((l.timeStringToMinutes = _), (l.minutesToTime = f));
  },
  98,
);
