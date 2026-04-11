__d(
  "WAWebClockDurationFormatters",
  ["fbt", "WATimeUtils", "WAWeb-moment", "err"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = typeof e == "string" ? parseInt(e, 10) : e,
        n = r("WAWeb-moment").utc(t * 1e3);
      if (n.isValid()) {
        var a = t < o("WATimeUtils").HOUR_SECONDS ? "m:ss" : "H:mm:ss";
        return n.format(a);
      }
      return "";
    }
    function u(e) {
      var t,
        n = e,
        r = Math.floor(n / (t = o("WATimeUtils")).DAY_SECONDS);
      n -= r * t.DAY_SECONDS;
      var a = Math.floor(n / t.HOUR_SECONDS);
      n -= a * t.HOUR_SECONDS;
      var i = Math.floor(n / t.MINUTE_SECONDS),
        l = Math.floor(n % t.MINUTE_SECONDS),
        u = s._(/*BTDS*/ '_j{"*":"{days} days","_1":"1 day"}', [
          s._plural(r, "days"),
        ]),
        c = s._(/*BTDS*/ '_j{"*":"{hours} hours","_1":"1 hour"}', [
          s._plural(a, "hours"),
        ]),
        d = s._(/*BTDS*/ '_j{"*":"{minutes} minutes","_1":"1 minute"}', [
          s._plural(i, "minutes"),
        ]),
        m = s._(/*BTDS*/ '_j{"*":"{seconds} seconds","_1":"1 second"}', [
          s._plural(l, "seconds"),
        ]);
      return r > 0
        ? s._(/*BTDS*/ "{x days} {x hours} {x minutes} {x seconds}", [
            s._param("x days", u),
            s._param("x hours", c),
            s._param("x minutes", d),
            s._param("x seconds", m),
          ])
        : a > 0
          ? s._(/*BTDS*/ "{x hours} {x minutes} {x seconds}", [
              s._param("x hours", c),
              s._param("x minutes", d),
              s._param("x seconds", m),
            ])
          : i > 0
            ? s._(/*BTDS*/ "{x minutes} {x seconds}", [
                s._param("x minutes", d),
                s._param("x seconds", m),
              ])
            : m;
    }
    function c(e) {
      var t,
        n = e,
        r = Math.floor(n / (t = o("WATimeUtils")).DAY_SECONDS);
      n -= r * t.DAY_SECONDS;
      var a = Math.floor(n / t.HOUR_SECONDS);
      n -= a * t.HOUR_SECONDS;
      var i = Math.floor(n % t.MINUTE_SECONDS),
        l = r * 24 + a,
        u = Math.floor(e / t.MINUTE_SECONDS);
      return r >= 1
        ? s._(/*BTDS*/ '_j{"*":"{days} days","_1":"1 day"}', [
            s._plural(r, "days"),
          ])
        : l >= 1
          ? s._(/*BTDS*/ '_j{"*":"{hours} hours","_1":"1 hour"}', [
              s._plural(l, "hours"),
            ])
          : u >= 1
            ? s._(/*BTDS*/ '_j{"*":"{minutes} minutes","_1":"1 minute"}', [
                s._plural(u, "minutes"),
              ])
            : s._(/*BTDS*/ '_j{"*":"{seconds} seconds","_1":"1 second"}', [
                s._plural(i, "seconds"),
              ]);
    }
    function d(e) {
      var t = Math.floor(e / 86400);
      if (t > 0)
        return s._(/*BTDS*/ '_j{"*":"{days}d"}', [
          s._plural(t),
          s._param("days", t),
        ]);
      var n = Math.floor(e / 3600);
      if (n > 0)
        return s._(/*BTDS*/ '_j{"*":"{hours}h"}', [
          s._plural(n),
          s._param("hours", n),
        ]);
      var r = Math.floor(e / 60);
      return r > 0
        ? s._(/*BTDS*/ '_j{"*":"{minutes}m"}', [
            s._plural(r),
            s._param("minutes", r),
          ])
        : s._(/*BTDS*/ '_j{"*":"{seconds}s"}', [
            s._plural(e),
            s._param("seconds", e),
          ]);
    }
    function m(e) {
      var t = Math.floor(e / 3600),
        n = Math.floor((e % 3600) / 60),
        r = e % 60;
      if (t > 24 || (t === 24 && (n > 0 || r > 0))) {
        var o = Math.ceil(e / 86400);
        return s._(/*BTDS*/ '_j{"*":"{days} days","_1":"1 day"}', [
          s._plural(o, "days"),
        ]);
      }
      var a = t.toString().padStart(2, "0"),
        i = n.toString().padStart(2, "0"),
        l = r.toString().padStart(2, "0");
      return s._(/*BTDS*/ "{x hours}:{x minutes}:{x seconds}", [
        s._param("x hours", a),
        s._param("x minutes", i),
        s._param("x seconds", l),
      ]);
    }
    function p(e) {
      var t = Math.floor(e / 86400);
      if (t > 0) {
        var n = s._(/*BTDS*/ '_j{"*":"{days} days","_1":"{days} day"}', [
          s._plural(t),
          s._param("days", t),
        ]);
        return s._(/*BTDS*/ "Try again in {time}.", [s._param("time", n)]);
      }
      var r = Math.floor(e / 3600);
      if (r > 0) {
        var o = s._(/*BTDS*/ '_j{"*":"{hours} hours","_1":"{hours} hour"}', [
          s._plural(r),
          s._param("hours", r),
        ]);
        return s._(/*BTDS*/ "Try again in {time}.", [s._param("time", o)]);
      }
      var a = Math.floor(e / 60);
      if (a > 0) {
        var i = s._(
          /*BTDS*/ '_j{"*":"{minutes} minutes","_1":"{minutes} minute"}',
          [s._plural(a), s._param("minutes", a)],
        );
        return s._(/*BTDS*/ "Try again in {time}.", [s._param("time", i)]);
      }
      var l = s._(
        /*BTDS*/ '_j{"*":"{seconds} seconds","_1":"{seconds} second"}',
        [s._plural(e), s._param("seconds", e)],
      );
      return s._(/*BTDS*/ "Try again in {time}.", [s._param("time", l)]);
    }
    function _(e) {
      if (e < 0) throw r("err")("negative duration");
      if (e === 0) return s._(/*BTDS*/ "Now");
      var t = r("WAWeb-moment")().subtract(e, "seconds").year(),
        n = r("WAWeb-moment")().year();
      if (n !== t) {
        var o = r("WAWeb-moment")()
          .subtract(e, "seconds")
          .format("MMM DD, YYYY");
        return s._(/*BTDS*/ "{formattedDate}", [s._param("formattedDate", o)]);
      }
      var a = Math.floor(e / 86400);
      if (a > 7) {
        var i = r("WAWeb-moment")().subtract(e, "seconds").format("MMM DD");
        return s._(/*BTDS*/ "{formattedDate}", [s._param("formattedDate", i)]);
      }
      return e < 60 ? s._(/*BTDS*/ "Just now") : d(e);
    }
    function f(e) {
      var t = d(e);
      return s._(/*BTDS*/ "{time} left", [s._param("time", t)]);
    }
    function g(e, t) {
      var n = e,
        o = r("WAWeb-moment").unix(n).startOf("day"),
        a =
          t === void 0
            ? r("WAWeb-moment")().startOf("day")
            : r("WAWeb-moment").unix(t).startOf("day"),
        i = a.diff(o, "days");
      return Math.abs(i);
    }
    ((l.durationStr = e),
      (l.callDurationStr = u),
      (l.callDurationStrSimple = c),
      (l.shortDurationString = d),
      (l.enforcementTimeLeftStr = m),
      (l.tryAgainInStr = p),
      (l.relativeShortStr = _),
      (l.timeLeftStr = f),
      (l.daysDeltaAbs = g));
  },
  226,
);
