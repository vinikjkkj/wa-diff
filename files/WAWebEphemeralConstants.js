__d(
  "WAWebEphemeralConstants",
  ["$InternalEnum", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WATimeUtils").DAY_SECONDS * 7,
      s = o("WATimeUtils").DAY_SECONDS * 90,
      u = n("$InternalEnum").Mirrored(["KEPT", "UNKEPT"]),
      c = n("$InternalEnum").Mirrored([
        "Seconds",
        "Minutes",
        "Hours",
        "Days",
        "Weeks",
      ]);
    function d(e, t) {
      if ((t === void 0 && (t = !1), e < o("WATimeUtils").MINUTE_SECONDS))
        return { duration: e, unit: c.Seconds };
      if (e < o("WATimeUtils").HOUR_SECONDS) {
        var n = Math.floor(e / 60);
        return { duration: n, unit: c.Minutes };
      } else if (e <= o("WATimeUtils").DAY_SECONDS) {
        var r = Math.floor(e / 60 / 60);
        return { duration: r, unit: c.Hours };
      } else if (t) {
        if (e < o("WATimeUtils").WEEK_SECONDS) {
          var a = Math.floor(e / 24 / 60 / 60);
          return { duration: a, unit: c.Days };
        }
        var i = Math.floor(e / 7 / 24 / 60 / 60);
        return { duration: i, unit: c.Weeks };
      }
      var l = Math.floor(e / 24 / 60 / 60);
      return { duration: l, unit: c.Days };
    }
    ((l.ONE_DAY = o("WATimeUtils").DAY_SECONDS),
      (l.SEVEN_DAYS = e),
      (l.NINETY_DAYS = s),
      (l.KeepInChatState = u),
      (l.DurationUnit = c),
      (l.getDurationForString = d));
  },
  98,
);
