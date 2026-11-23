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
    "useWebBloksCollectionScrollHandlers",
    "useWebBloksCollectionScrollingElementStyle",
    "useWebBloksCollectionStickyChildStyle",
    "useWebBloksCollectionStopPropagation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.externalStyle,
        n = e.node,
        a = n.getSubNodes(
          o("WebBloksCollectionMinificationKeys").COLLECTION_CHILDREN,
        ),
        i = o("WebBloksStyle").useStyle(n, t),
        l = i.ref,
        u = i.style,
        d = i.wrapper,
        m = i.wrapperProps,
        p = r("useWebBloksCollectionScrollingElementStyle")(n),
        _ = p.scrollingElementClassNames,
        f = p.scrollingElementStyle,
        g = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(n);
      r("useWebBloksCollectionScrollHandlers")(n);
      var h = r("useWebBloksCollectionStopPropagation")(l);
      return d(
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            m,
            {
              ref: function (t) {
                ((g.current = t), (l.current = t));
              },
              className: o("WebBloksStyle").classNames.apply(
                void 0,
                [o("WebBloksStyle").WebBloksStyles.container].concat(_),
              ),
              style: babelHelpers.extends({}, f, u, {
                display: "block",
                pointerEvents: "auto",
              }),
            },
            h,
            {
              children:
                a &&
                a.map(function (e, t) {
                  return s.jsx(
                    c,
                    {
                      node: e,
                      collectionNode: n,
                      isFirstItem: t === 0,
                      isLastItem: t === a.length - 1,
                    },
                    e.clientId,
                  );
                }),
            },
          ),
        ),
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t,
        n = e.collectionNode,
        a = e.isFirstItem,
        i = e.isLastItem,
        l = e.node,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        u = s.renderNode,
        c = n.get(
          (t = o("WebBloksCollectionMinificationKeys")).COLLECTION_DIRECTION,
        ),
        p = n.get(t.COLLECTION_ITEM_SPACING),
        _ = n.get(t.COLLECTION_SNAP),
        f = n.get(t.COLLECTION_SNAP_STYLE),
        g = n.get(t.COLLECTION_SPACING_AFTER),
        h = n.get(t.COLLECTION_SPACING_BEFORE),
        y = c === "column",
        C = i
          ? g != null
            ? o("WebBloksUtils").toPx(g)
            : 0
          : o("WebBloksUtils").toPx(p),
        b = a && h != null ? o("WebBloksUtils").toPx(h) : void 0,
        v = o("WebBloksCollectionHelpers").getCollectionCellAlign(l),
        S = o("WebBloksCollectionHelpers").shouldStretchCollectionChild(l),
        R = {};
      y
        ? (b != null && (R.marginTop = b),
          C != null && (R.marginBottom = C),
          S
            ? (R.width = "100%")
            : (o("WebBloksCollectionHelpers").getBaseCrossAxisSize(
                l,
                "width",
              ) == null && (R.width = "fit-content"),
              (v === "center" || v === "end") && (R.marginLeft = "auto"),
              (v === "center" || v === "start") && (R.marginRight = "auto")),
          m(l, "height") && (R.height = "auto"))
        : (b != null && (R.marginLeft = b),
          C != null && (R.marginRight = C),
          (R.display = "inline-flex"),
          (R.verticalAlign = d[v != null ? v : "stretch"]),
          S && (R.height = "100%"),
          m(l, "width") && (R.width = "auto"));
      var L;
      return (
        f == null || f === "pager" ? (L = "always") : (L = "normal"),
        u(
          l,
          babelHelpers.extends(
            {},
            R,
            r("useWebBloksCollectionStickyChildStyle")({
              node: l,
              direction: c,
            }),
            { scrollSnapAlign: _, scrollSnapStop: L },
          ),
        )
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
