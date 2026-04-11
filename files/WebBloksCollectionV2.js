__d(
  "WebBloksCollectionV2",
  [
    "WebBloksCollectionChildBase",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionScrollRefs",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useWebBloksCollectionScrollHandlers",
    "useWebBloksCollectionScrollingElementStyle",
    "useWebBloksCollectionStopPropagation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = o("react-compiler-runtime").c(8),
        a = e.externalStyle,
        i = e.node,
        l = i.getValues(),
        u = l.children,
        d = l.direction,
        m = l.item_spacing,
        p = l.spacing_after,
        _ = l.spacing_before,
        f = o("WebBloksStyle").useStyle(i, a),
        g = f.ref,
        h = f.style,
        y = f.wrapper,
        C = f.wrapperProps,
        b = r("useWebBloksCollectionScrollingElementStyle")(l),
        v = b.scrollingElementClassNames,
        S = b.scrollingElementStyle,
        R = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(i);
      r("useWebBloksCollectionScrollHandlers")(i);
      var L = r("useWebBloksCollectionStopPropagation")(g),
        E = o("WebBloksCollectionHelpers").getDirectionPropNames(d),
        k = E.crossAxisSize,
        I = E.mainAxisMarginEnd,
        T = E.mainAxisMarginStart,
        D = E.mainAxisSize,
        x;
      n[0] !== v
        ? ((x = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(v),
          )),
          (n[0] = v),
          (n[1] = x))
        : (x = n[1]);
      var $;
      n[2] !== i
        ? (($ = o("WebBloksCollectionHelpers").getContainerType(i)),
          (n[2] = i),
          (n[3] = $))
        : ($ = n[3]);
      var P;
      return (
        n[4] !== S || n[5] !== h || n[6] !== $
          ? ((P = babelHelpers.extends({}, S, h, {
              display: "block",
              pointerEvents: "auto",
              containerType: $,
            })),
            (n[4] = S),
            (n[5] = h),
            (n[6] = $),
            (n[7] = P))
          : (P = n[7]),
        y(
          s.jsx(
            "div",
            babelHelpers.extends({}, C, { ref: g, className: x, style: P }, L, {
              children: s.jsx("div", {
                ref: R,
                style:
                  ((t = {
                    display: "flex",
                    flexDirection: d,
                    gap: o("WebBloksUtils").toPx(m),
                  }),
                  (t[D] = "max-content"),
                  (t[k] = "100%"),
                  (t[T] = _ != null ? o("WebBloksUtils").toPx(_) : void 0),
                  (t[I] = p != null ? o("WebBloksUtils").toPx(p) : void 0),
                  t),
                children:
                  u &&
                  u.map(function (e) {
                    return s.jsx(
                      c,
                      { scrollerRef: g, node: e, collectionNode: i },
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
