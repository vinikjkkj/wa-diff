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
      var t = o("react-compiler-runtime").c(4),
        n = e.collectionNode,
        a = e.extraStyles,
        i = e.node,
        l = e.scrollerRef,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        u = s.renderNode,
        c = n.getValues(),
        d = c.direction,
        m = c.snap,
        p = c.snap_style,
        _;
      t[0] !== n || t[1] !== i || t[2] !== l
        ? ((_ = { node: i, collectionNode: n, scrollerRef: l }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = _))
        : (_ = t[3]);
      var f = babelHelpers.extends(
          {
            display: "inline-flex",
            width: "auto",
            height: "auto",
            overflow: "hidden",
          },
          r("useWebBloksCollectionStickyChildStyle")({ node: i, direction: d }),
          r("useWebBloksCollectionChildSizes")(_),
          a,
        ),
        g;
      return (
        p == null || p === "pager" ? (g = "always") : (g = "normal"),
        u(
          i,
          babelHelpers.extends({}, f, {
            scrollSnapAlign: m,
            scrollSnapStop: g,
          }),
        )
      );
    }
    l.default = e;
  },
  98,
);
