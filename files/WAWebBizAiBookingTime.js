__d(
  "WAWebBizAiBookingTime",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1e3,
      u = 1440 * 60 * 1e3,
      c = "en-US-u-ca-gregory-nu-latn",
      d = {},
      m = { day: "numeric", month: "short", weekday: "short", year: "numeric" },
      p = { day: "numeric", month: "short" },
      _ = { day: "numeric", month: "short", year: "numeric" },
      f = { hour: "numeric", minute: "2-digit" },
      g = babelHelpers.extends({}, f, { timeZoneName: "short" }),
      h = { day: "2-digit", month: "2-digit", year: "numeric" },
      y = new WeakMap();
    function C(e) {
      var t,
        n,
        o = e.endDateTime,
        a = e.startDateTime,
        i = e.timezoneId,
        l = v(a);
      if (l == null) return null;
      var s = v(o),
        u = r("WAWebL10N").getFullLocale(),
        c = S(i),
        d = E(l, c);
      if (d == null) return null;
      var p = k(l, u, m, c),
        _ = R(c),
        h = _ ? g : f,
        y = (t = k(l, u, h, c)) != null ? t : _ ? k(l, u, f, c) : null,
        C = (n = I(l, s, u, h, c)) != null ? n : _ ? I(l, s, u, f, c) : null;
      return y == null
        ? null
        : { date: p, dateKey: D(d), startTime: y, timeRange: C };
    }
    function b(e) {
      var t = x(e),
        n = E(new Date(), null);
      if (t == null || n == null) return null;
      var o = $(t),
        a = r("WAWebL10N").getFullLocale(),
        i = k(o, a, p, "UTC"),
        l = k(o, a, _, "UTC");
      if (i == null || l == null) return null;
      var c = (P(t) - P(n)) / u;
      return c === 0
        ? s._(/*BTDS*/ "Today ({date})", [s._param("date", i)])
        : c === 1
          ? s._(/*BTDS*/ "Tomorrow ({date})", [s._param("date", i)])
          : l;
    }
    function v(t) {
      if (t == null || !Number.isFinite(t)) return null;
      var n = new Date(t * e);
      return Number.isNaN(n.getTime()) ? null : n;
    }
    function S(e) {
      var t,
        n = e == null ? void 0 : e.trim();
      if (n == null || n === "") return null;
      var r = T(c, d, n);
      return r == null ? null : (t = L(r)) != null ? t : n;
    }
    function R(e) {
      if (e == null) return !1;
      var t = T(c, d, null),
        n = t == null ? null : L(t);
      return n == null || n !== e;
    }
    function L(e) {
      try {
        var t = e.resolvedOptions().timeZone;
        return t == null || t === "" ? null : t;
      } catch (e) {
        return null;
      }
    }
    function E(e, t) {
      var n = T(c, h, t);
      if (n == null) return null;
      try {
        var r,
          o,
          a,
          i = n.formatToParts(e),
          l = Number(
            (r = i.find(function (e) {
              return e.type === "year";
            })) == null
              ? void 0
              : r.value,
          ),
          s = Number(
            (o = i.find(function (e) {
              return e.type === "month";
            })) == null
              ? void 0
              : o.value,
          ),
          u = Number(
            (a = i.find(function (e) {
              return e.type === "day";
            })) == null
              ? void 0
              : a.value,
          );
        return Number.isFinite(l) && Number.isFinite(s) && Number.isFinite(u)
          ? { day: u, month: s, year: l }
          : null;
      } catch (e) {
        return null;
      }
    }
    function k(e, t, n, r) {
      var o = T(t, n, r);
      if (o == null) return null;
      try {
        return o.format(e);
      } catch (e) {
        return null;
      }
    }
    function I(e, t, n, r, o) {
      var a = T(n, r, o);
      if (a == null) return null;
      try {
        return t == null || t.getTime() < e.getTime()
          ? a.format(e)
          : a.formatRange(e, t);
      } catch (e) {
        return null;
      }
    }
    function T(e, t, n) {
      var r = y.get(t);
      r == null && ((r = new Map()), y.set(t, r));
      var o = e + "\0" + (n != null ? n : ""),
        a = r.get(o);
      if (a !== void 0) return a;
      try {
        var i = new Intl.DateTimeFormat(
          e,
          babelHelpers.extends({}, t, { timeZone: n != null ? n : void 0 }),
        );
        return (r.set(o, i), i);
      } catch (e) {
        return (r.set(o, null), null);
      }
    }
    function D(e) {
      return (
        String(e.year).padStart(4, "0") +
        "-" +
        String(e.month).padStart(2, "0") +
        "-" +
        String(e.day).padStart(2, "0")
      );
    }
    function x(e) {
      var t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
      if (t == null) return null;
      var n = { day: Number(t[3]), month: Number(t[2]), year: Number(t[1]) },
        r = $(n);
      return r.getUTCFullYear() === n.year &&
        r.getUTCMonth() === n.month - 1 &&
        r.getUTCDate() === n.day
        ? n
        : null;
    }
    function $(e) {
      return new Date(Date.UTC(e.year, e.month - 1, e.day, 12));
    }
    function P(e) {
      return Date.UTC(e.year, e.month - 1, e.day);
    }
    ((l.getBookingTimePresentation = C), (l.getBookingDateHeading = b));
  },
  226,
);
