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
        a,
        i = e.layoutConfig,
        l = e.externalStyle,
        c = e.node,
        d = c.getSubNodes(
          (a = o("WebBloksCollectionMinificationKeys")).COLLECTION_CHILDREN,
        ),
        m = c.get(a.COLLECTION_DIRECTION),
        f = c.get(a.COLLECTION_ITEM_SPACING),
        g = c.get(a.COLLECTION_SPACING_AFTER),
        h = c.get(a.COLLECTION_SPACING_BEFORE),
        y = o("WebBloksStyle").useStyle(c, l),
        C = y.ref,
        b = y.style,
        v = y.wrapper,
        S = y.wrapperProps,
        R = r("useWebBloksCollectionScrollingElementStyle")(c),
        L = R.scrollingElementClassNames,
        E = R.scrollingElementStyle,
        k = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(c);
      r("useWebBloksCollectionScrollHandlers")(c);
      var I = r("useWebBloksCollectionStopPropagation")(C),
        T = o("WebBloksCollectionHelpers").getDirectionPropNames(m),
        D = T.crossAxisSize,
        x = T.mainAxisMarginEnd,
        $ = T.mainAxisMarginStart,
        P = T.mainAxisSize,
        N = u(
          function () {
            return {
              main: o("WebBloksUtils").toPx(
                i.get(
                  o("WebBloksCollectionMinificationKeys")
                    .GRID_CONFIG_MAIN_AXIS_SPAN_SPACING,
                ),
              ),
              cross: o("WebBloksUtils").toPx(
                i.get(
                  o("WebBloksCollectionMinificationKeys")
                    .GRID_CONFIG_CROSS_AXIS_SPAN_SPACING,
                ),
              ),
            };
          },
          [i],
        );
      return v(
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            S,
            {
              ref: C,
              className: o("WebBloksStyle").classNames.apply(
                void 0,
                [o("WebBloksStyle").WebBloksStyles.container].concat(L),
              ),
              style: babelHelpers.extends(
                {},
                E,
                b,
                o("WebBloksUtils").insetToPadding(i.get(a.GRID_CONFIG_PADDING)),
                {
                  display: "block",
                  pointerEvents: "auto",
                  containerType: o(
                    "WebBloksCollectionHelpers",
                  ).getContainerType(c),
                },
              ),
            },
            I,
            {
              children: s.jsx("div", {
                ref: k,
                style: babelHelpers.extends(
                  {
                    display: "grid",
                    flexDirection: m,
                    gap: o("WebBloksUtils").toPx(f),
                  },
                  p(
                    m,
                    (t = i.get(
                      o("WebBloksCollectionMinificationKeys")
                        .GRID_CONFIG_SPAN_COUNT,
                    )) != null
                      ? t
                      : 1,
                    N,
                  ),
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
                        collectionNode: c,
                      },
                      e.clientId,
                    );
                  }),
              }),
            },
          ),
        ),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.externalStyle,
        n = e.node,
        a = n.getSubNode(
          o("WebBloksCollectionMinificationKeys").COLLECTION_LAYOUT_CONFIG,
        );
      return a == null
        ? s.jsx(r("WebBloksCollectionV2"), { node: n, externalStyle: t })
        : s.jsx(c, { node: n, externalStyle: t, layoutConfig: a });
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
        var m = {};
        return (
          (m[d] =
            "span " +
            c.get(
              o("WebBloksCollectionMinificationKeys").GRID_CONFIG_SPAN_COUNT,
            )),
          m
        );
      }
      if (s != null) {
        var p = {};
        return ((p[d] = "span " + s), p);
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
      var t = e.collectionNode,
        n = e.layoutConfig,
        o = e.node,
        a = e.scrollerRef,
        i = babelHelpers.extends(
          {},
          r("useWebBloksCollectionGridAspectRatioProps")(n, t, a),
          m(o, t),
        );
      return s.jsx(r("WebBloksCollectionChildBase"), {
        collectionNode: t,
        node: o,
        scrollerRef: a,
        extraStyles: i,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
