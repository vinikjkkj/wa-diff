__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebPollBubbleSettingLabel",
    "WDSIconIcScheduleFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 1e3,
      d = 3600,
      m = 24 * d;
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.isPollEnded,
        a = e.pollEndTime,
        i = e.trailingSeparator,
        l = a - o("WAWebClock").Clock.getServerTimeMs(),
        m = Math.max(0, Math.ceil(l / c)),
        p = m < d && !n,
        f = p ? "secondaryNegative" : "contentDeemphasized",
        g;
      t[0] !== f
        ? ((g = u.jsx(r("WDSIconIcScheduleFilled.react"), {
            width: 12,
            height: 12,
            colorName: f,
          })),
          (t[0] = f),
          (t[1] = g))
        : (g = t[1]);
      var h;
      t[2] !== n || t[3] !== m
        ? ((h = n ? s._(/*BTDS*/ "Poll ended") : _(m)),
          (t[2] = n),
          (t[3] = m),
          (t[4] = h))
        : (h = t[4]);
      var y = n ? "poll-ended-label" : "poll-end-time-label",
        C;
      return (
        t[5] !== p || t[6] !== g || t[7] !== h || t[8] !== y || t[9] !== i
          ? ((C = u.jsx(r("WAWebPollBubbleSettingLabel"), {
              icon: g,
              isEmphasized: p,
              label: h,
              testid: y,
              trailingSeparator: i,
            })),
            (t[5] = p),
            (t[6] = g),
            (t[7] = h),
            (t[8] = y),
            (t[9] = i),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function _(e) {
      if (e < d) return s._(/*BTDS*/ "Ends in less than 1h");
      if (e < m) {
        var t = Math.floor(e / d);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", t)]);
      }
      var n = Math.floor(e / m);
      return s._(/*BTDS*/ "Ends in {days}d", [s._param("days", n)]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
