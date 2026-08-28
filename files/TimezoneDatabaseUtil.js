__d(
  "TimezoneDatabaseUtil",
  [
    "invariant",
    "BinarySearch",
    "Instant",
    "LocalDate",
    "Timezone",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = /([+-]?)(\d+)(:(\d+))?(:(\d+))?/,
      u = function (t, n) {
        var e = t / n,
          r = t % n,
          o = n > 0 ? 1 : -1;
        return r >= 0 ? [e, r] : [e - o, r + o * n];
      },
      c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function d(e, t, n) {
      var o = e.afterOrOn,
        a = e.beforeOrOn,
        i = e.dayOfMonth,
        l = e.dayOfWeek,
        c = e.lastDayOfWeek;
      if (i != null) return i;
      if (c != null) {
        var d = r("LocalDate").create(t, n, 1).addMonths(1),
          m = u(c - d.getDayOfWeek(), 7),
          p = m[0],
          _ = m[1];
        return d.addDays(_ - 7).getDayOfMonth();
      } else if (a != null) {
        var f = r("LocalDate").create(t, n, a).addDays(1),
          g = u(r("nullthrows")(l) - f.getDayOfWeek(), 7),
          h = g[0],
          y = g[1];
        return f.addDays(y - 7).getDayOfMonth();
      } else if (o != null) {
        var C = r("LocalDate").create(t, n, o),
          b = u(r("nullthrows")(l) - C.getDayOfWeek(), 7),
          v = b[0],
          S = b[1];
        return C.addDays(S).getDayOfMonth();
      } else s(0, 1538);
    }
    function m(t) {
      var n = e.exec(t);
      n != null || s(0, 37289, t, typeof t);
      var r = n[1] !== "-" ? 1 : -1,
        o = +n[2] || 0,
        a = +n[4] || 0,
        i = +n[6] || 0;
      return r * (3600 * o + 60 * a + i);
    }
    function p(e) {
      var t;
      if ((t = /^(\w\w\w)([><]=)(\d+)$/.exec(e))) {
        var n = c.indexOf(t[1]),
          r = +t[3];
        return t[2] === ">="
          ? { afterOrOn: r, dayOfWeek: n }
          : { beforeOrOn: r, dayOfWeek: n };
      } else {
        if ((t = /^last(\w\w\w)$/.exec(e)))
          return { lastDayOfWeek: c.indexOf(t[1]) };
        if ((t = /^\d+$/.exec(e))) return { dayOfMonth: +t[0] };
        s(0, 2938, e);
      }
    }
    function _(e, t) {
      var n = o("Instant").wholeYearRangeInYears.since;
      for (var r of e)
        if (r.years[0] < t) {
          if (t <= r.years[1]) return t - 1;
          n = Math.max(n, r.years[1] - 1);
        }
      return n;
    }
    function f(e, t) {
      var n = [];
      for (var a of e)
        for (
          var i = [Math.max(a.years[0], t[0]), Math.min(a.years[1], t[1])],
            l = i[0];
          l < i[1];
          l++
        ) {
          var s = d(a.day, l, a.month),
            u = a.month;
          a.day.afterOrOn != null && s < a.day.afterOrOn && u++;
          var c = r("LocalDate").create(l, u, s).toInstant(o("Timezone").UTC);
          n.push({ rule: a, utcMidnight: c });
        }
      return (
        n.sort(function (e, t) {
          return e.utcMidnight - t.utcMidnight;
        }),
        n
      );
    }
    function g(e, t) {
      var n = o("BinarySearch").leastUpperBound(
        function (n) {
          var r = e - (t[n].offset - t[n].dstOffset);
          return r < t[n].start
            ? 1
            : t[n].start <= r && r < t[n + 1].start
              ? 0
              : -1;
        },
        0,
        0,
        t.length - 1,
        function (e, t) {
          return e - t;
        },
      );
      return (
        (0 <= n && n < t.length - 1) || s(0, 2939, e),
        e - (t[n].offset - t[n].dstOffset)
      );
    }
    function h(e, t, n, r) {
      var a;
      return (
        n.at.type === "wall"
          ? (a =
              o("Instant").getParallelUsingTransitions(r + n.at.time - 1, e) +
              1)
          : n.at.type === "standard"
            ? (a = g(r + n.at.time - 1, e) + 1)
            : n.at.type === "utc"
              ? (a = r + n.at.time)
              : s(0, 797),
        { start: a, offset: t + n.dstOffset, dstOffset: n.dstOffset }
      );
    }
    function y(e, t) {
      var n = e[e.length - 1];
      e.pop();
      var r = e[e.length - 1];
      (r.start === t.start
        ? (e.pop(), e.push(t))
        : r.start < t.start && t.start < n.start && e.push(t),
        e.push(n));
    }
    function C(e, t, n, a) {
      var i = function (r) {
          return h(e, t, r.rule, r.utcMidnight);
        },
        l = [
          _(
            n,
            r("LocalDate").fromInstant(a[0], o("Timezone").UTC).floor("year")
              .year,
          ),
          r("LocalDate").fromInstant(a[1], o("Timezone").UTC).ceil("year").year,
        ],
        s = f(n, l),
        u;
      for (u = 0; u < s.length && !(a[0] < i(s[u]).start); u++);
      var c = u - 1,
        d = c !== -1 ? s[c].rule.dstOffset : 0,
        m = { start: a[0], offset: t + d, dstOffset: d };
      y(e, m);
      for (var p = c + 1; p < s.length; p++) {
        var g = i(s[p]);
        if (a[1] <= g.start) break;
        y(e, g);
      }
    }
    function b(e, t, n, a) {
      var i = r("nullthrows")(e.records);
      (i[0].interval[0] <= n[0] && n[1] <= i[i.length - 1].interval[1]) ||
        s(0, 2940);
      var l;
      if (a == null) {
        var u = b(e, t, [n[0] - 31536e3, n[0]], 0);
        l = u[u.length - 2].dstOffset;
      } else l = a;
      var c = i.filter(function (e) {
          return n[0] < e.interval[1] && e.interval[0] < n[1];
        }),
        d = [
          {
            start: o("Instant").range.since,
            offset: c[0].offset,
            dstOffset: l,
          },
          { start: o("Instant").range.until, offset: NaN, dstOffset: NaN },
        ];
      for (var m of c)
        m.ruleSetID != null
          ? C(d, m.offset, t(m.ruleSetID).rules, [
              Math.max(n[0], m.interval[0]),
              Math.min(n[1], m.interval[1]),
            ])
          : y(d, {
              start: m.interval[0],
              offset: m.offset + r("nullthrows")(m.dstOffset),
              dstOffset: r("nullthrows")(m.dstOffset),
            });
      return (S(d, n), d);
    }
    function v(e, t, n) {
      var r = b(e, t, n, void 0);
      return R(r);
    }
    function S(e, t) {
      {
        var n = o("BinarySearch").greatestLowerBound(
          function (t) {
            return e[t].start;
          },
          t[0],
          0,
          e.length,
          function (e, t) {
            return e - t;
          },
        );
        (0 <= n || s(0, 2941, e[0].start, e[e.length - 1].start, t[0], t[1]),
          e.splice(0, n + 1, babelHelpers.extends({}, e[n], { start: t[0] })));
      }
      {
        var r = o("BinarySearch").leastUpperBound(
          function (t) {
            return e[t].start;
          },
          t[1],
          0,
          e.length,
          function (e, t) {
            return e - t;
          },
        );
        (r < e.length ||
          s(0, 2942, e[0].start, e[e.length - 1].start, t[0], t[1]),
          e.splice(r, e.length - r, {
            start: t[1],
            offset: NaN,
            dstOffset: NaN,
          }));
      }
    }
    function R(e) {
      var t = [],
        n = e[0].offset;
      t.push(e[0]);
      for (var r = 1; r < e.length - 1; r++) {
        var o = e[r];
        !isNaN(o.offset) && o.offset !== n && ((n = o.offset), t.push(o));
      }
      return (t.push(e[e.length - 1]), t);
    }
    ((l.dayOfWeekAbbrs = c),
      (l.evalDayExpr = d),
      (l.parseOffset = m),
      (l.parseDayExpr = p),
      (l.getPreviousActiveYear = _),
      (l.getActiveRules = f),
      (l.getParallelInStandardOffset = g),
      (l.generateTransitionForRule = h),
      (l.pushTransition = y),
      (l.pushTransitionsForRules = C),
      (l.generateRichTransitions = b),
      (l.generateTransitions = v),
      (l.restrictTransitions = S),
      (l.compactifyTransitions = R));
  },
  98,
);
