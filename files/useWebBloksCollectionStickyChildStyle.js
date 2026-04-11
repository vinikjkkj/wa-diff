__d(
  "useWebBloksCollectionStickyChildStyle",
  ["WebBloksCollectionHelpers", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a = o("react-compiler-runtime").c(6),
        i = e.direction,
        l = e.node,
        s = l.getStyle("collection"),
        u =
          (t =
            s == null || (n = s.getValues().sticky_item_config) == null
              ? void 0
              : n.getValues()) != null
            ? t
            : (r = l.getStyle("bk.style.Base")) == null ||
                (r = r.getValues().collection_sticky_item_config) == null
              ? void 0
              : r.getValues();
      if (u == null) {
        var c;
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = {}), (a[0] = c))
            : (c = a[0]),
          c
        );
      }
      var d = u.is_sticky,
        m = u.position;
      if (d !== !0 || m == null) {
        var p;
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = {}), (a[1] = p))
            : (p = a[1]),
          p
        );
      }
      var _;
      a[2] !== i
        ? ((_ = o("WebBloksCollectionHelpers").getDirectionPropNames(i)),
          (a[2] = i),
          (a[3] = _))
        : (_ = a[3]);
      var f = _,
        g = f[m],
        h;
      if (a[4] !== g) {
        var y;
        ((h = ((y = { position: "sticky", zIndex: 1 }), (y[g] = 0), y)),
          (a[4] = g),
          (a[5] = h));
      } else h = a[5];
      return h;
    }
    l.default = e;
  },
  98,
);
