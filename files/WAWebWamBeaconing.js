__d(
  "WAWebWamBeaconing",
  ["WATimeUtils", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebUserPrefsGeneral").getWamBeaconingSettings(),
        n = t.find(function (t) {
          return t.key === e;
        }),
        r = null;
      if (n == null || s(n.ts)) {
        var a = o("WATimeUtils").unixTime(),
          i = Math.random() <= 0.01,
          l = { key: e, ts: a, value: i ? 1 : null };
        (n == null ? t.push(l) : ((n.value = l.value), (n.ts = a)),
          (r = l.value));
      } else {
        if (n.value == null) return null;
        r = ++n.value;
      }
      return (o("WAWebUserPrefsGeneral").setWamBeaconingSettings(t), r);
    }
    function s(e) {
      var t = Math.floor(
          o("WATimeUtils").unixTime() / o("WATimeUtils").DAY_SECONDS,
        ),
        n = Math.floor(e / o("WATimeUtils").DAY_SECONDS);
      return t !== n;
    }
    l.maybeGetEventSequenceNumber = e;
  },
  98,
);
