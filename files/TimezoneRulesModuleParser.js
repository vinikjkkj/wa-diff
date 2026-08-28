__d(
  "TimezoneRulesModuleParser",
  ["Instant", "TimezoneDatabase", "TimezoneDatabaseUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      for (var e = [], r = 0; r < t.length; r += n) e.push(t.slice(r, r + n));
      return e;
    };
    function s(e) {
      return e.endsWith("u")
        ? { timeString: e.substring(0, e.length - 1), timeType: "utc" }
        : e.endsWith("s")
          ? { timeString: e.substring(0, e.length - 1), timeType: "standard" }
          : { timeString: e, timeType: "wall" };
    }
    function u(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        i = e[4],
        l = e[5],
        u = +t,
        c = s(i),
        d = c.timeString,
        m = c.timeType;
      return {
        years: [
          u,
          n === "-" ? o("Instant").wholeYearRangeInYears.until : u + +n,
        ],
        month: +r,
        day: o("TimezoneDatabaseUtil").parseDayExpr(a),
        at: { type: m, time: o("TimezoneDatabaseUtil").parseOffset(d) },
        dstOffset: o("TimezoneDatabaseUtil").parseOffset(l),
      };
    }
    function c(t, n) {
      var r = t.split(" "),
        o = e(r, 6).map(u);
      return { id: n, rules: o, name: void 0 };
    }
    function d(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a,
        i;
      n === "-"
        ? ((a = void 0), (i = 0))
        : n.startsWith("dst:")
          ? ((a = void 0),
            (i = o("TimezoneDatabaseUtil").parseOffset(n.substring(4))))
          : ((a = +n), (i = void 0));
      var l = [NaN, r !== "-" ? +r : o("Instant").wholeYearRange.until];
      return {
        offset: o("TimezoneDatabaseUtil").parseOffset(t),
        ruleSetID: a,
        interval: l,
        dstOffset: i,
      };
    }
    function m(t, n) {
      if (typeof t == "string") {
        var r = t.split(" "),
          a = e(r, 3).map(d);
        a[0].interval[0] = o("Instant").range.since;
        for (var i = 1; i < a.length; i++)
          a[i].interval[0] = a[i - 1].interval[1];
        return { id: n, linkTo: void 0, records: a, name: void 0 };
      } else return { id: n, linkTo: t, records: null, name: void 0 };
    }
    function p(e) {
      var t = new Map();
      e.zones.forEach(function (e, n) {
        var r = m(e, +n);
        t.set(r.id, r);
      });
      var n = new Map();
      return (
        e.ruleSets.forEach(function (e, t) {
          var r = c(e, +t);
          n.set(r.id, r);
        }),
        new (r("TimezoneDatabase"))(t, n, e.version, [
          e.fromYear,
          o("Instant").wholeYearRangeInYears.until,
        ])
      );
    }
    ((l.parseRule = u), (l.parseRuleSet = c), (l.parseZone = m), (l.parse = p));
  },
  98,
);
