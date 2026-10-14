__d(
  "WebBloksCollectionChildBase",
  [
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksComponentContext",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(9),
        a = t.collectionNode,
        i = t.extraStyles,
        l = t.node,
        s = t.scrollerRef,
        u = o("WebBloksComponentContext").useWebBloksContext(),
        c = u.renderNode,
        d;
      n[0] !== a
        ? ((d = a.get(
            o("WebBloksCollectionMinificationKeys").COLLECTION_DIRECTION,
          )),
          (n[0] = a),
          (n[1] = d))
        : (d = n[1]);
      var m = d,
        p = a.get(o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP),
        _ = a.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP_STYLE,
        ),
        f = o("WebBloksCollectionHelpers").getCollectionCellAlign(l),
        g = f != null ? { alignSelf: e[f] } : {},
        h;
      n[2] !== m || n[3] !== l
        ? ((h = { node: l, direction: m }), (n[2] = m), (n[3] = l), (n[4] = h))
        : (h = n[4]);
      var y;
      n[5] !== a || n[6] !== l || n[7] !== s
        ? ((y = { node: l, collectionNode: a, scrollerRef: s }),
          (n[5] = a),
          (n[6] = l),
          (n[7] = s),
          (n[8] = y))
        : (y = n[8]);
      var C = babelHelpers.extends(
          {
            display: "inline-flex",
            width: "auto",
            height: "auto",
            overflow: "hidden",
          },
          r("useWebBloksCollectionStickyChildStyle")(h),
          r("useWebBloksCollectionChildSizes")(y),
          g,
          i,
        ),
        b;
      return (
        _ == null || _ === "pager" ? (b = "always") : (b = "normal"),
        c(
          l,
          babelHelpers.extends({}, C, {
            scrollSnapAlign: p,
            scrollSnapStop: b,
          }),
        )
      );
    }
    l.default = s;
  },
  98,
);
