__d(
  "DurationFormatter",
  ["fbt", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 60,
      u = 3600,
      c = u * 24;
    function d(t) {
      var n = t,
        r = Math.floor(n / u);
      n -= r * u;
      var o = Math.floor(n / e);
      n -= o * e;
      var a = n % 60,
        i = r ? r.toString() + ":" : "";
      return (
        (i += !r || o >= 10 ? o.toString() : "0" + o),
        (i += ":"),
        (i += a >= 10 ? a.toString() : "0" + a),
        i
      );
    }
    function m(t) {
      return (
        r("vulture")("Bu0PbYJ7__RDXKAiedbZO6i_mYs="),
        t >= u ? y(t) : t >= e ? C(t) : v(t)
      );
    }
    function p(t) {
      return t >= c ? h(t) : t >= u ? y(t) : t >= e ? C(t) : v(t);
    }
    function _(e) {
      return e >= u ? y(e) : b(e);
    }
    function f(t) {
      return t >= c ? R(t) : t >= u ? L(t) : t >= e ? E(t) : I(t);
    }
    function g(t) {
      if (t == null) return null;
      var n = t,
        r = Math.floor(n / u);
      n -= r * u;
      var o = Math.floor(n / e);
      n -= o * e;
      var a = n % 60;
      return r !== 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":{"*":"{hour} hrs {minute} min {seconds} sec","_1":"{hour} hrs {minute} min 1 sec"},"_1":{"*":"{hour} hrs 1 min {seconds} sec","_1":"{hour} hrs 1 min 1 sec"}},"_1":{"*":{"*":"1 hr {minute} min {seconds} sec","_1":"1 hr {minute} min 1 sec"},"_1":{"*":"1 hr 1 min {seconds} sec","_1":"1 hr 1 min 1 sec"}}}',
            [
              s._plural(r, "hour"),
              s._plural(o, "minute"),
              s._plural(a, "seconds"),
            ],
          )
        : o !== 0
          ? s._(
              /*BTDS*/ '_j{"*":{"*":"{minute} min {seconds} sec","_1":"{minute} min 1 sec"},"_1":{"*":"1 min {seconds} sec","_1":"1 min 1 sec"}}',
              [s._plural(o, "minute"), s._plural(a, "seconds")],
            )
          : s._(/*BTDS*/ '_j{"*":"{seconds} sec","_1":"1 sec"}', [
              s._plural(a, "seconds"),
            ]);
    }
    function h(e) {
      var t = Math.floor(e / c),
        n = e - t * c,
        r = Math.floor(n / u);
      return r > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{number} days and {hours} hours","_1":"{number} days and 1 hour"},"_1":{"*":"1 day and {hours} hours","_1":"1 day and 1 hour"}}',
            [s._plural(t, "number"), s._plural(r, "hours")],
          )
        : S(e);
    }
    function y(t) {
      var n = Math.floor(t / u),
        r = t - n * u,
        o = Math.floor(r / e);
      return o > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{hours} hours and {minute} minutes","_1":"{hours} hours and 1 minute"},"_1":{"*":"1 hour and {minute} minutes","_1":"1 hour and 1 minute"}}',
            [s._plural(n, "hours"), s._plural(o, "minute")],
          )
        : s._(/*BTDS*/ '_j{"*":"{number} hours","_1":"1 hour"}', [
            s._plural(n, "number"),
          ]);
    }
    function C(t) {
      var n = Math.floor(t / e),
        r = Math.floor(t - n * e);
      return r > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{minutes} minutes and {seconds} seconds","_1":"{minutes} minutes and 1 second"},"_1":{"*":"1 minute and {seconds} seconds","_1":"1 minute and 1 second"}}',
            [s._plural(n, "minutes"), s._plural(r, "seconds")],
          )
        : b(t);
    }
    function b(t) {
      var n = Math.floor(t / e);
      return s._(/*BTDS*/ '_j{"*":"{number} minutes","_1":"1 minute"}', [
        s._plural(n, "number"),
      ]);
    }
    function v(e) {
      var t = Math.floor(e);
      return s._(/*BTDS*/ '_j{"*":"{number} seconds","_1":"1 second"}', [
        s._plural(t, "number"),
      ]);
    }
    function S(e) {
      var t = Math.floor(e / c);
      return s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
        s._plural(t, "number"),
      ]);
    }
    function R(e) {
      var t = Math.floor(e / c),
        n = e - t * c,
        r = Math.floor(n / u);
      return r > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{number} days {hours} h","_1":"{number} days 1 h"},"_1":{"*":"1 d {hours} h","_1":"1 d 1 h"}}',
            [s._plural(t, "number"), s._plural(r, "hours")],
          )
        : T(e);
    }
    function L(t) {
      var n = Math.floor(t / u),
        r = t - n * u,
        o = Math.floor(r / e);
      return o > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{hours} h {minute} m","_1":"{hours} h 1 m"},"_1":{"*":"1 h {minute} m","_1":"1 h 1 m"}}',
            [s._plural(n, "hours"), s._plural(o, "minute")],
          )
        : s._(/*BTDS*/ '_j{"*":"{number} h","_1":"1 h"}', [
            s._plural(n, "number"),
          ]);
    }
    function E(t) {
      var n = Math.floor(t / e),
        r = Math.floor(t - n * e);
      return r > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{minutes} m {seconds} s","_1":"{minutes} m 1 s"},"_1":{"*":"1 m {seconds} s","_1":"1 m 1 s"}}',
            [s._plural(n, "minutes"), s._plural(r, "seconds")],
          )
        : k(t);
    }
    function k(t) {
      var n = Math.floor(t / e);
      return s._(/*BTDS*/ '_j{"*":"{number} m","_1":"1 m"}', [
        s._plural(n, "number"),
      ]);
    }
    function I(e) {
      var t = Math.floor(e);
      return s._(/*BTDS*/ '_j{"*":"{number} s","_1":"1 s"}', [
        s._plural(t, "number"),
      ]);
    }
    function T(e) {
      var t = Math.floor(e / c);
      return s._(/*BTDS*/ '_j{"*":"{number} d","_1":"1 d"}', [
        s._plural(t, "number"),
      ]);
    }
    ((l.formatShort = d),
      (l.formatTime = m),
      (l.formatTimeWithDayGranularity = p),
      (l.formatTimeWithMinuteGranularity = _),
      (l.formatTimeWithDayGranularityShortFormat = f),
      (l.formatShortish = g),
      (l._formatDays = h),
      (l._formatHours = y),
      (l._formatMinutes = C),
      (l._formatMinutesWithoutSeconds = b),
      (l._formatSeconds = v),
      (l._formatDaysWithoutHours = S),
      (l._formatDaysShortFormat = R),
      (l._formatHoursShortFormat = L),
      (l._formatMinutesShortFormat = E),
      (l._formatMinutesWithoutSecondsShortFormat = k),
      (l._formatSecondsShortFormat = I),
      (l._formatDaysWithoutHoursShortFormat = T));
  },
  226,
);
