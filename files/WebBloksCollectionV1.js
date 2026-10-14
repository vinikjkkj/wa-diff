__d(
  "WebBloksCollectionV1",
  [
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksCollectionScrollRefs",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useWebBloksCollectionScrollHandlers",
    "useWebBloksCollectionScrollingElementStyle",
    "useWebBloksCollectionStickyChildStyle",
    "useWebBloksCollectionStopPropagation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.externalStyle,
        a = e.node,
        i = a.getSubNodes(
          o("WebBloksCollectionMinificationKeys").COLLECTION_CHILDREN,
        ),
        l = o("WebBloksStyle").useStyle(a, n),
        u = l.ref,
        d = l.style,
        m = l.wrapper,
        p = l.wrapperProps,
        _ = r("useWebBloksCollectionScrollingElementStyle")(a),
        f = _.scrollingElementClassNames,
        g = _.scrollingElementStyle,
        h = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(a);
      r("useWebBloksCollectionScrollHandlers")(a);
      var y = r("useWebBloksCollectionStopPropagation")(u),
        C;
      t[0] !== h || t[1] !== u
        ? ((C = function (t) {
            ((h.current = t), (u.current = t));
          }),
          (t[0] = h),
          (t[1] = u),
          (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] !== f
        ? ((b = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(f),
          )),
          (t[3] = f),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] !== g || t[6] !== d
        ? ((v = babelHelpers.extends({}, g, d, {
            display: "block",
            pointerEvents: "auto",
          })),
          (t[5] = g),
          (t[6] = d),
          (t[7] = v))
        : (v = t[7]);
      var S =
          i &&
          i.map(function (e, t) {
            return s.jsx(
              c,
              {
                node: e,
                collectionNode: a,
                isFirstItem: t === 0,
                isLastItem: t === i.length - 1,
              },
              e.clientId,
            );
          }),
        R;
      t[8] !== y ||
      t[9] !== C ||
      t[10] !== b ||
      t[11] !== v ||
      t[12] !== S ||
      t[13] !== p
        ? ((R = s.jsx(
            "div",
            babelHelpers.extends({}, p, { ref: C, className: b, style: v }, y, {
              children: S,
            }),
          )),
          (t[8] = y),
          (t[9] = C),
          (t[10] = b),
          (t[11] = v),
          (t[12] = S),
          (t[13] = p),
          (t[14] = R))
        : (R = t[14]);
      var L;
      return (
        t[15] !== R || t[16] !== m
          ? ((L = m(R)), (t[15] = R), (t[16] = m), (t[17] = L))
          : (L = t[17]),
        L
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.collectionNode,
        a = e.isFirstItem,
        i = e.isLastItem,
        l = e.node,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        u = s.renderNode,
        c;
      t[0] !== n
        ? ((c = n.get(
            o("WebBloksCollectionMinificationKeys").COLLECTION_DIRECTION,
          )),
          (t[0] = n),
          (t[1] = c))
        : (c = t[1]);
      var p = c,
        _ = n.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_ITEM_SPACING,
        ),
        f = n.get(o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP),
        g = n.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_SNAP_STYLE,
        ),
        h = n.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_SPACING_AFTER,
        ),
        y = n.get(
          o("WebBloksCollectionMinificationKeys").COLLECTION_SPACING_BEFORE,
        ),
        C = p === "column",
        b = i
          ? h != null
            ? o("WebBloksUtils").toPx(h)
            : 0
          : o("WebBloksUtils").toPx(_),
        v = a && y != null ? o("WebBloksUtils").toPx(y) : void 0,
        S = o("WebBloksCollectionHelpers").getCollectionCellAlign(l),
        R = o("WebBloksCollectionHelpers").shouldStretchCollectionChild(l),
        L = {};
      C
        ? (v != null && (L.marginTop = v),
          b != null && (L.marginBottom = b),
          R
            ? (L.width = "100%")
            : (o("WebBloksCollectionHelpers").getBaseCrossAxisSize(
                l,
                "width",
              ) == null && (L.width = "fit-content"),
              (S === "center" || S === "end") && (L.marginLeft = "auto"),
              (S === "center" || S === "start") && (L.marginRight = "auto")),
          m(l, "height") && (L.height = "auto"))
        : (v != null && (L.marginLeft = v),
          b != null && (L.marginRight = b),
          (L.display = "inline-flex"),
          (L.verticalAlign = d[S != null ? S : "stretch"]),
          R && (L.height = "100%"),
          m(l, "width") && (L.width = "auto"));
      var E;
      g == null || g === "pager" ? (E = "always") : (E = "normal");
      var k;
      return (
        t[2] !== p || t[3] !== l
          ? ((k = { node: l, direction: p }),
            (t[2] = p),
            (t[3] = l),
            (t[4] = k))
          : (k = t[4]),
        u(
          l,
          babelHelpers.extends(
            {},
            L,
            r("useWebBloksCollectionStickyChildStyle")(k),
            { scrollSnapAlign: f, scrollSnapStop: E },
          ),
        )
      );
    }
    var d = {
      start: "top",
      center: "middle",
      end: "bottom",
      stretch: "bottom",
    };
    function m(e, t) {
      var n,
        r = e.getStyle(o("WebBloksCollectionMinificationKeys").FLEX_STYLE),
        a =
          t === "width"
            ? r == null
              ? void 0
              : r.get(o("WebBloksCollectionMinificationKeys").FLEX_STYLE_WIDTH)
            : r == null
              ? void 0
              : r.get(
                  o("WebBloksCollectionMinificationKeys").FLEX_STYLE_HEIGHT,
                );
      return (n = a == null ? void 0 : a.endsWith("%")) != null ? n : !1;
    }
    l.default = u;
  },
  98,
);
