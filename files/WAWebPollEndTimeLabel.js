__d(
  "WAWebPollEndTimeLabel",
  [
    "fbt",
    "WAWebClock",
    "WAWebPollBubbleSettingLabel",
    "WDSIconIcScheduleFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 1e3,
      d = 3600,
      m = 24 * d;
    function p(e) {
      var t = e.isPollEnded,
        n = e.pollEndTime,
        a = e.trailingSeparator,
        i = n - o("WAWebClock").Clock.getServerTimeMs(),
        l = Math.max(0, Math.ceil(i / c)),
        m = l < d && !t;
      return u.jsx(r("WAWebPollBubbleSettingLabel"), {
        icon: u.jsx(r("WDSIconIcScheduleFilled.react"), {
          width: 12,
          height: 12,
          colorName: m ? "secondaryNegative" : "contentDeemphasized",
        }),
        isEmphasized: m,
        label: t ? s._(/*BTDS*/ "") : _(l),
        testid: t ? "poll-ended-label" : "poll-end-time-label",
        trailingSeparator: a,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      if (e < d) return s._(/*BTDS*/ "");
      if (e < m) {
        var t = Math.floor(e / d);
        return s._(/*BTDS*/ "", [s._param("hours", t)]);
      }
      var n = Math.floor(e / m);
      return s._(/*BTDS*/ "", [s._param("days", n)]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
