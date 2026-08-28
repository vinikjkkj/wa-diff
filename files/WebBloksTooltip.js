__d(
  "WebBloksTooltip",
  [
    "WebBloksComponentContext",
    "WebBloksDecoration",
    "WebBloksPortal",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksTooltipUtils",
    "WebBloksUtils",
    "react",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = "(",
      _ = ")",
      f = "*",
      g = "+",
      h = ",",
      y = "-",
      C = ".",
      b = "0",
      v = "1",
      S = "$",
      R = "&",
      L = "(",
      E = ")",
      k = "*",
      I = o("WebBloksStyle").createStyles({
        root: { position: "absolute", zIndex: 9999 },
        anchor: { position: "absolute", height: "100%", width: "100%" },
        contentWrapper: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        content: { display: "inline-block" },
        arrow: {
          height: o("WebBloksTooltipUtils").ARROW_SIZE,
          width: o("WebBloksTooltipUtils").TOOLTIP_HYPOTENUSE,
          zIndex: 1,
        },
        arrowDropShadow: { zIndex: -1, position: "absolute" },
      });
    function T(e) {
      var t,
        n = e.ref,
        a = e.externalStyle,
        i = e.node,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.renderNode,
        T = u(i.getSubNode(_)),
        D = i.getSubNode(f),
        x = o("WebBloksStyle").useStyle(i, a),
        $ = x.ref,
        P = x.wrapperProps,
        N = r("WebBloksDecoration")(D, void 0, !1, $),
        M = N[0],
        w = r("useWebBloksAccessibilityModule")(),
        A = w.FocusRegion,
        F = m(null),
        O = i.get(p),
        B = o("WebBloksTooltipUtils").useCalculatePosition(F, i.get(b), O),
        W = B[0],
        q = B[1],
        U = o("WebBloksTooltipUtils").useCalculatePositionStyle(F, q),
        V = (t = o("WebBloksUtils")).toPx(i.get(v)),
        H = t.toPx(i.get(g)),
        G = t.toPx(i.get(y)),
        z = t.toPx(i.get(C)),
        j = d(
          function () {
            var e = babelHelpers.extends({}, U),
              t = parseFloat(G);
            O === "shark-fin" && t > 0
              ? (e.marginLeft = t + o("WebBloksTooltipUtils").ARROW_SIZE / 2)
              : O === "shark-fin"
                ? (e.marginLeft = o("WebBloksTooltipUtils").ARROW_SIZE / 2)
                : t > 0 && (e.marginLeft = t);
            var n = parseFloat(z);
            return (
              n > 0 &&
                (q === "top"
                  ? (e.marginBottom = n)
                  : q === "bottom" && (e.marginTop = n)),
              e
            );
          },
          [O, G, z, U, q],
        ),
        K = d(
          function () {
            var e = {};
            return (q === "bottom" && (e.flexDirection = "column-reverse"), e);
          },
          [q],
        ),
        Q = t.toPx(D == null ? void 0 : D.get(L)),
        X = parseFloat(Q),
        Y = i.getSubNode(h),
        J = o("WebBloksUtils").toPx(Y == null ? void 0 : Y.get(k)),
        Z = o("WebBloksUtils").toPx(Y == null ? void 0 : Y.get(E)),
        ee = d(
          function () {
            var e = babelHelpers.extends({}, M);
            return (
              parseFloat(V) > 0 && (e.width = V),
              parseFloat(H) > 0 && (e.height = H),
              O === "none"
                ? ((e.marginTop = o("WebBloksTooltipUtils").ARROW_SIZE),
                  (e.marginBottom = o("WebBloksTooltipUtils").ARROW_SIZE))
                : ((e.marginTop = -X), (e.marginBottom = -X)),
              J != null && (e.marginLeft = J),
              Z != null && (e.marginRight = Z),
              e
            );
          },
          [O, X, M, H, Z, J, V],
        ),
        te = o("WebBloksTheme").useTheme().getTheme(),
        ne = O != null && O !== "none",
        re = d(
          function () {
            var e = D == null ? void 0 : D.get(S),
              t = D == null ? void 0 : D.get(R);
            return t != null
              ? o("WebBloksUtils").getRGBColorWithTheme(t, te)
              : e != null
                ? o("WebBloksUtils").convertRGBArrToString(
                    o("WebBloksUtils").convertRGBOrHexStringToArr(e),
                  )
                : null;
          },
          [D, te],
        ),
        oe = d(
          function () {
            return X * (100 / 16);
          },
          [X],
        ),
        ae = o("WebBloksTooltipUtils").getArrowPolyLinePoints(W, q, O, oe),
        ie = M.boxShadow != null,
        le = d(
          function () {
            var e = {};
            return (
              ie &&
                (M.boxShadow != null &&
                  (e.filter = "drop-shadow(" + M.boxShadow + ")"),
                q === "top" ? (e.bottom = 0) : q === "bottom" && (e.top = 0)),
              e
            );
          },
          [M.boxShadow, ie, q],
        ),
        se = c(function (e) {
          return e.stopPropagation();
        }, []),
        ue = s.jsx(
          "div",
          babelHelpers.extends({}, P, {
            className: I.root,
            style: j,
            onScroll: se,
            children: s.jsxs("span", {
              className: I.contentWrapper,
              style: K,
              children: [
                ne && M.boxShadow != null
                  ? s.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: o("WebBloksStyle").classNames(
                        I.arrow,
                        I.arrowDropShadow,
                      ),
                      style: le,
                      viewBox: "0 0 100 100",
                      children: [
                        s.jsx("title", { children: "Arrow drop shadow" }),
                        s.jsx("polygon", { points: ae }),
                      ],
                    })
                  : null,
                s.jsx("span", {
                  style: ee,
                  className: I.content,
                  children: s.jsx(A, { children: T }),
                }),
                ne
                  ? s.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: I.arrow,
                      viewBox: "0 0 100 100",
                      children: [
                        s.jsx("title", {
                          children: "Arrow pointing to tooltip",
                        }),
                        s.jsx("polyline", {
                          points: ae,
                          strokeWidth: oe,
                          stroke: re,
                          fill: ee == null ? void 0 : ee.background,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        );
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("span", { ref: F, className: I.anchor }),
          s.jsx(r("WebBloksPortal"), {
            target: n == null ? void 0 : n.current,
            children: ue,
          }),
        ],
      });
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = T));
  },
  98,
);
