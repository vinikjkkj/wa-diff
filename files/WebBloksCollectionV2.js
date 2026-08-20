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
        n = o("react-compiler-runtime").c(31),
        a = e.externalStyle,
        i = e.node,
        l = i.getSubNodes("children"),
        u = i.get("direction"),
        d = i.get("item_spacing"),
        m = i.get("persist_scroll_position"),
        p = i.get("spacing_after"),
        _ = i.get("spacing_before"),
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
      var k = r("useWebBloksCollectionStopPropagation")(g),
        I = o("WebBloksCollectionHelpers").getDirectionPropNames(u),
        T = I.crossAxisSize,
        D = I.mainAxisMarginEnd,
        x = I.mainAxisMarginStart,
        $ = I.mainAxisSize,
        P;
      n[0] !== v
        ? ((P = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(v),
          )),
          (n[0] = v),
          (n[1] = P))
        : (P = n[1]);
      var N;
      n[2] !== i
        ? ((N = o("WebBloksCollectionHelpers").getContainerType(i)),
          (n[2] = i),
          (n[3] = N))
        : (N = n[3]);
      var M;
      n[4] !== S || n[5] !== h || n[6] !== N
        ? ((M = babelHelpers.extends({}, S, h, {
            display: "block",
            pointerEvents: "auto",
            containerType: N,
          })),
          (n[4] = S),
          (n[5] = h),
          (n[6] = N),
          (n[7] = M))
        : (M = n[7]);
      var w = o("WebBloksUtils").toPx(d),
        A = $,
        F = T,
        O = x,
        B = _ != null ? o("WebBloksUtils").toPx(_) : void 0,
        W = D,
        q = p != null ? o("WebBloksUtils").toPx(p) : void 0,
        U;
      if (
        n[8] !== u ||
        n[9] !== q ||
        n[10] !== w ||
        n[11] !== A ||
        n[12] !== F ||
        n[13] !== O ||
        n[14] !== B ||
        n[15] !== W
      ) {
        var V;
        ((U =
          ((V = { display: "flex", flexDirection: u, gap: w }),
          (V[A] = "max-content"),
          (V[F] = "100%"),
          (V[O] = B),
          (V[W] = q),
          V)),
          (n[8] = u),
          (n[9] = q),
          (n[10] = w),
          (n[11] = A),
          (n[12] = F),
          (n[13] = O),
          (n[14] = B),
          (n[15] = W),
          (n[16] = U));
      } else U = n[16];
      var H =
          l &&
          l.map(function (e) {
            return s.jsx(
              c,
              { scrollerRef: g, node: e, collectionNode: i },
              e.clientId,
            );
          }),
        G;
      n[17] !== R || n[18] !== U || n[19] !== H
        ? ((G = s.jsx("div", { ref: R, style: U, children: H })),
          (n[17] = R),
          (n[18] = U),
          (n[19] = H),
          (n[20] = G))
        : (G = n[20]);
      var z;
      n[21] !== g ||
      n[22] !== k ||
      n[23] !== P ||
      n[24] !== G ||
      n[25] !== M ||
      n[26] !== C
        ? ((z = s.jsx(
            "div",
            babelHelpers.extends({}, C, { ref: g, className: P, style: M }, k, {
              children: G,
            }),
          )),
          (n[21] = g),
          (n[22] = k),
          (n[23] = P),
          (n[24] = G),
          (n[25] = M),
          (n[26] = C),
          (n[27] = z))
        : (z = n[27]);
      var j;
      return (
        n[28] !== z || n[29] !== y
          ? ((j = y(z)), (n[28] = z), (n[29] = y), (n[30] = j))
          : (j = n[30]),
        j
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
