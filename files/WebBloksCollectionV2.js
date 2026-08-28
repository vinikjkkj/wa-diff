__d(
  "WebBloksCollectionV2",
  [
    "WebBloksBooleanUtils",
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
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
        a = o("react-compiler-runtime").c(31),
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
      var I = r("useWebBloksCollectionStopPropagation")(h),
        T = o("WebBloksCollectionHelpers").getDirectionPropNames(d),
        D = T.crossAxisSize,
        x = T.mainAxisMarginEnd,
        $ = T.mainAxisMarginStart,
        P = T.mainAxisSize,
        N;
      a[0] !== S
        ? ((N = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(S),
          )),
          (a[0] = S),
          (a[1] = N))
        : (N = a[1]);
      var M;
      a[2] !== l
        ? ((M = o("WebBloksCollectionHelpers").getContainerType(l)),
          (a[2] = l),
          (a[3] = M))
        : (M = a[3]);
      var w;
      a[4] !== R || a[5] !== y || a[6] !== M
        ? ((w = babelHelpers.extends({}, R, y, {
            display: "block",
            pointerEvents: "auto",
            containerType: M,
          })),
          (a[4] = R),
          (a[5] = y),
          (a[6] = M),
          (a[7] = w))
        : (w = a[7]);
      var A = o("WebBloksUtils").toPx(m),
        F = P,
        O = D,
        B = $,
        W = f != null ? o("WebBloksUtils").toPx(f) : void 0,
        q = x,
        U = _ != null ? o("WebBloksUtils").toPx(_) : void 0,
        V;
      if (
        a[8] !== d ||
        a[9] !== U ||
        a[10] !== A ||
        a[11] !== F ||
        a[12] !== O ||
        a[13] !== B ||
        a[14] !== W ||
        a[15] !== q
      ) {
        var H;
        ((V =
          ((H = { display: "flex", flexDirection: d, gap: A }),
          (H[F] = "max-content"),
          (H[O] = "100%"),
          (H[B] = W),
          (H[q] = U),
          H)),
          (a[8] = d),
          (a[9] = U),
          (a[10] = A),
          (a[11] = F),
          (a[12] = O),
          (a[13] = B),
          (a[14] = W),
          (a[15] = q),
          (a[16] = V));
      } else V = a[16];
      var G =
          u &&
          u.map(function (e) {
            return s.jsx(
              c,
              { scrollerRef: h, node: e, collectionNode: l },
              e.clientId,
            );
          }),
        z;
      a[17] !== L || a[18] !== V || a[19] !== G
        ? ((z = s.jsx("div", { ref: L, style: V, children: G })),
          (a[17] = L),
          (a[18] = V),
          (a[19] = G),
          (a[20] = z))
        : (z = a[20]);
      var j;
      a[21] !== h ||
      a[22] !== I ||
      a[23] !== N ||
      a[24] !== z ||
      a[25] !== w ||
      a[26] !== b
        ? ((j = s.jsx(
            "div",
            babelHelpers.extends({}, b, { ref: h, className: N, style: w }, I, {
              children: z,
            }),
          )),
          (a[21] = h),
          (a[22] = I),
          (a[23] = N),
          (a[24] = z),
          (a[25] = w),
          (a[26] = b),
          (a[27] = j))
        : (j = a[27]);
      var K;
      return (
        a[28] !== j || a[29] !== C
          ? ((K = C(j)), (a[28] = j), (a[29] = C), (a[30] = K))
          : (K = a[30]),
        K
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
