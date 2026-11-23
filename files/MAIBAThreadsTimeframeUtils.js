__d(
  "MAIBAThreadsTimeframeUtils",
  ["fbt", "DateTime", "Timezone"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
      s._(/*BTDS*/ ""),
    ];
    function u(e) {
      return e == null
        ? null
        : new (r("DateTime"))(
            e,
            o("Timezone").getEnvironmentTimezoneID(),
          ).toDate();
    }
    function c() {
      return new (r("DateTime"))(
        Math.floor(Date.now() / 1e3),
        o("Timezone").getEnvironmentTimezoneID(),
      ).toDate();
    }
    function d(e) {
      var t = u(e);
      if (t == null) return !1;
      var n = c();
      return (
        t.getDate() === n.getDate() &&
        t.getMonth() === n.getMonth() &&
        t.getFullYear() === n.getFullYear()
      );
    }
    function m(e) {
      if (e == null || d(e)) return !1;
      var t = u(e);
      if (t == null) return !1;
      var n = c(),
        r = n.getDay(),
        o = Math.floor(Date.now() / 1e3) - r * 86400;
      return e >= o;
    }
    function p(e) {
      if (e == null || m(e) || d(e)) return !1;
      var t = Math.floor(Date.now() / 1e3),
        n = t - 30 * 86400;
      return e >= n;
    }
    function _(t) {
      if (t == null || p(t) || m(t) || d(t)) return null;
      var n = u(t);
      if (n == null) return null;
      var r = c();
      return n.getFullYear() === r.getFullYear() ? e[n.getMonth()] : null;
    }
    function f(e) {
      var t = u(e);
      if (t == null) return null;
      var n = c();
      return t.getFullYear() !== n.getFullYear() ? t.getFullYear() : null;
    }
    function g(e) {
      var t = [],
        n = [],
        r = [],
        o = new Map(),
        a = new Map();
      return (
        e.forEach(function (e) {
          var i = Math.floor(e.thread_ts / 1e3);
          if (d(i)) t.push(e);
          else if (m(i)) n.push(e);
          else if (p(i)) r.push(e);
          else {
            var l = _(i),
              s = f(i);
            if (l != null) {
              o.has(l) || o.set(l, []);
              var u = o.get(l);
              u != null && u.push(e);
            } else if (s != null) {
              a.has(s) || a.set(s, []);
              var c = a.get(s);
              c != null && c.push(e);
            }
          }
        }),
        {
          last30DaysThreads: r,
          monthThreads: o,
          thisWeekThreads: n,
          todayThreads: t,
          yearThreads: a,
        }
      );
    }
    ((l.isToday = d),
      (l.isThisWeek = m),
      (l.isLast30Days = p),
      (l.getMonthName = _),
      (l.getYear = f),
      (l.groupThreadsByTimeframe = g));
  },
  226,
);
