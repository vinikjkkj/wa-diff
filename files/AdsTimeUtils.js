__d(
  "AdsTimeUtils",
  ["fbt", "DateConsts"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = Math.floor(e / 6e4),
        n = parseInt((e % 6e4) / 1e3, 10);
      return t + ":" + (n < 10 ? "0" : "") + n;
    }
    function u(e, t) {
      var n = Math.abs(e - t);
      return Math.ceil(n / o("DateConsts").MS_PER_DAY);
    }
    function c(e) {
      var t,
        n = Math.floor(e / (t = o("DateConsts")).SEC_PER_HOUR),
        r = Math.floor((e - n * t.SEC_PER_HOUR) / t.SEC_PER_MIN),
        a = r,
        i = e - r * t.SEC_PER_MIN - n * t.SEC_PER_HOUR,
        l = i;
      (i < 10 && (l = "0" + l), n && r < 10 && (a = "0" + a));
      var u = s._(/*BTDS*/ "{minutes}:{seconds}", [
        s._param("minutes", a),
        s._param("seconds", l),
      ]);
      return (
        n &&
          (u = s._(/*BTDS*/ "{hours}:{minutes}:{seconds}", [
            s._param("hours", n),
            s._param("minutes", a),
            s._param("seconds", l),
          ])),
        u
      );
    }
    ((l.millisToMinutesAndSeconds = e),
      (l.getDifferenceInDays = u),
      (l.secondsToString = c));
  },
  226,
);
