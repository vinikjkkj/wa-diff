__d(
  "WebBloksCollectionGrid_EXPERIMENTAL",
  [
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
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
        n = o("react-compiler-runtime").c(42),
        a = e.layoutConfig,
        i = e.externalStyle,
        l = e.node,
        u = l.getSubNodes("children"),
        c = l.get("direction"),
        d = l.get("item_spacing"),
        m = l.get("spacing_after"),
        f = l.get("spacing_before"),
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
      var E = r("useWebBloksCollectionStopPropagation")(h),
        k = o("WebBloksCollectionHelpers").getDirectionPropNames(c),
        I = k.crossAxisSize,
        T = k.mainAxisMarginEnd,
        D = k.mainAxisMarginStart,
        x = k.mainAxisSize,
        $;
      n[0] !== a
        ? (($ = o("WebBloksUtils").toPx(a.get("main_axis_span_spacing"))),
          (n[0] = a),
          (n[1] = $))
        : ($ = n[1]);
      var P;
      n[2] !== a
        ? ((P = o("WebBloksUtils").toPx(a.get("cross_axis_span_spacing"))),
          (n[2] = a),
          (n[3] = P))
        : (P = n[3]);
      var N;
      n[4] !== $ || n[5] !== P
        ? ((N = { main: $, cross: P }), (n[4] = $), (n[5] = P), (n[6] = N))
        : (N = n[6]);
      var M = N,
        w;
      n[7] !== S
        ? ((w = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(S),
          )),
          (n[7] = S),
          (n[8] = w))
        : (w = n[8]);
      var A;
      n[9] !== a
        ? ((A = o("WebBloksUtils").insetToPadding(a.get("padding"))),
          (n[9] = a),
          (n[10] = A))
        : (A = n[10]);
      var F;
      n[11] !== l
        ? ((F = o("WebBloksCollectionHelpers").getContainerType(l)),
          (n[11] = l),
          (n[12] = F))
        : (F = n[12]);
      var O;
      n[13] !== R || n[14] !== y || n[15] !== A || n[16] !== F
        ? ((O = babelHelpers.extends({}, R, y, A, {
            display: "block",
            pointerEvents: "auto",
            containerType: F,
          })),
          (n[13] = R),
          (n[14] = y),
          (n[15] = A),
          (n[16] = F),
          (n[17] = O))
        : (O = n[17]);
      var B = "grid",
        W = o("WebBloksUtils").toPx(d),
        q = p(c, (t = a.get("span_count")) != null ? t : 1, M),
        U = x,
        V = "max-content",
        H = I,
        G = "100%",
        z = D,
        j = f != null ? o("WebBloksUtils").toPx(f) : void 0,
        K = T,
        Q = m != null ? o("WebBloksUtils").toPx(m) : void 0,
        X;
      if (
        n[18] !== c ||
        n[19] !== q ||
        n[20] !== U ||
        n[21] !== H ||
        n[22] !== z ||
        n[23] !== j ||
        n[24] !== K ||
        n[25] !== Q ||
        n[26] !== W
      ) {
        var Y;
        ((X = babelHelpers.extends(
          { display: B, flexDirection: c, gap: W },
          q,
          ((Y = {}), (Y[U] = V), (Y[H] = G), (Y[z] = j), (Y[K] = Q), Y),
        )),
          (n[18] = c),
          (n[19] = q),
          (n[20] = U),
          (n[21] = H),
          (n[22] = z),
          (n[23] = j),
          (n[24] = K),
          (n[25] = Q),
          (n[26] = W),
          (n[27] = X));
      } else X = n[27];
      var J =
          u &&
          u.map(function (e) {
            return s.jsx(
              _,
              { scrollerRef: h, node: e, layoutConfig: a, collectionNode: l },
              e.clientId,
            );
          }),
        Z;
      n[28] !== L || n[29] !== X || n[30] !== J
        ? ((Z = s.jsx("div", { ref: L, style: X, children: J })),
          (n[28] = L),
          (n[29] = X),
          (n[30] = J),
          (n[31] = Z))
        : (Z = n[31]);
      var ee;
      n[32] !== h ||
      n[33] !== E ||
      n[34] !== Z ||
      n[35] !== w ||
      n[36] !== O ||
      n[37] !== b
        ? ((ee = s.jsx(
            "div",
            babelHelpers.extends({}, b, { ref: h, className: w, style: O }, E, {
              children: Z,
            }),
          )),
          (n[32] = h),
          (n[33] = E),
          (n[34] = Z),
          (n[35] = w),
          (n[36] = O),
          (n[37] = b),
          (n[38] = ee))
        : (ee = n[38]);
      var te;
      return (
        n[39] !== ee || n[40] !== C
          ? ((te = C(ee)), (n[39] = ee), (n[40] = C), (n[41] = te))
          : (te = n[41]),
        te
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.get("layout_config")), (t[0] = a), (t[1] = i))
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
        o = e.getStyle("bk.style.GridCollectionStyle"),
        a = e.getStyle("bk.style.Base"),
        i =
          (n = o == null ? void 0 : o.get("is_full_span")) != null
            ? n
            : a == null
              ? void 0
              : a.get("grid_is_full_span"),
        l =
          (r = o == null ? void 0 : o.get("span_count")) != null
            ? r
            : a == null
              ? void 0
              : a.get("grid_span_count");
      if (i == null && l == null) return {};
      var s = t.get("direction"),
        u = t.get("layout_config"),
        c = s === "column" ? "gridColumn" : "gridRow";
      if (i != null && u != null) {
        var d;
        return ((d = {}), (d[c] = "span " + u.get("span_count")), d);
      }
      if (l != null) {
        var m;
        return ((m = {}), (m[c] = "span " + l), m);
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
