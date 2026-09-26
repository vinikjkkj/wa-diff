__d(
  "EventTimeInputUtils",
  ["fbt", "DateConsts", "DateFormatConfig", "LiveEventUtils.react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("DateConsts").SEC_PER_DAY + 6 * o("DateConsts").SEC_PER_HOUR + 1,
      u = "AM",
      c = "PM",
      d = (r("DateFormatConfig").formats["g:ia"] || "").indexOf("a") >= 0;
    function m(e) {
      return e != null && e >= 0 && e < 24;
    }
    function p(e) {
      return e != null && e >= 0 && e < 60;
    }
    function _(e, t, n) {
      var r = e;
      if (r == null || t === null || t === void 0) return null;
      if (d)
        if (n === u) r === 12 && (r = 0);
        else if (n === c) r < 12 && (r += 12);
        else return null;
      return r * o("DateConsts").SEC_PER_HOUR + t * o("DateConsts").SEC_PER_MIN;
    }
    function f(e) {
      var t = e.trim();
      if (t === "")
        return {
          hasErrors: !1,
          hours: null,
          minutes: null,
          queryString: "",
          time: null,
        };
      t = C(t);
      var n = t.split(r("DateFormatConfig").timeSeparator),
        a = parseInt(n[0], 10),
        i = null,
        l = null,
        s = !1;
      if (n.length > 1 && n[1] !== "")
        if (d) {
          var f = n[1].split(" ");
          ((i = parseInt(f[0], 10)),
            f.length > 1 &&
              ((l = f[1].trim()), (l === u || l === c) && (s = !0)));
        } else i = parseInt(n[1], 10);
      var g =
          !m(a) ||
          !p(i) ||
          (d && !s) ||
          (!d && o("LiveEventUtils.react").nullthrows(n[1]).length !== 2),
        h = g ? null : _(a, i, l);
      return { hasErrors: !1, hours: a, minutes: i, queryString: t, time: h };
    }
    function g(e) {
      var t = e != null ? e % o("DateConsts").SEC_PER_DAY : null,
        n = d ? h(t) : y(t);
      return n != null ? n : "";
    }
    function h(e) {
      if (e == null) return null;
      var t = Math.floor(e / o("DateConsts").SEC_PER_HOUR),
        n = Math.floor(
          (e % o("DateConsts").SEC_PER_HOUR) / o("DateConsts").SEC_PER_MIN,
        ),
        a = n < 10 ? "0" + n : "" + n;
      return t === 0
        ? "12" + r("DateFormatConfig").timeSeparator + a + " " + u
        : t < 12
          ? t + r("DateFormatConfig").timeSeparator + a + " " + u
          : t === 12
            ? "12" + r("DateFormatConfig").timeSeparator + a + " " + c
            : t < 24
              ? t - 12 + r("DateFormatConfig").timeSeparator + a + " " + c
              : null;
    }
    function y(e) {
      if (e == null) return null;
      var t = Math.floor(e / o("DateConsts").SEC_PER_HOUR),
        n = Math.floor(
          (e % o("DateConsts").SEC_PER_HOUR) / o("DateConsts").SEC_PER_MIN,
        ),
        a = t < 10 ? "0" + t : "" + t,
        i = n < 10 ? "0" + n : "" + n;
      return a + r("DateFormatConfig").timeSeparator + i;
    }
    function C(e) {
      var t = e;
      return t === ""
        ? t
        : isNaN(t)
          ? ((t = t.toUpperCase()), (t = b(t)), t)
          : v(t);
    }
    function b(e) {
      if (!d) return e;
      var t = e.split(r("DateFormatConfig").timeSeparator);
      if (t.length < 2) return e;
      var n = t[1];
      if (!isNaN(n)) return e;
      var o = n.indexOf(" ");
      return o > -1
        ? e.replace(/ +/g, " ")
        : t[0] +
            r("DateFormatConfig").timeSeparator +
            n.split(/(\D+)/g).join(" ").trim();
    }
    function v(e) {
      var t = parseInt(e, 10);
      if ((d && t <= 12) || (!d && t <= 23)) {
        var n = e.charAt(0) === "0";
        if (!n || t < 10) return e;
      }
      t = parseInt(e.substring(0, 2), 10);
      var o = e.substring(2, 4);
      ((d && t > 12) || (!d && t > 23)) &&
        ((t = parseInt(e.charAt(0), 10)), (o = e.substring(1, 3)));
      var a = "";
      return (
        !d && t < 10 ? (a = "0" + t) : (a = "" + t),
        isNaN(o) || (a += r("DateFormatConfig").timeSeparator),
        parseInt(o, 10) >= 60 ? (a += "00") : (a += o),
        a
      );
    }
    function S(e, t) {
      if (t == null) return null;
      var n = e - t;
      return (n <= 0 && (n += o("DateConsts").SEC_PER_DAY), n);
    }
    function R(e, t) {
      var n = S(e, t);
      if (n == null) return null;
      var r = Math.floor(n / o("DateConsts").SEC_PER_HOUR),
        a = Math.floor(
          (n % o("DateConsts").SEC_PER_HOUR) / o("DateConsts").SEC_PER_MIN,
        );
      return r === 0
        ? s._(
            /*BTDS*/ '_j{"*":"({minutes count} mins)","_1":"({minutes count} min)"}',
            [s._plural(a), s._param("minutes count", a)],
          )
        : a === 0
          ? s._(
              /*BTDS*/ '_j{"*":"({hours count} hrs)","_1":"({hours count} hr)"}',
              [s._plural(r), s._param("hours count", r)],
            )
          : s._(
              /*BTDS*/ '_j{"*":{"*":"({hours count} hrs {minutes count} mins)","_1":"({hours count} hrs {minutes count} min)"},"_1":{"*":"({hours count} hr {minutes count} mins)","_1":"({hours count} hr {minutes count} min)"}}',
              [
                s._plural(r),
                s._plural(a),
                s._param("hours count", r),
                s._param("minutes count", a),
              ],
            );
    }
    function L(e, t, n, r) {
      var a = E(
        e * o("DateConsts").SEC_PER_HOUR + t * o("DateConsts").SEC_PER_MIN,
        r,
      );
      a && n.push(a);
    }
    function E(e, t) {
      var n = e % o("DateConsts").SEC_PER_DAY;
      return k(n, t);
    }
    function k(e, t) {
      var n = g(e);
      return n !== ""
        ? {
            duration: S(e, t),
            subtitle: R(e, t),
            title: n.toString(),
            uniqueID: e,
          }
        : null;
    }
    function I(e, t) {
      var n = e;
      return k(n, t);
    }
    function T(e, t, n) {
      var r = [];
      if (e != null && t != null) {
        var o = (e + 12) % 24;
        if (t > 0 && t < 10) {
          var a = t * 10,
            i = t * 10 + 5;
          (d && (L(o, a, r, n), L(o, i, r, n)), L(e, a, r, n), L(e, i, r, n));
        }
        (d && L(o, t, r, n), L(e, t, r, n));
      }
      return r;
    }
    function D(t, n, r, a) {
      for (
        var i = [],
          l = n * o("DateConsts").SEC_PER_MIN,
          s = r != null ? r + l : t != null ? t : 0,
          u = a != null && a ? e : o("DateConsts").SEC_PER_DAY,
          c = 0;
        c < u;
        c += l
      ) {
        var d = void 0;
        (a != null && a ? (d = I(s + c, r)) : (d = E(s + c, r)),
          d && i.push(d));
      }
      return i;
    }
    function x(e, t) {
      return e == null ? null : E(e, t);
    }
    ((l.SEPARATOR = r("DateFormatConfig").timeSeparator),
      (l.USE_AMPM = d),
      (l.parseInputToStates = f),
      (l.getTimeStringBySecondsAfterMidnight = g),
      (l.prettifyTimeInput = C),
      (l.getAdditionalTimeEntries = T),
      (l.getAllTimeEntries = D),
      (l.getDefaultTimeEntry = x));
  },
  226,
);
