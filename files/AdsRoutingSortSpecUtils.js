__d(
  "AdsRoutingSortSpecUtils",
  ["AdsInsightsSortDirection", "isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 1,
      c = "~",
      d = ",",
      m = Object.freeze({ ASC: "asc", DESC: "desc" }),
      p = m.ASC,
      _ = m.DESC;
    function f(t) {
      if (t == null || (e || (e = r("isEmpty")))(t)) return null;
      var n = t.map(function (e) {
        var t = [];
        return (
          t.push(e.field),
          t.push(e.direction === r("AdsInsightsSortDirection").ASC ? p : _),
          t.join(c)
        );
      });
      return n.join(d);
    }
    function g(t) {
      if (t == null) return null;
      var n = t.split(d),
        o = n
          .map(function (t) {
            var n = t.split(c),
              o = n[s],
              a =
                n[u] === p
                  ? r("AdsInsightsSortDirection").ASC
                  : r("AdsInsightsSortDirection").DESC;
            return (e || (e = r("isEmpty")))(o)
              ? null
              : { field: o, direction: a };
          })
          .filter(Boolean);
      return (e || (e = r("isEmpty")))(o) ? null : o;
    }
    ((l.encode = f), (l.decode = g));
  },
  98,
);
