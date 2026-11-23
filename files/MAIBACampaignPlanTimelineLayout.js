__d(
  "MAIBACampaignPlanTimelineLayout",
  ["DateTime", "formatDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2024,
      s = 0.05,
      u = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      },
      c = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    function d(e) {
      return e < 12 ? c[e] : 365 + c[e - 12];
    }
    function m(e) {
      var t = e.trim();
      return t === "" || t === "Ongoing";
    }
    function p(e) {
      var t = e.trim().split(/\s+/);
      if (t.length < 2) return null;
      var n = u[t[0]],
        r = parseInt(t[1], 10);
      return n == null || Number.isNaN(r) ? null : { day: r, monthIdx: n };
    }
    function _(e, t) {
      if (e != null && e > 0) {
        var n = r("DateTime").localCreate(e);
        return { day: n.getDayOfMonth(), monthIdx: n.getMonth() - 1 };
      }
      return p(t);
    }
    function f(t) {
      var n = Date.UTC(e, t.monthIdx, t.day) / 1e3;
      return r("formatDate")(n, "M j", { utc: !0 });
    }
    function g(e) {
      for (var t = 0; t < 23 && d(t + 1) <= e; ) t++;
      return { day: e - d(t) + 1, monthIdx: t % 12 };
    }
    function h(e, t, n, r) {
      var o = function (t, o, a) {
          return {
            align: t,
            key: String(o),
            label: f(a),
            leftPct: ((o - n) / r) * 100,
          };
        },
        a = [o("start", e.abs, e.date)];
      if (t == null || t.abs === e.abs) return a;
      var i = Math.round((e.abs + t.abs) / 2);
      return (
        i !== e.abs && i !== t.abs && a.push(o("middle", i, g(i))),
        a.push(o("end", t.abs, t.date)),
        a
      );
    }
    function y(e) {
      var t = e.map(function (e) {
          return _(e.start_time, e.start_date);
        }),
        n = e.map(function (e) {
          return _(e.end_time, e.end_date);
        }),
        r = e.map(function (e, t) {
          return n[t] == null && m(e.end_date);
        }),
        o =
          t.every(function (e) {
            return e != null;
          }) &&
          n.every(function (e, t) {
            return e != null || r[t];
          });
      if (o) {
        var a,
          i,
          l,
          u,
          c = 12;
        for (var p of t) p != null && p.monthIdx < c && (c = p.monthIdx);
        for (
          var f = [], g = [], y = c, C = null, b = null, v = 0;
          v < e.length;
          v++
        ) {
          var S = t[v];
          if (S != null) {
            var R = S.monthIdx < c ? S.monthIdx + 12 : S.monthIdx,
              L = d(R) + (S.day - 1);
            (f.push(L),
              (C == null || L < C.abs) && (C = { abs: L, date: S }),
              R > y && (y = R));
            var E = n[v];
            if (E == null) {
              g.push(null);
              continue;
            }
            for (var k = E.monthIdx; k < R; ) k += 12;
            var I = d(k) + (E.day - 1);
            (g.push(I),
              (b == null || I > b.abs) && (b = { abs: I, date: E }),
              k > y && (y = k));
          }
        }
        var T = d(y + 1),
          D = (a = (i = C) == null ? void 0 : i.abs) != null ? a : 0,
          x = g.some(function (e) {
            return e == null;
          })
            ? T
            : (l = (u = b) == null ? void 0 : u.abs) != null
              ? l
              : T,
          $ = Math.max(1, Math.round((x - D) * s)),
          P = D - $,
          N = x + $,
          M = N - P;
        if (M > 0 && C != null && f.length === e.length) {
          var w = f.map(function (e, t) {
            var n;
            return {
              left: ((e - P) / M) * 100,
              width: ((((n = g[t]) != null ? n : N) - e) / M) * 100,
            };
          });
          return { bars: w, ticks: h(C, b, P, M) };
        }
      }
      return {
        bars: e.map(function (e) {
          var t = parseFloat(e.timeline_start),
            n = m(e.end_date) ? 100 : parseFloat(e.timeline_end);
          return { left: t, width: n - t };
        }),
        ticks: [],
      };
    }
    l.computeTimelineLayout = y;
  },
  98,
);
