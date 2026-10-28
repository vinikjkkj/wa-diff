__d(
  "WAWebDeveloperToolsDBViewerPinnedQueries",
  [
    "WALogger",
    "WAWebDeveloperToolsArrayUtils",
    "WAWebLocalStorage",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "wa_devtools_pinned_queries",
      c = 80;
    function d() {
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(u);
        if (t != null) {
          var n = JSON.parse(t);
          if (Array.isArray(n)) return n;
        }
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[db-viewer] Failed to parse pinned queries from localStorage",
            ])),
        );
      }
      return [];
    }
    function m(e) {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(u, JSON.stringify(e));
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[db-viewer] Failed to persist pinned queries to localStorage",
            ])),
        );
      }
    }
    function p(e) {
      var t = d(),
        n = [e].concat(t);
      return (m(n), n);
    }
    function _(e) {
      var t = e.columns,
        n = e.conditions,
        r = e.filters,
        o = e.groupByColumn,
        a = e.tableName;
      return {
        id: crypto.randomUUID(),
        tableName: a,
        columns: t,
        filters: r,
        conditions: n,
        groupByColumn: o != null ? o : null,
        label: y({
          columns: t,
          conditions: n,
          filters: r,
          groupByColumn: o,
          tableName: a,
        }),
        pinnedAt: Date.now(),
      };
    }
    function f(e) {
      var t = d(),
        n = t.filter(function (t) {
          return t.id !== e;
        });
      return (m(n), n);
    }
    function g(e) {
      return o("WAWebDeveloperToolsArrayUtils").isNonEmptyArray(e)
        ? e.length + " filter" + (e.length > 1 ? "s" : "")
        : "";
    }
    function h(e) {
      var t = e[0].conditions.length,
        n = e[1].conditions.length;
      if (t === 0 && n === 0) return "";
      var r = [];
      return (
        t > 0 && r.push("All(" + t + ")"),
        n > 0 && r.push("Any(" + n + ")"),
        "query: " + r.join(", ")
      );
    }
    function y(e) {
      var t = e.columns,
        n = e.conditions,
        o = e.filters,
        a = e.groupByColumn,
        i = e.tableName,
        l = r("countWhere")(t, function (e) {
          return e.selected;
        }),
        s = t.length,
        u = [i];
      l < s && u.push(l + "/" + s + " fields");
      var d = g(o);
      d !== "" && u.push(d);
      var m = h(n);
      (m !== "" && u.push(m), a != null && u.push("group by: " + a));
      var p = u.join(" | ");
      return p.length > c ? p.slice(0, c - 1) + "\u2026" : p;
    }
    ((l.loadPinnedQueries = d),
      (l.addPinnedQuery = p),
      (l.createPinnedQuery = _),
      (l.removePinnedQuery = f));
  },
  98,
);
