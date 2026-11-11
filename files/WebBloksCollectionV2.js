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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(8),
        i = e.externalStyle,
        l = e.node,
        u = l.getSubNodes(
          (n = o("WebBloksCollectionMinificationKeys")).COLLECTION_CHILDREN,
        ),
        d = l.get(n.COLLECTION_DIRECTION),
        m = l.get(n.COLLECTION_ITEM_SPACING),
        p = l.get(n.COLLECTION_PERSIST_SCROLL_POSITION),
        _ = l.get(n.COLLECTION_SPACING_AFTER),
        f = l.get(n.COLLECTION_SPACING_BEFORE),
        g = o("WebBloksStyle").useStyle(l, i),
        h = g.ref,
        y = g.style,
        C = g.wrapper,
        b = g.wrapperProps,
        v = r("useWebBloksCollectionScrollingElementStyle")(l),
        S = v.scrollingElementClassNames,
        R = v.scrollingElementStyle,
        L = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(l);
      r("useWebBloksCollectionScrollHandlers")(l);
      var E = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        k = E.isRtl;
      r("usePersistentScroll")({
        childCount: (t = u == null ? void 0 : u.length) != null ? t : 0,
        enabled: o("WebBloksBooleanUtils").isTrue(p),
        isRtl: k,
        isVertical: d === "column",
        node: l,
        scrollableElementRef: h,
      });
      var I = function (t, n) {
          return s.jsx(c, { scrollerRef: h, node: t, collectionNode: l }, n);
        },
        T = r("useWebBloksCollectionStopPropagation")(h),
        D = o("WebBloksCollectionHelpers").getDirectionPropNames(d),
        x = D.crossAxisSize,
        $ = D.mainAxisMarginEnd,
        P = D.mainAxisMarginStart,
        N = D.mainAxisSize,
        M = {};
      ((M[N] = "max-content"),
        (M[x] = "100%"),
        (M[P] = f != null ? o("WebBloksUtils").toPx(f) : void 0),
        (M[$] = _ != null ? o("WebBloksUtils").toPx(_) : void 0));
      var w;
      a[0] !== S
        ? ((w = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(S),
          )),
          (a[0] = S),
          (a[1] = w))
        : (w = a[1]);
      var A;
      a[2] !== l
        ? ((A = o("WebBloksCollectionHelpers").getContainerType(l)),
          (a[2] = l),
          (a[3] = A))
        : (A = a[3]);
      var F;
      return (
        a[4] !== R || a[5] !== y || a[6] !== A
          ? ((F = babelHelpers.extends({}, R, y, {
              display: "block",
              pointerEvents: "auto",
              containerType: A,
            })),
            (a[4] = R),
            (a[5] = y),
            (a[6] = A),
            (a[7] = F))
          : (F = a[7]),
        C(
          s.jsx(
            "div",
            babelHelpers.extends({}, b, { ref: h, className: w, style: F }, T, {
              children: s.jsx("div", {
                ref: L,
                style: babelHelpers.extends(
                  {
                    display: "flex",
                    flexDirection: d,
                    gap: o("WebBloksUtils").toPx(m),
                  },
                  M,
                ),
                children: o("WebBloksBooleanUtils").isTrue(p)
                  ? s.jsx(r("WebBloksCollectionPagingAnchor"), {
                      containerRef: L,
                      isRtl: k,
                      isVertical: d === "column",
                      items: u != null ? u : [],
                      renderItem: I,
                      scrollerRef: h,
                    })
                  : u &&
                    u.map(function (e) {
                      return I(e, e.clientId);
                    }),
              }),
            }),
          ),
        )
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.collectionNode,
        a = e.node,
        i = e.scrollerRef,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = s.jsx(r("WebBloksCollectionChildBase"), {
              collectionNode: n,
              node: a,
              scrollerRef: i,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = u;
  },
  98,
);
