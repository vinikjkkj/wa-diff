__d(
  "WebBloksCollectionV2",
  [
    "WebBloksBooleanUtils",
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
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
        u = l.getValues(),
        d = u.children,
        m = u.direction,
        p = u.item_spacing,
        _ = u.persist_scroll_position,
        f = u.spacing_after,
        g = u.spacing_before,
        h = o("WebBloksStyle").useStyle(l, i),
        y = h.ref,
        C = h.style,
        b = h.wrapper,
        v = h.wrapperProps,
        S = r("useWebBloksCollectionScrollingElementStyle")(u),
        R = S.scrollingElementClassNames,
        L = S.scrollingElementStyle,
        E = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(l);
      r("useWebBloksCollectionScrollHandlers")(l);
      var k = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        I = k.isRtl;
      r("usePersistentScroll")({
        childCount: (t = d == null ? void 0 : d.length) != null ? t : 0,
        enabled: o("WebBloksBooleanUtils").isTrue(_),
        isRtl: I,
        isVertical: m === "column",
        node: l,
        scrollableElementRef: y,
      });
      var T = r("useWebBloksCollectionStopPropagation")(y),
        D = o("WebBloksCollectionHelpers").getDirectionPropNames(m),
        x = D.crossAxisSize,
        $ = D.mainAxisMarginEnd,
        P = D.mainAxisMarginStart,
        N = D.mainAxisSize,
        M;
      a[0] !== R
        ? ((M = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(R),
          )),
          (a[0] = R),
          (a[1] = M))
        : (M = a[1]);
      var w;
      a[2] !== l
        ? ((w = o("WebBloksCollectionHelpers").getContainerType(l)),
          (a[2] = l),
          (a[3] = w))
        : (w = a[3]);
      var A;
      return (
        a[4] !== L || a[5] !== C || a[6] !== w
          ? ((A = babelHelpers.extends({}, L, C, {
              display: "block",
              pointerEvents: "auto",
              containerType: w,
            })),
            (a[4] = L),
            (a[5] = C),
            (a[6] = w),
            (a[7] = A))
          : (A = a[7]),
        b(
          s.jsx(
            "div",
            babelHelpers.extends({}, v, { ref: y, className: M, style: A }, T, {
              children: s.jsx("div", {
                ref: E,
                style:
                  ((n = {
                    display: "flex",
                    flexDirection: m,
                    gap: o("WebBloksUtils").toPx(p),
                  }),
                  (n[N] = "max-content"),
                  (n[x] = "100%"),
                  (n[P] = g != null ? o("WebBloksUtils").toPx(g) : void 0),
                  (n[$] = f != null ? o("WebBloksUtils").toPx(f) : void 0),
                  n),
                children:
                  d &&
                  d.map(function (e) {
                    return s.jsx(
                      c,
                      { scrollerRef: y, node: e, collectionNode: l },
                      e.clientId,
                    );
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
