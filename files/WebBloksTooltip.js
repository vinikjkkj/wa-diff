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
        _ = a.get("decoration"),
        f = o("WebBloksStyle").useStyle(a, n),
        g = f.ref,
        h = f.wrapperProps,
        y = r("WebBloksDecoration")(_, void 0, !1, g),
        C = y[0],
        b = r("useWebBloksAccessibilityModule")(),
        v = b.FocusRegion,
        S = m(null),
        R = a == null ? void 0 : a.get("arrow_type"),
        L = o("WebBloksTooltipUtils").useCalculatePosition(
          S,
          a.get("position"),
          R,
        ),
        E = L[0],
        k = L[1],
        I = o("WebBloksTooltipUtils").useCalculatePositionStyle(S, k),
        T = o("WebBloksUtils").toPx(a.get("width")),
        D = o("WebBloksUtils").toPx(a.get("height")),
        x = o("WebBloksUtils").toPx(a.get("offset_horizontal")),
        $ = o("WebBloksUtils").toPx(a.get("offset_vertical")),
        P = d(
          function () {
            var e = babelHelpers.extends({}, I),
              t = parseFloat(x);
            R === "shark-fin" && t > 0
              ? (e.marginLeft = t + o("WebBloksTooltipUtils").ARROW_SIZE / 2)
              : R === "shark-fin"
                ? (e.marginLeft = o("WebBloksTooltipUtils").ARROW_SIZE / 2)
                : t > 0 && (e.marginLeft = t);
            var n = parseFloat($);
            return (
              n > 0 &&
                (k === "top"
                  ? (e.marginBottom = n)
                  : k === "bottom" && (e.marginTop = n)),
              e
            );
          },
          [R, x, $, I, k],
        ),
        N = d(
          function () {
            var e = {};
            return (k === "bottom" && (e.flexDirection = "column-reverse"), e);
          },
          [k],
        ),
        M = o("WebBloksUtils").toPx(_ == null ? void 0 : _.get("border_width")),
        w = parseFloat(M),
        A = a.get("margin"),
        F = o("WebBloksUtils").toPx(A == null ? void 0 : A.get("start")),
        O = o("WebBloksUtils").toPx(A == null ? void 0 : A.get("end")),
        B = d(
          function () {
            var e = babelHelpers.extends({}, C);
            return (
              parseFloat(T) > 0 && (e.width = T),
              parseFloat(D) > 0 && (e.height = D),
              R === "none"
                ? ((e.marginTop = o("WebBloksTooltipUtils").ARROW_SIZE),
                  (e.marginBottom = o("WebBloksTooltipUtils").ARROW_SIZE))
                : ((e.marginTop = -w), (e.marginBottom = -w)),
              F != null && (e.marginLeft = F),
              O != null && (e.marginRight = O),
              e
            );
          },
          [R, w, C, D, O, F, T],
        ),
        W = o("WebBloksTheme").useTheme().getTheme(),
        q = R != null && R !== "none",
        U = d(
          function () {
            var e = _ == null ? void 0 : _.get("border_color"),
              t = _ == null ? void 0 : _.get("border_themed_color");
            return t != null
              ? o("WebBloksUtils").getRGBColorWithTheme(t, W)
              : e != null
                ? o("WebBloksUtils").convertRGBArrToString(
                    o("WebBloksUtils").convertRGBOrHexStringToArr(e),
                  )
                : null;
          },
          [_, W],
        ),
        V = d(
          function () {
            return w * (100 / 16);
          },
          [w],
        ),
        H = o("WebBloksTooltipUtils").getArrowPolyLinePoints(E, k, R, V),
        G = C.boxShadow != null,
        z = d(
          function () {
            var e = {};
            return (
              G &&
                (C.boxShadow != null &&
                  (e.filter = "drop-shadow(" + C.boxShadow + ")"),
                k === "top" ? (e.bottom = 0) : k === "bottom" && (e.top = 0)),
              e
            );
          },
          [C.boxShadow, G, k],
        ),
        j = c(function (e) {
          return e.stopPropagation();
        }, []),
        K = s.jsx(
          "div",
          babelHelpers.extends({}, h, {
            className: p.root,
            style: P,
            onScroll: j,
            children: s.jsxs("span", {
              className: p.contentWrapper,
              style: N,
              children: [
                q && C.boxShadow != null
                  ? s.jsxs("svg", {
                      label: "",
                      preserveAspectRatio: "none",
                      className: o("WebBloksStyle").classNames(
                        p.arrow,
                        p.arrowDropShadow,
                      ),
                      style: z,
                      viewBox: "0 0 100 100",
                      children: [
                        s.jsx("title", { children: "Arrow drop shadow" }),
                        s.jsx("polygon", { points: H }),
                      ],
                    })
                  : null,
                s.jsx("span", {
                  style: B,
                  className: p.content,
                  children: s.jsx(v, { children: u }),
                }),
                q
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
                          points: H,
                          strokeWidth: V,
                          stroke: U,
                          fill: B == null ? void 0 : B.background,
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
          s.jsx("span", { ref: S, className: p.anchor }),
          s.jsx(r("WebBloksPortal"), {
            target: t == null ? void 0 : t.current,
            children: K,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
