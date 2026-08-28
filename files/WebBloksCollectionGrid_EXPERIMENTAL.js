__d(
  "WebBloksCollectionGrid_EXPERIMENTAL",
  [
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksCollectionScrollRefs",
    "WebBloksCollectionV2",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useWebBloksCollectionGridAspectRatioProps",
    "useWebBloksCollectionScrollHandlers",
    "useWebBloksCollectionScrollingElementStyle",
    "useWebBloksCollectionStopPropagation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(42),
        i = e.layoutConfig,
        l = e.externalStyle,
        u = e.node,
        c = u.getSubNodes(
          (n = o("WebBloksCollectionMinificationKeys")).COLLECTION_CHILDREN,
        ),
        d = u.get(n.COLLECTION_DIRECTION),
        m = u.get(n.COLLECTION_ITEM_SPACING),
        f = u.get(n.COLLECTION_SPACING_AFTER),
        g = u.get(n.COLLECTION_SPACING_BEFORE),
        h = o("WebBloksStyle").useStyle(u, l),
        y = h.ref,
        C = h.style,
        b = h.wrapper,
        v = h.wrapperProps,
        S = r("useWebBloksCollectionScrollingElementStyle")(u),
        R = S.scrollingElementClassNames,
        L = S.scrollingElementStyle,
        E = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(u);
      r("useWebBloksCollectionScrollHandlers")(u);
      var k = r("useWebBloksCollectionStopPropagation")(y),
        I = o("WebBloksCollectionHelpers").getDirectionPropNames(d),
        T = I.crossAxisSize,
        D = I.mainAxisMarginEnd,
        x = I.mainAxisMarginStart,
        $ = I.mainAxisSize,
        P;
      a[0] !== i
        ? ((P = o("WebBloksUtils").toPx(
            i.get(
              o("WebBloksCollectionMinificationKeys")
                .GRID_CONFIG_MAIN_AXIS_SPAN_SPACING,
            ),
          )),
          (a[0] = i),
          (a[1] = P))
        : (P = a[1]);
      var N;
      a[2] !== i
        ? ((N = o("WebBloksUtils").toPx(
            i.get(
              o("WebBloksCollectionMinificationKeys")
                .GRID_CONFIG_CROSS_AXIS_SPAN_SPACING,
            ),
          )),
          (a[2] = i),
          (a[3] = N))
        : (N = a[3]);
      var M;
      a[4] !== P || a[5] !== N
        ? ((M = { main: P, cross: N }), (a[4] = P), (a[5] = N), (a[6] = M))
        : (M = a[6]);
      var w = M,
        A;
      a[7] !== R
        ? ((A = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(R),
          )),
          (a[7] = R),
          (a[8] = A))
        : (A = a[8]);
      var F;
      a[9] !== i
        ? ((F = o("WebBloksUtils").insetToPadding(
            i.get(o("WebBloksCollectionMinificationKeys").GRID_CONFIG_PADDING),
          )),
          (a[9] = i),
          (a[10] = F))
        : (F = a[10]);
      var O;
      a[11] !== u
        ? ((O = o("WebBloksCollectionHelpers").getContainerType(u)),
          (a[11] = u),
          (a[12] = O))
        : (O = a[12]);
      var B;
      a[13] !== L || a[14] !== C || a[15] !== F || a[16] !== O
        ? ((B = babelHelpers.extends({}, L, C, F, {
            display: "block",
            pointerEvents: "auto",
            containerType: O,
          })),
          (a[13] = L),
          (a[14] = C),
          (a[15] = F),
          (a[16] = O),
          (a[17] = B))
        : (B = a[17]);
      var W = "grid",
        q = o("WebBloksUtils").toPx(m),
        U = p(
          d,
          (t = i.get(
            o("WebBloksCollectionMinificationKeys").GRID_CONFIG_SPAN_COUNT,
          )) != null
            ? t
            : 1,
          w,
        ),
        V = $,
        H = "max-content",
        G = T,
        z = "100%",
        j = x,
        K = g != null ? o("WebBloksUtils").toPx(g) : void 0,
        Q = D,
        X = f != null ? o("WebBloksUtils").toPx(f) : void 0,
        Y;
      if (
        a[18] !== d ||
        a[19] !== U ||
        a[20] !== V ||
        a[21] !== G ||
        a[22] !== j ||
        a[23] !== K ||
        a[24] !== Q ||
        a[25] !== X ||
        a[26] !== q
      ) {
        var J;
        ((Y = babelHelpers.extends(
          { display: W, flexDirection: d, gap: q },
          U,
          ((J = {}), (J[V] = H), (J[G] = z), (J[j] = K), (J[Q] = X), J),
        )),
          (a[18] = d),
          (a[19] = U),
          (a[20] = V),
          (a[21] = G),
          (a[22] = j),
          (a[23] = K),
          (a[24] = Q),
          (a[25] = X),
          (a[26] = q),
          (a[27] = Y));
      } else Y = a[27];
      var Z =
          c &&
          c.map(function (e) {
            return s.jsx(
              _,
              { scrollerRef: y, node: e, layoutConfig: i, collectionNode: u },
              e.clientId,
            );
          }),
        ee;
      a[28] !== E || a[29] !== Y || a[30] !== Z
        ? ((ee = s.jsx("div", { ref: E, style: Y, children: Z })),
          (a[28] = E),
          (a[29] = Y),
          (a[30] = Z),
          (a[31] = ee))
        : (ee = a[31]);
      var te;
      a[32] !== y ||
      a[33] !== k ||
      a[34] !== ee ||
      a[35] !== A ||
      a[36] !== B ||
      a[37] !== v
        ? ((te = s.jsx(
            "div",
            babelHelpers.extends({}, v, { ref: y, className: A, style: B }, k, {
              children: ee,
            }),
          )),
          (a[32] = y),
          (a[33] = k),
          (a[34] = ee),
          (a[35] = A),
          (a[36] = B),
          (a[37] = v),
          (a[38] = te))
        : (te = a[38]);
      var ne;
      return (
        a[39] !== te || a[40] !== b
          ? ((ne = b(te)), (a[39] = te), (a[40] = b), (a[41] = ne))
          : (ne = a[41]),
        ne
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.getSubNode(
            o("WebBloksCollectionMinificationKeys").COLLECTION_LAYOUT_CONFIG,
          )),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i;
      if (l == null) {
        var u;
        return (
          t[2] !== n || t[3] !== a
            ? ((u = s.jsx(r("WebBloksCollectionV2"), {
                node: a,
                externalStyle: n,
              })),
              (t[2] = n),
              (t[3] = a),
              (t[4] = u))
            : (u = t[4]),
          u
        );
      }
      var d;
      return (
        t[5] !== n || t[6] !== l || t[7] !== a
          ? ((d = s.jsx(c, { node: a, externalStyle: n, layoutConfig: l })),
            (t[5] = n),
            (t[6] = l),
            (t[7] = a),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    function m(e, t) {
      var n,
        r,
        a = e.getStyle(
          o("WebBloksCollectionMinificationKeys").GRID_COLLECTION_STYLE,
        ),
        i = e.getStyle(o("WebBloksCollectionMinificationKeys").BASE_STYLE),
        l =
          (n =
            a == null
              ? void 0
              : a.get(
                  o("WebBloksCollectionMinificationKeys")
                    .GRID_COLLECTION_STYLE_IS_FULL_SPAN,
                )) != null
            ? n
            : i == null
              ? void 0
              : i.get(
                  o("WebBloksCollectionMinificationKeys")
                    .BASE_STYLE_GRID_IS_FULL_SPAN,
                ),
        s =
          (r =
            a == null
              ? void 0
              : a.get(
                  o("WebBloksCollectionMinificationKeys")
                    .GRID_COLLECTION_STYLE_SPAN_COUNT,
                )) != null
            ? r
            : i == null
              ? void 0
              : i.get(
                  o("WebBloksCollectionMinificationKeys")
                    .BASE_STYLE_GRID_SPAN_COUNT,
                );
      if (l == null && s == null) return {};
      var u = t.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_DIRECTION,
        ),
        c = t.getSubNode(
          o("WebBloksCollectionMinificationKeys").COLLECTION_LAYOUT_CONFIG,
        ),
        d = u === "column" ? "gridColumn" : "gridRow";
      if (l != null && c != null) {
        var m;
        return (
          (m = {}),
          (m[d] =
            "span " +
            c.get(
              o("WebBloksCollectionMinificationKeys").GRID_CONFIG_SPAN_COUNT,
            )),
          m
        );
      }
      if (s != null) {
        var p;
        return ((p = {}), (p[d] = "span " + s), p);
      }
      return {};
    }
    function p(e, t, n) {
      return e === "row"
        ? {
            gridTemplateRows: "repeat(" + t + ", 1fr)",
            gridAutoColumns: "max-content",
            gridAutoFlow: "column",
            rowGap: n.cross,
            columnGap: n.main,
          }
        : {
            gridTemplateColumns: "repeat(" + t + ", 1fr)",
            gridAutoRows: "max-content",
            gridAutoFlow: "row",
            rowGap: n.main,
            columnGap: n.cross,
          };
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.collectionNode,
        a = e.layoutConfig,
        i = e.node,
        l = e.scrollerRef,
        u;
      t[0] !== n || t[1] !== i
        ? ((u = m(i, n)), (t[0] = n), (t[1] = i), (t[2] = u))
        : (u = t[2]);
      var c = r("useWebBloksCollectionGridAspectRatioProps")(a, n, l),
        d;
      t[3] !== u || t[4] !== c
        ? ((d = babelHelpers.extends({}, u, c)),
          (t[3] = u),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var p = d,
        _;
      return (
        t[6] !== n || t[7] !== p || t[8] !== i || t[9] !== l
          ? ((_ = s.jsx(r("WebBloksCollectionChildBase"), {
              collectionNode: n,
              node: i,
              scrollerRef: l,
              extraStyles: p,
            })),
            (t[6] = n),
            (t[7] = p),
            (t[8] = i),
            (t[9] = l),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = d;
  },
  98,
);
