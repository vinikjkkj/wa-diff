__d(
  "WebBloksUpdateTraversal",
  ["WebBloksConstants", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, r) {
      var a = n.apply(t),
        i = !!a.get(o("WebBloksConstants").ON_BIND),
        l = r[a.styleId];
      if (l) {
        if (l.subnodes)
          for (var s of l.subnodes) {
            var u = a.getSubNode(s);
            if (u instanceof o("WebBloksModel").WebBloksModel) {
              var c = e(u, n, r);
              (c !== u && (a === t && (a = t.makeCopy()), a.set(s, c)),
                (i =
                  i ||
                  c.get(o("WebBloksConstants").DESCENDANT_HAS_BIND) !== !1));
            }
          }
        if (l.plural_subnodes)
          for (var d of l.plural_subnodes) {
            for (
              var m = a.getChildren_DEPRECATED(d), p = m, _ = 0;
              _ < m.length;
              _++
            ) {
              var f = m[_];
              if (f) {
                var g = e(f, n, r);
                (g !== f && (p === m && (p = m.slice()), (p[_] = g)),
                  (i =
                    i ||
                    g.get(o("WebBloksConstants").DESCENDANT_HAS_BIND) !== !1));
              }
            }
            p !== m && (a === t && (a = t.makeCopy()), a.set(d, p));
          }
      }
      return (
        a !== t && a.set(o("WebBloksConstants").DESCENDANT_HAS_BIND, i),
        n.onUpdatesApplied(a),
        a
      );
    }
    l.runUpdateTraversal = e;
  },
  98,
);
