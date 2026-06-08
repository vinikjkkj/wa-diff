__d(
  "WAWebDeveloperToolsSearch",
  ["WAWebFuzzySearch"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2;
    function s(e, t, n) {
      var r = n != null ? n : new Set();
      if (e === "")
        return [].concat(t).sort(function (e, t) {
          var n = r.has(e.tableName),
            o = r.has(t.tableName);
          return n !== o
            ? n
              ? -1
              : 1
            : e.tableName.localeCompare(t.tableName);
        });
      var o = []
        .concat(t)
        .filter(function (t) {
          var n = t.tableName;
          return u(e, n);
        })
        .sort(function (t, n) {
          var o = r.has(t.tableName),
            a = r.has(n.tableName);
          return o !== a ? (o ? -1 : 1) : c(t.tableName, n.tableName, e);
        });
      return o;
    }
    function u(t, n) {
      return (
        o("WAWebFuzzySearch").fuzzySearch(t.toLowerCase(), n.toLowerCase()) ||
        p(t, n, e)
      );
    }
    function c(t, n, r) {
      if (r.toLowerCase() === t.toLowerCase()) return -1;
      if (r.toLowerCase() === n.toLowerCase()) return 1;
      if (d(r, t)) return -1;
      if (d(r, n)) return 1;
      if (m(r, t)) return -1;
      if (m(r, n)) return 1;
      if (p(r, t, e) || p(r, n, e)) return _(t, n, r);
      var a =
        o("WAWebFuzzySearch").fuzzyMatches(r, n).length -
        o("WAWebFuzzySearch").fuzzyMatches(r, t).length;
      return a === 0 ? t.localeCompare(n, "en", { caseSensitive: !1 }) : a;
    }
    function d(e, t) {
      var n = t.toLowerCase(),
        r = e.toLowerCase();
      return n.startsWith(r);
    }
    function m(e, t) {
      var n = t.toLowerCase(),
        r = e.toLowerCase();
      return n.includes(r);
    }
    function p(e, t, n) {
      return f(e.toLowerCase(), t.toLowerCase()) <= n;
    }
    function _(e, t, n) {
      return (
        f(n.toLowerCase(), e.toLowerCase()) -
        f(n.toLowerCase(), t.toLowerCase())
      );
    }
    function f(e, t) {
      var n = [];
      if (e === "" || t === "") return (t != null ? t : e).length;
      for (var r = 0; r <= t.length; r++) n[r] = [r];
      for (var o = 0; o <= e.length; o++) n[0][o] = o;
      for (var a = 1; a <= t.length; a++)
        for (var i = 1; i <= e.length; i++)
          n[a][i] =
            t[a - 1] === e[i - 1]
              ? n[a - 1][i - 1]
              : Math.min(n[a - 1][i - 1] + 1, n[a][i - 1] + 1, n[a - 1][i] + 1);
      return n[t.length][e.length];
    }
    ((l.WAWebDeveloperToolsSearchTables = s), (l.filter = u), (l.sort = c));
  },
  98,
);
