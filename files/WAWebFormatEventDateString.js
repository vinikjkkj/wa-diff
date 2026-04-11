__d(
  "WAWebFormatEventDateString",
  ["fbt", "WATimeUtils", "WAWeb-moment", "WAWebClock", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = o("WATimeUtils").castToUnixTime(e),
        a = r("WAWeb-moment").unix(n);
      if (t == null || t === 0) return u(a, { maybeShowAmPm: !0 });
      var i = o("WATimeUtils").castToUnixTime(t),
        l = r("WAWeb-moment").unix(i);
      if (o("WATimeUtils").sameDay(n, i)) {
        var c = a.format("a") === l.format("a");
        return s._(/*BTDS*/ "{start-date} - {end-time}", [
          s._param("start-date", u(a, { maybeShowAmPm: !c })),
          s._param(
            "end-time",
            u(l, { maybeShowAmPm: !0, timeOnly: !0, lowercase: !0 }),
          ),
        ]);
      }
      return s._(/*BTDS*/ "{start-date} - {end-date}", [
        s._param("start-date", u(a, { maybeShowAmPm: !0 })),
        s._param("end-date", u(l, { maybeShowAmPm: !0, lowercase: !0 })),
      ]);
    }
    function u(e, t) {
      var n = t.maybeShowAmPm && !o("WAWebClock").Clock.getIs24Hour(),
        a = o("WATimeUtils").unixTime(),
        i = o("WATimeUtils").castToUnixTime(e.unix());
      if (t.timeOnly === !0) return o("WAWebClock").Clock.timestampStr(i);
      var l = "LT";
      n === !1 && (l = "h:mm");
      var u = o("WATimeUtils").sameDay(
        o("WATimeUtils").castToUnixTime(
          r("WAWeb-moment")().subtract(1, "day").unix(),
        ),
        i,
      );
      if (u)
        return t.lowercase === !0
          ? s._(/*BTDS*/ "yesterday, {time}", [s._param("time", e.format(l))])
          : s._(/*BTDS*/ "Yesterday, {time}", [s._param("time", e.format(l))]);
      var c = o("WATimeUtils").sameDay(a, i);
      if (c)
        return t.lowercase === !0
          ? s._(/*BTDS*/ "today, {time}", [s._param("time", e.format(l))])
          : s._(/*BTDS*/ "Today, {time}", [s._param("time", e.format(l))]);
      var d = o("WATimeUtils").sameDay(
        o("WATimeUtils").castToUnixTime(
          r("WAWeb-moment")().add(1, "day").unix(),
        ),
        i,
      );
      if (d)
        return t.lowercase === !0
          ? s._(/*BTDS*/ "tomorrow, {time}", [s._param("time", e.format(l))])
          : s._(/*BTDS*/ "Tomorrow, {time}", [s._param("time", e.format(l))]);
      var m = "ddd, MMM D",
        p = "MMM D, YYYY";
      r("WAWebL10N").getLanguage() !== "en" && ((m = "LL"), (p = "LL"));
      var _ = e.isSame(r("WAWeb-moment")(), "year");
      return _
        ? s._(/*BTDS*/ "{date}, {time}", [
            s._param("date", e.format(m)),
            s._param("time", e.format(l)),
          ])
        : s._(/*BTDS*/ "{date}, {time}", [
            s._param("date", e.format(p)),
            s._param("time", e.format(l)),
          ]);
    }
    l.getEventDateStringFor = e;
  },
  226,
);
