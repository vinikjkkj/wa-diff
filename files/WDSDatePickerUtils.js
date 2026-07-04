__d(
  "WDSDatePickerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2e3;
    function l(t) {
      return t == null ? null : new Date(e, t.getMonth(), t.getDate());
    }
    function s(e, t) {
      return e == null || t == null
        ? !1
        : e.getFullYear() === t.getFullYear() &&
            e.getMonth() === t.getMonth() &&
            e.getDate() === t.getDate();
    }
    function u(e, t) {
      return e == null || t == null
        ? { start: e, end: t }
        : t < e
          ? { start: t, end: e }
          : { start: e, end: t };
    }
    function c(e, t) {
      if (e == null || t == null) return [];
      var n = u(e, t),
        r = n.end,
        o = n.start;
      if (o == null || r == null) return [];
      for (var a = [], i = new Date(o); i <= r; )
        (a.push(new Date(i)), i.setDate(i.getDate() + 1));
      return a;
    }
    function d(e, t) {
      return e == null
        ? ""
        : globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null
          ? e.toDateString()
          : new Intl.DateTimeFormat(t, {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(e);
    }
    function m(e, t, n) {
      return e == null && t == null
        ? ""
        : e != null && t == null
          ? d(e, n)
          : e == null && t != null
            ? d(t, n)
            : d(e, n) + " \u2013 " + d(t, n);
    }
    function p(e, t) {
      return e == null
        ? ""
        : globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null
          ? e.toLocaleDateString()
          : new Intl.DateTimeFormat(t, {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            }).format(e);
    }
    function _(e) {
      if (globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null)
        return null;
      var t = new Date(2024, 0, 2),
        n = new Intl.DateTimeFormat(e, {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }).formatToParts(t),
        r = [];
      for (var o of n)
        (o.type === "year" || o.type === "month" || o.type === "day") &&
          r.push(o.type);
      return r.length !== 3 ? null : r;
    }
    function f(e) {
      var t = _(e);
      return t == null
        ? "MM/DD/YYYY"
        : t
            .map(function (e) {
              return e === "year" ? "YYYY" : e === "month" ? "MM" : "DD";
            })
            .join("/");
    }
    function g(e) {
      var t = _(e);
      if (t == null) return ["month", "day"];
      var n = [];
      for (var r of t) (r === "month" || r === "day") && n.push(r);
      return n.length !== 2 ? ["month", "day"] : n;
    }
    function h(e) {
      return g(e)
        .map(function (e) {
          return e === "month" ? "MM" : "DD";
        })
        .join("/");
    }
    function y(e, t) {
      if (e == null) return "";
      if (globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null) {
        var n = String(e.getMonth() + 1).padStart(2, "0"),
          r = String(e.getDate()).padStart(2, "0");
        return n + "/" + r;
      }
      return new Intl.DateTimeFormat(t, {
        day: "2-digit",
        month: "2-digit",
      }).format(e);
    }
    function C(e, t) {
      for (
        var n = g(t),
          r = e.replace(/[^0-9]/g, ""),
          o = r.slice(0, 4),
          a = [],
          i = 0,
          l = 0;
        l < n.length && !(i >= o.length);
        l++
      )
        (a.push(o.slice(i, i + 2)), (i += 2));
      return a.join("/");
    }
    function b(t, n) {
      var r = t.trim();
      if (r === "") return null;
      var o = g(n),
        a = r.split(/[^0-9]+/).filter(function (e) {
          return e.length > 0;
        });
      if (a.length !== 2) return null;
      for (var i = null, l = null, s = 0; s < 2; s++) {
        var u = parseInt(a[s], 10);
        if (Number.isNaN(u)) return null;
        o[s] === "month" ? (i = u) : (l = u);
      }
      if (i == null || l == null || i < 1 || i > 12 || l < 1 || l > 31)
        return null;
      var c = new Date(e, i - 1, l);
      return c.getMonth() !== i - 1 || c.getDate() !== l ? null : c;
    }
    function v(e, t) {
      for (
        var n,
          r = (n = _(t)) != null ? n : ["month", "day", "year"],
          o = e.replace(/[^0-9]/g, ""),
          a = r.map(function (e) {
            return e === "year" ? 4 : 2;
          }),
          i = a.reduce(function (e, t) {
            return e + t;
          }, 0),
          l = o.slice(0, i),
          s = [],
          u = 0,
          c = 0;
        c < a.length && !(u >= l.length);
        c++
      ) {
        var d = a[c],
          m = l.slice(u, u + d);
        (s.push(m), (u += d));
      }
      return s.join("/");
    }
    function S(e, t) {
      var n = e.trim();
      if (n === "") return null;
      var r = _(t);
      if (r == null) return null;
      var o = n.split(/[^0-9]+/).filter(function (e) {
        return e.length > 0;
      });
      if (o.length !== 3) return null;
      for (var a = null, i = null, l = null, s = 0; s < 3; s++) {
        var u = parseInt(o[s], 10);
        if (Number.isNaN(u)) return null;
        var c = r[s];
        c === "year" ? (a = u) : c === "month" ? (i = u) : (l = u);
      }
      if (
        a == null ||
        i == null ||
        l == null ||
        a < 1e3 ||
        a > 9999 ||
        i < 1 ||
        i > 12 ||
        l < 1 ||
        l > 31
      )
        return null;
      var d = new Date(a, i - 1, l);
      return d.getFullYear() !== a ||
        d.getMonth() !== i - 1 ||
        d.getDate() !== l
        ? null
        : d;
    }
    var R = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    function L(e) {
      if (globalThis.Intl == null || globalThis.Intl.DateTimeFormat == null)
        return R;
      for (
        var t = new Intl.DateTimeFormat(e, { month: "long" }), n = [], r = 0;
        r < 12;
        r++
      )
        n.push(t.format(new Date(2024, r, 1)));
      return n;
    }
    var E = 50;
    function k(e, t, n) {
      var r = n.getFullYear(),
        o = r - E,
        a = r + E;
      if (
        (e != null && (o = Math.max(o, e.getFullYear())),
        t != null && (a = Math.min(a, t.getFullYear())),
        a < o)
      )
        return [];
      for (var i = [], l = o; l <= a; l++) i.push(l);
      return i;
    }
    ((i.BIRTHDAY_CANONICAL_YEAR = e),
      (i.toBirthdayDate = l),
      (i.isSameDay = s),
      (i.normalizeRange = u),
      (i.getRangeHighlightDates = c),
      (i.formatDateLocalized = d),
      (i.formatRangeLocalized = m),
      (i.formatDateShort = p),
      (i.getDateInputMask = f),
      (i.getMonthDayInputMask = h),
      (i.formatMonthDayShort = y),
      (i.formatMonthDayInputMask = C),
      (i.parseMonthDayShort = b),
      (i.formatDateInputMask = v),
      (i.parseDateShort = S),
      (i.getMonthNames = L),
      (i.getYearList = k));
  },
  66,
);
