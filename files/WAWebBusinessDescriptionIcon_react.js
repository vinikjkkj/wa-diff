__d(
  "WAWebBusinessDescriptionIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-description";
    function m(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i,
        l,
        u,
        m,
        p;
      n[0] !== t
        ? ((a = t.height),
          (l = t.iconXstyle),
          (i = t.name),
          (m = t.viewBox),
          (p = t.width),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]));
      var _;
      if (m) {
        var f = m,
          g = f.height,
          h = f.width,
          y = f.x,
          C = f.y,
          b = g === void 0 ? 0 : g,
          v = h === void 0 ? 0 : h,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L;
        (n[7] !== b || n[8] !== v || n[9] !== S || n[10] !== R
          ? ((L = [S, R, v, b]),
            (n[7] = b),
            (n[8] = v),
            (n[9] = S),
            (n[10] = R),
            (n[11] = L))
          : (L = n[11]),
          (_ = L.join(" ")));
      }
      var E = 24,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 24",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "business-description" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("defs", {})),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: [
              c.jsx("path", {
                d: "M3.55479575,5.11130106 L20.4434947,5.11130106 L20.4434947,3 L3.55479575,3 L3.55479575,5.11130106 Z M3.55479575,6.16780637 L2.5,11.4469138 L2.5,13.5582149 L3.55479575,13.5582149 L3.55479575,19.8904085 L14.1095915,19.8904085 L14.1095915,13.5582149 L18.3339032,13.5582149 L18.3339032,19.8904085 L20.4452042,19.8904085 L20.4452042,13.5582149 L21.5,13.5582149 L21.5,11.4469138 L20.4452042,6.16780637 L3.55479575,6.16780637 Z M5.66609681,17.780817 L11.9982904,17.780817 L11.9982904,13.5582149 L5.66609681,13.5582149 L5.66609681,17.780817 Z",
                id: "Page-1-Copy",
                fill: "currentColor",
              }),
              c.jsx("g", {
                id: "slices",
                transform: "translate(0.000000, -198.000000)",
              }),
            ],
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [P, N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = T),
          (n[21] = $),
          (n[22] = A))
        : (A = n[22]);
      var F;
      return (
        n[23] !== u || n[24] !== I || n[25] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = A),
            (n[26] = F))
          : (F = n[26]),
        F
      );
    }
    l.BusinessDescriptionIcon = m;
  },
  98,
);
