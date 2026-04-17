__d(
  "BaseRelativeTimestampUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return t === "minimized"
        ? s._(/*BTDS*/ "1m")
        : t === "shortened"
          ? s._(/*BTDS*/ "Just now")
          : s._(/*BTDS*/ "a few seconds ago");
    }
    function u(e, t) {
      return t === "minimized"
        ? s._(/*BTDS*/ "1m")
        : s._(/*BTDS*/ "in a few seconds");
    }
    function c(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ '_j{"*":"{minutes}m"}', [s._param("minutes", e, [0])])
          : s._(/*BTDS*/ '_j{"*":"{minute}m"}', [s._param("minute", e, [0])])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"{number} mins","_1":"1 min"}', [
              s._plural(e, "number"),
            ])
          : s._(
              /*BTDS*/ '_j{"*":"{number} minutes ago","_1":"about a minute ago"}',
              [s._plural(e, "number")],
            );
    }
    function d(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ '_j{"*":"in {minutes}m"}', [
              s._param("minutes", e, [0]),
            ])
          : s._(/*BTDS*/ '_j{"*":"in {minute}m"}', [s._param("minute", e, [0])])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"in {number} mins","_1":"in 1 min"}', [
              s._plural(e, "number"),
            ])
          : s._(
              /*BTDS*/ '_j{"*":"in {number} minutes","_1":"in about a minute"}',
              [s._plural(e, "number")],
            );
    }
    function m(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ '_j{"*":"{hours}h"}', [s._param("hours", e, [0])])
          : s._(/*BTDS*/ '_j{"*":"{hour}h"}', [s._param("hour", e, [0])])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"{number} hrs","_1":"1 hr"}', [
              s._plural(e, "number"),
            ])
          : s._(
              /*BTDS*/ '_j{"*":"{number} hours ago","_1":"about an hour ago"}',
              [s._plural(e, "number")],
            );
    }
    function p(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "in {hours}h", [s._param("hours", e)])
          : s._(/*BTDS*/ "in {hour}h", [s._param("hour", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"in {number} hrs","_1":"in 1 hr"}', [
              s._plural(e, "number"),
            ])
          : s._(
              /*BTDS*/ '_j{"*":"in {number} hours","_1":"in about an hour"}',
              [s._plural(e, "number")],
            );
    }
    function _(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "{days}d", [s._param("days", e)])
          : s._(/*BTDS*/ "{day}d", [s._param("day", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"{number} days ago","_1":"a day ago"}', [
              s._plural(e, "number"),
            ]);
    }
    function f(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "in {days}d", [s._param("days", e)])
          : s._(/*BTDS*/ "in {day}d", [s._param("day", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"in {number} days","_1":"in 1 day"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"in {number} days","_1":"in a day"}', [
              s._plural(e, "number"),
            ]);
    }
    function g(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "{weeks}w", [s._param("weeks", e)])
          : s._(/*BTDS*/ "{week}w", [s._param("week", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"{number} wks","_1":"1 wk"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"{number} weeks ago","_1":"a week ago"}', [
              s._plural(e, "number"),
            ]);
    }
    function h(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "in {weeks}w", [s._param("weeks", e)])
          : s._(/*BTDS*/ "in {week}w", [s._param("week", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"in {number} wks","_1":"in 1 wk"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"in {number} weeks","_1":"in a week"}', [
              s._plural(e, "number"),
            ]);
    }
    function y(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "{years}y", [s._param("years", e)])
          : s._(/*BTDS*/ "{year}y", [s._param("year", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"{number} yrs","_1":"1 yr"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"{number} years ago","_1":"a year ago"}', [
              s._plural(e, "number"),
            ]);
    }
    function C(e, t) {
      return t === "minimized"
        ? e > 1
          ? s._(/*BTDS*/ "in {years}y", [s._param("years", e)])
          : s._(/*BTDS*/ "in {year}y", [s._param("year", e)])
        : t === "shortened"
          ? s._(/*BTDS*/ '_j{"*":"in {number} yrs","_1":"in 1 yr"}', [
              s._plural(e, "number"),
            ])
          : s._(/*BTDS*/ '_j{"*":"in {number} years","_1":"in a year"}', [
              s._plural(e, "number"),
            ]);
    }
    var b = 60,
      v = 60,
      S = 24,
      R = 7,
      L = 365;
    function E(t, n, r) {
      r === void 0 && (r = "normal");
      var o = (t.valueOf() - n.valueOf()) / 1e3;
      if (o < b) return e(o, r);
      var a = o / b,
        i = Math.floor(a);
      if (i < v) return c(i, r);
      var l = a / v,
        s = Math.floor(l);
      if (s < S) return m(s, r);
      var u = l / S,
        d = Math.floor(u);
      if (d < R) return _(d, r);
      if (u < L) {
        var p = Math.floor(u / R);
        return g(p, r);
      }
      var f = Math.floor(u / L);
      return y(f, r);
    }
    function k(e, t, n, r, o) {
      (n === void 0 && (n = "normal"),
        r === void 0 && (r = "roundDown"),
        o === void 0 && (o = "1 day"));
      var a = (t.valueOf() - e.valueOf()) / 1e3;
      if (a < b) return u(a, n);
      var i = r === "roundDown" ? Math.floor : Math.ceil,
        l = a / b,
        s = i(l);
      if (s < v) return d(s, n);
      var c = l / v,
        m = i(l / v);
      if (m < S || (o === "24 hours" && m === S)) return p(m, n);
      var _ = c / S,
        g = i(_);
      if (g < R) return f(g, n);
      if (_ < L) {
        var y = i(_ / R);
        return h(y, n);
      }
      var E = i(_ / L);
      return C(E, n);
    }
    ((l.getRelativeTimestamp = E), (l.getRelativeTimestampInFuture = k));
  },
  226,
);
