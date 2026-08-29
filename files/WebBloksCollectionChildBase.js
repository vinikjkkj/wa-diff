__d(
  "WebBloksCollectionChildBase",
  [
    "WebBloksComponentContext",
    "react-compiler-runtime",
    "useWebBloksCollectionChildSizes",
    "useWebBloksCollectionStickyChildStyle",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.collectionNode,
        a = e.extraStyles,
        i = e.node,
        l = e.scrollerRef,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        u = s.renderNode,
        c;
      t[0] !== n
        ? ((c = n.get("direction")), (t[0] = n), (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = n.get("snap"),
        p = n.get("snap_style"),
        _;
      t[2] !== d || t[3] !== i
        ? ((_ = { node: i, direction: d }), (t[2] = d), (t[3] = i), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== n || t[6] !== i || t[7] !== l
        ? ((f = { node: i, collectionNode: n, scrollerRef: l }),
          (t[5] = n),
          (t[6] = i),
          (t[7] = l),
          (t[8] = f))
        : (f = t[8]);
      var g = babelHelpers.extends(
          {
            display: "inline-flex",
            width: "auto",
            height: "auto",
            overflow: "hidden",
          },
          r("useWebBloksCollectionStickyChildStyle")(_),
          r("useWebBloksCollectionChildSizes")(f),
          a,
        ),
        h;
      return (
        p == null || p === "pager" ? (h = "always") : (h = "normal"),
        u(
          i,
          babelHelpers.extends({}, g, {
            scrollSnapAlign: m,
            scrollSnapStop: h,
          }),
        )
      );
    }
    l.default = e;
  },
  98,
);
