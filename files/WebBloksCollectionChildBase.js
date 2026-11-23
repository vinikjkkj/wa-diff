__d(
  "WebBloksCollectionChildBase",
  [
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksComponentContext",
    "useWebBloksCollectionChildSizes",
    "useWebBloksCollectionStickyChildStyle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
    };
    function s(t) {
      var n = t.collectionNode,
        a = t.extraStyles,
        i = t.node,
        l = t.scrollerRef,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        u = s.renderNode,
        c = n.get(o("WebBloksCollectionMinificationKeys").COLLECTION_DIRECTION),
        d = n.get(o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP),
        m = n.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP_STYLE,
        ),
        p = o("WebBloksCollectionHelpers").getCollectionCellAlign(i),
        _ = p != null ? { alignSelf: e[p] } : {},
        f = babelHelpers.extends(
          {
            display: "inline-flex",
            width: "auto",
            height: "auto",
            overflow: "hidden",
          },
          r("useWebBloksCollectionStickyChildStyle")({ node: i, direction: c }),
          r("useWebBloksCollectionChildSizes")({
            node: i,
            collectionNode: n,
            scrollerRef: l,
          }),
          _,
          a,
        ),
        g;
      return (
        m == null || m === "pager" ? (g = "always") : (g = "normal"),
        u(
          i,
          babelHelpers.extends({}, f, {
            scrollSnapAlign: d,
            scrollSnapStop: g,
          }),
        )
      );
    }
    l.default = s;
  },
  98,
);
