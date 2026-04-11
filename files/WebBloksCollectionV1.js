__d(
  "WebBloksCollectionV1",
  [
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
        i = a.getValues(),
        l = i.children,
        u = o("WebBloksStyle").useStyle(a, n),
        d = u.ref,
        m = u.style,
        p = u.wrapper,
        _ = u.wrapperProps,
        f = r("useWebBloksCollectionScrollingElementStyle")(i),
        g = f.scrollingElementClassNames,
        h = f.scrollingElementStyle,
        y = o(
          "WebBloksCollectionScrollRefs",
        ).useWebbloksCollectionScrollContainerRef(a);
      r("useWebBloksCollectionScrollHandlers")(a);
      var C = r("useWebBloksCollectionStopPropagation")(d),
        b;
      t[0] !== y || t[1] !== d
        ? ((b = function (t) {
            ((y.current = t), (d.current = t));
          }),
          (t[0] = y),
          (t[1] = d),
          (t[2] = b))
        : (b = t[2]);
      var v;
      t[3] !== g
        ? ((v = o("WebBloksStyle").classNames.apply(
            void 0,
            [o("WebBloksStyle").WebBloksStyles.container].concat(g),
          )),
          (t[3] = g),
          (t[4] = v))
        : (v = t[4]);
      var S;
      t[5] !== h || t[6] !== m
        ? ((S = babelHelpers.extends({}, h, m, {
            display: "block",
            pointerEvents: "auto",
          })),
          (t[5] = h),
          (t[6] = m),
          (t[7] = S))
        : (S = t[7]);
      var R =
          l &&
          l.map(function (e, t) {
            return s.jsx(
              c,
              {
                node: e,
                collectionNode: a,
                isFirstItem: t === 0,
                isLastItem: t === l.length - 1,
              },
              e.clientId,
            );
          }),
        L;
      t[8] !== C ||
      t[9] !== b ||
      t[10] !== v ||
      t[11] !== S ||
      t[12] !== R ||
      t[13] !== _
        ? ((L = s.jsx(
            "div",
            babelHelpers.extends({}, _, { ref: b, className: v, style: S }, C, {
              children: R,
            }),
          )),
          (t[8] = C),
          (t[9] = b),
          (t[10] = v),
          (t[11] = S),
          (t[12] = R),
          (t[13] = _),
          (t[14] = L))
        : (L = t[14]);
      var E;
      return (
        t[15] !== L || t[16] !== p
          ? ((E = p(L)), (t[15] = L), (t[16] = p), (t[17] = E))
          : (E = t[17]),
        E
      );
    }
    function c(e) {
      var t = e.collectionNode,
        n = e.isFirstItem,
        a = e.isLastItem,
        i = e.node,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        s = l.renderNode,
        u = t.getValues(),
        c = u.direction,
        m = u.item_spacing,
        p = u.snap,
        _ = u.snap_style,
        f = u.spacing_after,
        g = u.spacing_before,
        h = c === "column",
        y = a
          ? f != null
            ? o("WebBloksUtils").toPx(f)
            : 0
          : o("WebBloksUtils").toPx(m),
        C = n && g != null ? o("WebBloksUtils").toPx(g) : void 0,
        b;
      h
        ? ((b = { marginTop: C, marginBottom: y, width: "100%" }),
          d(i, "height") && (b.height = "auto"))
        : ((b = {
            marginLeft: C,
            marginRight: y,
            display: "inline-flex",
            verticalAlign: "bottom",
            height: "100%",
          }),
          d(i, "width") && (b.width = "auto"));
      var v;
      return (
        _ == null || _ === "pager" ? (v = "always") : (v = "normal"),
        s(
          i,
          babelHelpers.extends(
            {},
            b,
            r("useWebBloksCollectionStickyChildStyle")({
              node: i,
              direction: c,
            }),
            { scrollSnapAlign: p, scrollSnapStop: v },
          ),
        )
      );
    }
    function d(e, t) {
      var n, r;
      return (n =
        (r = e.getStyle("flex")) == null || (r = r.get(t)) == null
          ? void 0
          : r.endsWith("%")) != null
        ? n
        : !1;
    }
    l.default = u;
  },
  98,
);
