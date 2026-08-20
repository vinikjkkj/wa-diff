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
        i = a.getSubNodes("children"),
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
        ? ((c = n.get("direction")), (t[0] = n), (t[1] = c))
        : (c = t[1]);
      var m = c,
        p = n.get("item_spacing"),
        _ = n.get("snap"),
        f = n.get("snap_style"),
        g = n.get("spacing_after"),
        h = n.get("spacing_before"),
        y = m === "column",
        C = i
          ? g != null
            ? o("WebBloksUtils").toPx(g)
            : 0
          : o("WebBloksUtils").toPx(p),
        b = a && h != null ? o("WebBloksUtils").toPx(h) : void 0,
        v;
      y
        ? ((v = { marginTop: b, marginBottom: C, width: "100%" }),
          d(l, "height") && (v.height = "auto"))
        : ((v = {
            marginLeft: b,
            marginRight: C,
            display: "inline-flex",
            verticalAlign: "bottom",
            height: "100%",
          }),
          d(l, "width") && (v.width = "auto"));
      var S;
      f == null || f === "pager" ? (S = "always") : (S = "normal");
      var R;
      return (
        t[2] !== m || t[3] !== l
          ? ((R = { node: l, direction: m }),
            (t[2] = m),
            (t[3] = l),
            (t[4] = R))
          : (R = t[4]),
        u(
          l,
          babelHelpers.extends(
            {},
            v,
            r("useWebBloksCollectionStickyChildStyle")(R),
            { scrollSnapAlign: _, scrollSnapStop: S },
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
