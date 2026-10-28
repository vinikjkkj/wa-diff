__d(
  "WAWebHatchActivityFeed",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 200,
      l = new Map();
    function s(e, t) {
      var n = e.get(t.rowKey);
      if (n != null && c(n.appliedTsMs, t.appliedTsMs)) return e;
      var r = new Map(e);
      return (r.set(t.rowKey, t), d(r));
    }
    function u(e) {
      var t = new Map();
      for (var n of m(Array.from(e.values()))) {
        var r = p(n.timestampMs),
          o = t.get(r);
        o == null ? t.set(r, [n]) : o.push(n);
      }
      return Array.from(t, function (e) {
        var t = e[0],
          n = e[1];
        return { dateKey: t, records: n };
      });
    }
    function c(e, t) {
      return e != null && t != null && t < e;
    }
    function d(t) {
      return t.size <= e
        ? t
        : new Map(
            m(Array.from(t.values()))
              .slice(0, e)
              .map(function (e) {
                return [e.rowKey, e];
              }),
          );
    }
    function m(e) {
      return e.sort(function (e, t) {
        return t.timestampMs - e.timestampMs;
      });
    }
    function p(e) {
      var t = new Date(e),
        n = String(t.getMonth() + 1).padStart(2, "0"),
        r = String(t.getDate()).padStart(2, "0");
      return t.getFullYear() + "-" + n + "-" + r;
    }
    ((i.HATCH_ACTIVITY_MAX_ROWS = e),
      (i.HATCH_ACTIVITY_EMPTY_FEED = l),
      (i.applyHatchActivityRecord = s),
      (i.groupHatchActivityByDay = u));
  },
  66,
);
