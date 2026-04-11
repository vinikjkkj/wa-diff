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
        n,
        a = o("react-compiler-runtime").c(18),
        i = e.layoutConfig,
        l = e.externalStyle,
        u = e.node,
        c = u.getValues(),
        d = c.children,
        m = c.direction,
        f = c.item_spacing,
        g = c.spacing_after,
        h = c.spacing_before,
        y = o("WebBloksStyle").useStyle(u, l),
        C = y.ref,
        b = y.style,
        v = y.wrapper,
        S = y.wrapperProps,
        R = r("useWebBloksCollectionScrollingElementStyle")(c),
        L = R.scrollingElementClassNames,
        E = R.scrollingElementStyle,
        k = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(u);
      r("useWebBloksCollectionScrollHandlers")(u);
      var I = r("useWebBloksCollectionStopPropagation")(C),
        T = o("WebBloksCollectionHelpers").getDirectionPropNames(m),
        D = T.crossAxisSize,
        x = T.mainAxisMarginEnd,
        $ = T.mainAxisMarginStart,
        P = T.mainAxisSize,
        N;
      a[0] !== i.main_axis_span_spacing
        ? ((N = o("WebBloksUtils").toPx(i.main_axis_span_spacing)),
          (a[0] = i.main_axis_span_spacing),
          (a[1] = N))
        : (N = a[1]);
      var M;
      a[2] !== i.cross_axis_span_spacing
        ? ((M = o("WebBloksUtils").toPx(i.cross_axis_span_spacing)),
          (a[2] = i.cross_axis_span_spacing),
          (a[3] = M))
        : (M = a[3]);
      var w;
      a[4] !== N || a[5] !== M
        ? ((w = { main: N, cross: M }), (a[4] = N), (a[5] = M), (a[6] = w))
        : (w = a[6]);
      var A = w,
        F;
      a[7] !== L
        ? ((F = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(L),
          )),
          (a[7] = L),
          (a[8] = F))
        : (F = a[8]);
      var O;
      a[9] !== i.padding
        ? ((O = o("WebBloksUtils").insetToPadding(i.padding)),
          (a[9] = i.padding),
          (a[10] = O))
        : (O = a[10]);
      var B;
      a[11] !== u
        ? ((B = o("WebBloksCollectionHelpers").getContainerType(u)),
          (a[11] = u),
          (a[12] = B))
        : (B = a[12]);
      var W;
      return (
        a[13] !== E || a[14] !== b || a[15] !== O || a[16] !== B
          ? ((W = babelHelpers.extends({}, E, b, O, {
              display: "block",
              pointerEvents: "auto",
              containerType: B,
            })),
            (a[13] = E),
            (a[14] = b),
            (a[15] = O),
            (a[16] = B),
            (a[17] = W))
          : (W = a[17]),
        v(
          s.jsx(
            "div",
            babelHelpers.extends({}, S, { ref: C, className: F, style: W }, I, {
              children: s.jsx("div", {
                ref: k,
                style: babelHelpers.extends(
                  {
                    display: "grid",
                    flexDirection: m,
                    gap: o("WebBloksUtils").toPx(f),
                  },
                  p(m, (t = i.span_count) != null ? t : 1, A),
                  ((n = {}),
                  (n[P] = "max-content"),
                  (n[D] = "100%"),
                  (n[$] = h != null ? o("WebBloksUtils").toPx(h) : void 0),
                  (n[x] = g != null ? o("WebBloksUtils").toPx(g) : void 0),
                  n),
                ),
                children:
                  d &&
                  d.map(function (e) {
                    return s.jsx(
                      _,
                      {
                        scrollerRef: C,
                        node: e,
                        layoutConfig: i,
                        collectionNode: u,
                      },
                      e.clientId,
                    );
                  }),
              }),
            }),
          ),
        )
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.externalStyle,
        a = e.node,
        i;
      if (t[0] !== a) {
        var l = a.getValues(),
          u = l.layout_config;
        ((i = u == null ? void 0 : u.getValues()), (t[0] = a), (t[1] = i));
      } else i = t[1];
      var d = i;
      if (!d) {
        var m;
        return (
          t[2] !== n || t[3] !== a
            ? ((m = s.jsx(r("WebBloksCollectionV2"), {
                node: a,
                externalStyle: n,
              })),
              (t[2] = n),
              (t[3] = a),
              (t[4] = m))
            : (m = t[4]),
          m
        );
      }
      var p;
      return (
        t[5] !== n || t[6] !== d || t[7] !== a
          ? ((p = s.jsx(c, { node: a, externalStyle: n, layoutConfig: d })),
            (t[5] = n),
            (t[6] = d),
            (t[7] = a),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function m(e, t) {
      var n,
        r,
        o,
        a,
        i =
          (n = e.getStyle("bk.style.GridCollectionStyle")) == null
            ? void 0
            : n.getValues(),
        l = (r = e.getStyle("bk.style.Base")) == null ? void 0 : r.getValues(),
        s =
          (o = i == null ? void 0 : i.is_full_span) != null
            ? o
            : l == null
              ? void 0
              : l.grid_is_full_span,
        u =
          (a = i == null ? void 0 : i.span_count) != null
            ? a
            : l == null
              ? void 0
              : l.grid_span_count;
      if (s == null && u == null) return {};
      var c = t.getValues(),
        d = c.direction,
        m = c.layout_config,
        p = d === "column" ? "gridColumn" : "gridRow",
        _ = m == null ? void 0 : m.getValues();
      if (s != null && _) {
        var f;
        return ((f = {}), (f[p] = "span " + _.span_count), f);
      }
      if (u != null) {
        var g;
        return ((g = {}), (g[p] = "span " + u), g);
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
