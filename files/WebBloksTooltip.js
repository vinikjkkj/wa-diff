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
      p = o("WebBloksStyle").createStyles({
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
    function _(e) {
      var t = e.ref,
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.renderNode,
        u = l(a.getSubNode("child")),
        _ = a.getValues(),
        f = a.get("decoration"),
        g = o("WebBloksStyle").useStyle(a, n),
        h = g.ref,
        y = g.wrapperProps,
        C = r("WebBloksDecoration")(_, h),
        b = C[0],
        v = r("useWebBloksAccessibilityModule")(),
        S = v.FocusRegion,
        R = m(null),
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
        N = d(
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
        M = d(
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
        W = d(
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
        V = d(
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
        H = d(
          function () {
            return A * (100 / 16);
          },
          [A],
        ),
        G = o("WebBloksTooltipUtils").getArrowPolyLinePoints(k, I, L, H),
        z = b.boxShadow != null,
        j = d(
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
        K = c(function (e) {
          return e.stopPropagation();
        }, []),
        Q = s.jsx(
          "div",
          babelHelpers.extends({}, y, {
            className: p.root,
            style: N,
            onScroll: K,
            children: s.jsxs("span", {
              className: p.contentWrapper,
              style: M,
              children: [
                U && b.boxShadow != null
                  ? s.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: o("WebBloksStyle").classNames(
                        p.arrow,
                        p.arrowDropShadow,
                      ),
                      style: j,
                      viewBox: "0 0 100 100",
                      children: [
                        s.jsx("title", { children: "Arrow drop shadow" }),
                        s.jsx("polygon", { points: G }),
                      ],
                    })
                  : null,
                s.jsx("span", {
                  style: W,
                  className: p.content,
                  children: s.jsx(S, { children: u }),
                }),
                U
                  ? s.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: p.arrow,
                      viewBox: "0 0 100 100",
                      children: [
                        s.jsx("title", {
                          children: "Arrow pointing to tooltip",
                        }),
                        s.jsx("polyline", {
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
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("span", { ref: R, className: p.anchor }),
          s.jsx(r("WebBloksPortal"), {
            target: t == null ? void 0 : t.current,
            children: Q,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
