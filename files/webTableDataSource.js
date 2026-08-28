__d(
  "webTableDataSource",
  [
    "WebTableLoadingItem",
    "nullthrows",
    "webTableIndexPath",
    "webTableIndexPathFirstChild",
    "webTableIndexPathGetDepth",
    "webTableIndexPathGetParent",
    "webTableIndexPathIncrement",
    "webTableIndexPathPositionInParent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i = [],
        l = new Map(),
        u = new Map(),
        c = new Map(),
        d = new Map(),
        m = [],
        p = (n = (a = e[0]) == null ? void 0 : a.depth) != null ? n : 0,
        _ = o("webTableIndexPath").OUT_OF_BOUNDS,
        f = [];
      e.forEach(function (e, n) {
        var a = e.depth,
          g = e.item,
          h = p < a,
          y = p > a,
          C = r("webTableIndexPathGetDepth")(_);
        f[C] = _;
        var b = a - p,
          v = C + b,
          S = h
            ? r("webTableIndexPathFirstChild")(_)
            : y
              ? r("webTableIndexPathIncrement")(f[v])
              : r("webTableIndexPathIncrement")(_);
        (i.push(S), l.set(S, g));
        var R = s(g, S, t.getStableUniqueID);
        (m.push(R),
          o("WebTableLoadingItem").isSourceItem(g) &&
            (c.set(R, n), d.set(R, g)),
          u.set(
            r("webTableIndexPathGetParent")(S),
            r("webTableIndexPathPositionInParent")(S) + 1,
          ),
          (p = a),
          (_ = S));
      });
      var g = function (t) {
          return r("nullthrows")(
            l.get(t),
            "[WebTable] Attempted to access an unset index path: " +
              t.toString(),
          );
        },
        h = function (n) {
          return s(g(n), n, t.getStableUniqueID);
        },
        y = function () {
          return m;
        },
        C = function (t) {
          var e;
          return (e = u.get(r("webTableIndexPathGetParent")(t))) != null
            ? e
            : 0;
        },
        b = function (t) {
          var e;
          return (e = c.get(t)) != null ? e : -1;
        },
        v,
        S = function () {
          return (v == null && (v = Array.from(d.values())), v);
        },
        R = function (t) {
          var e;
          return (e = d.get(t)) != null ? e : null;
        },
        L = function () {
          return d.size;
        };
      return Object.freeze({
        getItemForIndexPath: g,
        getKeyForIndexPath: h,
        getParentSizeForIndexPath: C,
        getRenderIndexPaths: function () {
          return i;
        },
        getRenderItems: S,
        getRenderKeys: y,
        getRowIndexForKey: b,
        getItemForKey: R,
        options: t,
        getSize: L,
      });
    }
    function s(e, t, n) {
      var r;
      return o("WebTableLoadingItem").isSourceItem(e) && (r = n(e)) != null
        ? r
        : t;
    }
    l.default = e;
  },
  98,
);
