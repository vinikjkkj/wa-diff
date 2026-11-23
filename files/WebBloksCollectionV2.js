__d(
  "WebBloksCollectionV2",
  [
    "WebBloksBooleanUtils",
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksCollectionPagingAnchor",
    "WebBloksCollectionScrollRefs",
    "WebBloksEnvironmentContext",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "usePersistentScroll",
    "useWebBloksCollectionScrollHandlers",
    "useWebBloksCollectionScrollingElementStyle",
    "useWebBloksCollectionStopPropagation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = e.externalStyle,
        i = e.node,
        l = i.getSubNodes(
          (n = o("WebBloksCollectionMinificationKeys")).COLLECTION_CHILDREN,
        ),
        u = i.get(n.COLLECTION_DIRECTION),
        d = i.get(n.COLLECTION_ITEM_SPACING),
        m = i.get(n.COLLECTION_PERSIST_SCROLL_POSITION),
        p = i.get(n.COLLECTION_SPACING_AFTER),
        _ = i.get(n.COLLECTION_SPACING_BEFORE),
        f = o("WebBloksStyle").useStyle(i, a),
        g = f.ref,
        h = f.style,
        y = f.wrapper,
        C = f.wrapperProps,
        b = r("useWebBloksCollectionScrollingElementStyle")(i),
        v = b.scrollingElementClassNames,
        S = b.scrollingElementStyle,
        R = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(i);
      r("useWebBloksCollectionScrollHandlers")(i);
      var L = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        E = L.isRtl;
      r("usePersistentScroll")({
        childCount: (t = l == null ? void 0 : l.length) != null ? t : 0,
        enabled: o("WebBloksBooleanUtils").isTrue(m),
        isRtl: E,
        isVertical: u === "column",
        node: i,
        scrollableElementRef: g,
      });
      var k = function (t, n) {
          return s.jsx(c, { scrollerRef: g, node: t, collectionNode: i }, n);
        },
        I = r("useWebBloksCollectionStopPropagation")(g),
        T = o("WebBloksCollectionHelpers").getDirectionPropNames(u),
        D = T.crossAxisSize,
        x = T.mainAxisMarginEnd,
        $ = T.mainAxisMarginStart,
        P = T.mainAxisSize,
        N = {};
      return (
        (N[P] = "max-content"),
        (N[D] = "100%"),
        (N[$] = _ != null ? o("WebBloksUtils").toPx(_) : void 0),
        (N[x] = p != null ? o("WebBloksUtils").toPx(p) : void 0),
        y(
          s.jsx(
            "div",
            babelHelpers.extends(
              {},
              C,
              {
                ref: g,
                className: o("WebBloksStyle").classNames.apply(
                  void 0,
                  [o("WebBloksStyle").WebBloksStyles.container].concat(v),
                ),
                style: babelHelpers.extends({}, S, h, {
                  display: "block",
                  pointerEvents: "auto",
                  containerType: o(
                    "WebBloksCollectionHelpers",
                  ).getContainerType(i),
                }),
              },
              I,
              {
                children: s.jsx("div", {
                  ref: R,
                  style: babelHelpers.extends(
                    {
                      display: "flex",
                      flexDirection: u,
                      gap: o("WebBloksUtils").toPx(d),
                    },
                    N,
                  ),
                  children: o("WebBloksBooleanUtils").isTrue(m)
                    ? s.jsx(r("WebBloksCollectionPagingAnchor"), {
                        containerRef: R,
                        isRtl: E,
                        isVertical: u === "column",
                        items: l != null ? l : [],
                        renderItem: k,
                        scrollerRef: g,
                      })
                    : l &&
                      l.map(function (e) {
                        return k(e, e.clientId);
                      }),
                }),
              },
            ),
          ),
        )
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.collectionNode,
        n = e.node,
        o = e.scrollerRef;
      return s.jsx(r("WebBloksCollectionChildBase"), {
        collectionNode: t,
        node: n,
        scrollerRef: o,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
