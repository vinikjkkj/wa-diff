__d(
  "WAWebHatchTaskScheduleParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 23,
      l = 59,
      s = 59,
      u = 12,
      c = 31,
      d = 60,
      m = 6e4,
      p = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      _ = new Map([
        ["h", "hours"],
        ["m", "minutes"],
        ["s", "seconds"],
      ]),
      f = /^(\d+)([hms])$/,
      g = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,
      h =
        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
      y = /^([+-])(\d{2}):(\d{2})$/,
      C = /^\d{1,2}$/;
    function b(e) {
      var t = e.indexOf("@");
      if (t === -1) return null;
      var n = e.slice(t + 1);
      return (function (e) {
        return e === "runonce"
          ? v(n)
          : e === "interval"
            ? L(n)
            : e === "hourly"
              ? { kind: "hourly" }
              : e === "daily"
                ? E(n)
                : e === "weekly"
                  ? k(n)
                  : e === "monthly"
                    ? I(n)
                    : e === "yearly"
                      ? T(n)
                      : null;
      })(e.slice(0, t));
    }
    function v(e) {
      var t = h.exec(e);
      if (t == null) return null;
      var n = t.slice(1, 7).map(Number),
        r = n[0],
        o = n[1],
        a = n[2],
        i = n[3],
        l = n[4],
        s = n[5],
        u = { day: a, hour: i, minute: l, month: o, second: s, year: r };
      if (!S(u)) return null;
      var c = t[7];
      if (c == null)
        return { at: { kind: "wallClock", wallClock: u }, kind: "runonce" };
      var d = R(c),
        p = Date.UTC(r, o - 1, a, i, l, s);
      return d == null
        ? null
        : { at: { kind: "instant", ms: p - d * m }, kind: "runonce" };
    }
    function S(t) {
      return (
        t.month >= 1 &&
        t.month <= u &&
        t.day >= 1 &&
        t.day <= new Date(Date.UTC(t.year, t.month, 0)).getUTCDate() &&
        t.hour <= e &&
        t.minute <= l &&
        t.second <= s
      );
    }
    function R(t) {
      var n;
      if (t === "Z") return 0;
      var r = (n = y.exec(t)) != null ? n : [],
        o = r[1],
        a = r[2],
        i = r[3];
      if (o == null || Number(a) > e || Number(i) > l) return null;
      var s = Number(a) * d + Number(i);
      return o === "-" ? -s : s;
    }
    function L(e) {
      var t,
        n = (t = f.exec(e)) != null ? t : [],
        r = n[1],
        o = n[2],
        a = Number(r),
        i = o == null ? null : _.get(o);
      return i == null || !Number.isSafeInteger(a) || a === 0
        ? null
        : { count: a, kind: "interval", unit: i };
    }
    function E(e) {
      var t = x(e);
      return t == null ? null : { kind: "daily", time: t };
    }
    function k(e) {
      var t,
        n = (t = D(e)) != null ? t : [],
        r = n[0],
        o = n[1],
        a = r == null ? null : $(r, P);
      return a == null || o == null
        ? null
        : { days: a, kind: "weekly", time: o };
    }
    function I(e) {
      var t,
        n = (t = D(e)) != null ? t : [],
        r = n[0],
        o = n[1],
        a = r == null ? null : $(r, N);
      return a == null || o == null
        ? null
        : { days: a, kind: "monthly", time: o };
    }
    function T(e) {
      var t,
        n,
        r = (t = D(e)) != null ? t : [],
        o = r[0],
        a = r[1],
        i = (n = o == null ? void 0 : o.split(":")) != null ? n : [],
        l = i.length === 2 ? $(i[0], M) : null,
        s = i.length === 2 ? $(i[1], N) : null;
      return l == null || s == null || a == null
        ? null
        : { days: s, kind: "yearly", months: l, time: a };
    }
    function D(e) {
      var t = e.lastIndexOf("-"),
        n = t === -1 ? null : x(e.slice(t + 1));
      return n == null ? null : [e.slice(0, t), n];
    }
    function x(t) {
      var n,
        r = (n = g.exec(t)) != null ? n : [],
        o = r[1],
        a = r[2],
        i = r[3];
      return o == null ||
        Number(o) > e ||
        Number(a) > l ||
        (i != null && Number(i) > s)
        ? null
        : { hour: Number(o), minute: Number(a) };
    }
    function $(e, t) {
      var n = [];
      for (var r of e.split(",")) {
        var o = t(r);
        if (o == null) return null;
        n.push(o);
      }
      return n;
    }
    function P(e) {
      var t = p.indexOf(e.toLowerCase());
      return t === -1 ? null : t;
    }
    function N(e) {
      return w(e, 1, c);
    }
    function M(e) {
      return w(e, 1, u);
    }
    function w(e, t, n) {
      var r = C.test(e) ? Number(e) : null;
      return r != null && r >= t && r <= n ? r : null;
    }
    i.parseHatchTaskSchedule = b;
  },
  66,
);
