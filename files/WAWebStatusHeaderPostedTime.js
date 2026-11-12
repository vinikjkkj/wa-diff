__d(
  "WAWebStatusHeaderPostedTime",
  ["fbt", "WATimeUtils", "WAWeb-moment", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("WAWebClock").Clock.daysDeltaAbs(
        o("WAWebClock").Clock.convertGlobalToLocalUnixTime(e),
      );
      if (t === 0) {
        var n = Math.floor(o("WAWebClock").Clock.getServerTimeMs() / 1e3) - e;
        if (n < o("WATimeUtils").MINUTE_SECONDS)
          return s._(/*BTDS*/ "Just now");
        if (n < o("WATimeUtils").HOUR_SECONDS)
          return o("WAWebClock").Clock.statusTimePassedString(
            Math.floor(Date.now() / 1e3) - n,
          );
      }
      return s._(/*BTDS*/ "{date}, {time}", [
        s._param("date", u(e, t)),
        s._param("time", o("WAWebClock").Clock.timestampStr(e)),
      ]);
    }
    function u(e, t) {
      return t < 2
        ? o("WAWebClock").Clock.relativeDateStr(e)
        : r("WAWeb-moment")
              .unix(o("WAWebClock").Clock.convertGlobalToLocalUnixTime(e))
              .year() === r("WAWeb-moment")().year()
          ? o("WAWebClock").Clock.monthDayStr(e)
          : o("WAWebClock").Clock.dateStr(e);
    }
    l.getStatusHeaderPostedTimeStr = e;
  },
  226,
);
