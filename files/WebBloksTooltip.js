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
      s,
      u = s || (s = o("react")),
      c = e || (e = r("react")),
      d = u.useCallback,
      m = u.useMemo,
      p = u.useRef,
      _ = o("WebBloksStyle").createStyles({
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
    function f(e) {
      var t = e.ref,
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.renderNode,
        s = l(a.getSubNode("child")),
        u = a.getValues(),
        f = a.get("decoration"),
        g = o("WebBloksStyle").useStyle(a, n),
        h = g.ref,
        y = g.wrapperProps,
        C = r("WebBloksDecoration")(u, h),
        b = C[0],
        v = r("useWebBloksAccessibilityModule")(),
        S = v.FocusRegion,
        R = p(null),
        L = a == null ? void 0 : a.get("arrow_type"),
        E = o("WebBloksTooltipUtils").useCalculatePosition(
          R,
          a.get("position"),
          L,
        ),
        k = E[0],
        I = E[1],
        T = o("WebBloksTooltipUtils").useCalculatePositionStyle(R, I),
        D = o("WebBloksUtils").toPx(a.get("width")),
        x = o("WebBloksUtils").toPx(a.get("height")),
        $ = o("WebBloksUtils").toPx(a.get("offset_horizontal")),
        P = o("WebBloksUtils").toPx(a.get("offset_vertical")),
        N = m(
          function () {
            var e = babelHelpers.extends({}, T),
              t = parseFloat($);
            L === "shark-fin" && t > 0
              ? (e.marginLeft = t + o("WebBloksTooltipUtils").ARROW_SIZE / 2)
              : L === "shark-fin"
                ? (e.marginLeft = o("WebBloksTooltipUtils").ARROW_SIZE / 2)
                : t > 0 && (e.marginLeft = t);
            var n = parseFloat(P);
            return (
              n > 0 &&
                (I === "top"
                  ? (e.marginBottom = n)
                  : I === "bottom" && (e.marginTop = n)),
              e
            );
          },
          [L, $, P, T, I],
        ),
        M = m(
          function () {
            var e = {};
            return (I === "bottom" && (e.flexDirection = "column-reverse"), e);
          },
          [I],
        ),
        w = o("WebBloksUtils").toPx(f == null ? void 0 : f.get("border_width")),
        A = parseFloat(w),
        F = a.get("margin"),
        O = o("WebBloksUtils").toPx(F == null ? void 0 : F.get("start")),
        B = o("WebBloksUtils").toPx(F == null ? void 0 : F.get("end")),
        W = m(
          function () {
            var e = babelHelpers.extends({}, b);
            return (
              parseFloat(D) > 0 && (e.width = D),
              parseFloat(x) > 0 && (e.height = x),
              L === "none"
                ? ((e.marginTop = o("WebBloksTooltipUtils").ARROW_SIZE),
                  (e.marginBottom = o("WebBloksTooltipUtils").ARROW_SIZE))
                : ((e.marginTop = -A), (e.marginBottom = -A)),
              O != null && (e.marginLeft = O),
              B != null && (e.marginRight = B),
              e
            );
          },
          [L, A, b, x, B, O, D],
        ),
        q = o("WebBloksTheme").useTheme().getTheme(),
        U = L != null && L !== "none",
        V = m(
          function () {
            var e = f == null ? void 0 : f.get("border_color"),
              t = f == null ? void 0 : f.get("border_themed_color");
            return t != null
              ? o("WebBloksUtils").getRGBColorWithTheme(t, q)
              : e != null
                ? o("WebBloksUtils").convertRGBArrToString(
                    o("WebBloksUtils").convertRGBOrHexStringToArr(e),
                  )
                : null;
          },
          [f, q],
        ),
        H = m(
          function () {
            return A * (100 / 16);
          },
          [A],
        ),
        G = o("WebBloksTooltipUtils").getArrowPolyLinePoints(k, I, L, H),
        z = b.boxShadow != null,
        j = m(
          function () {
            var e = {};
            return (
              z &&
                (b.boxShadow != null &&
                  (e.filter = "drop-shadow(" + b.boxShadow + ")"),
                I === "top" ? (e.bottom = 0) : I === "bottom" && (e.top = 0)),
              e
            );
          },
          [b.boxShadow, z, I],
        ),
        K = d(function (e) {
          return e.stopPropagation();
        }, []),
        Q = c.jsx(
          "div",
          babelHelpers.extends({}, y, {
            className: _.root,
            style: N,
            onScroll: K,
            children: c.jsxs("span", {
              className: _.contentWrapper,
              style: M,
              children: [
                U && b.boxShadow != null
                  ? c.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: o("WebBloksStyle").classNames(
                        _.arrow,
                        _.arrowDropShadow,
                      ),
                      style: j,
                      viewBox: "0 0 100 100",
                      children: [
                        c.jsx("title", { children: "Arrow drop shadow" }),
                        c.jsx("polygon", { points: G }),
                      ],
                    })
                  : null,
                c.jsx("span", {
                  style: W,
                  className: _.content,
                  children: c.jsx(S, { children: s }),
                }),
                U
                  ? c.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: _.arrow,
                      viewBox: "0 0 100 100",
                      children: [
                        c.jsx("title", {
                          children: "Arrow pointing to tooltip",
                        }),
                        c.jsx("polyline", {
                          points: G,
                          strokeWidth: H,
                          stroke: V,
                          fill: W == null ? void 0 : W.background,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        );
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("span", { ref: R, className: _.anchor }),
          c.jsx(r("WebBloksPortal"), {
            target: t == null ? void 0 : t.current,
            children: Q,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
