__d(
  "WAWebDotTwoLoopsIntersectedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "dot-two-loops-intersected";
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
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
        T = _,
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fill: "currentColor",
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
          })),
          (w = c.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M4.22 4.22c1.6-1.6 4.64-1.37 7.78.33 3.13-1.7 6.17-1.94 7.78-.33 1.6 1.6 1.37 4.64-.33 7.78 1.7 3.14 1.94 6.17.33 7.78-1.6 1.6-4.65 1.37-7.78-.33-3.14 1.7-6.17 1.93-7.78.33-1.6-1.6-1.37-4.65.33-7.78-1.7-3.13-1.94-6.17-.33-7.78Zm14.36 4.72c.55-1.88.2-2.9-.22-3.3-.4-.42-1.42-.77-3.3-.22-.35.1-.7.23-1.08.39a19.73 19.73 0 0 1 4.2 4.2c.17-.36.3-.73.4-1.07ZM8.94 5.42c.34.1.7.23 1.08.39a19.72 19.72 0 0 0-4.21 4.2 9.89 9.89 0 0 1-.4-1.07c-.54-1.88-.19-2.9.23-3.3.4-.42 1.42-.77 3.3-.22Zm-3.52 9.64c.1-.35.23-.7.39-1.08a19.74 19.74 0 0 0 4.2 4.21 9.9 9.9 0 0 1-1.07.4c-1.88.54-2.9.18-3.3-.23-.42-.4-.77-1.42-.22-3.3Zm3.75-.23c.92.92 1.88 1.69 2.83 2.3A17.24 17.24 0 0 0 17.13 12 17.24 17.24 0 0 0 12 6.87 17.24 17.24 0 0 0 6.87 12c.61.95 1.38 1.9 2.3 2.83Zm5.9 3.75a9.9 9.9 0 0 1-1.09-.39 19.73 19.73 0 0 0 4.2-4.2c.17.36.3.73.4 1.07.55 1.88.2 2.9-.22 3.3-.4.42-1.42.77-3.3.22Z",
            clipRule: "evenodd",
          })),
          (n[16] = M),
          (n[17] = w))
        : ((M = n[16]), (w = n[17]));
      var A;
      n[18] !== E || n[19] !== k || n[20] !== $ || n[21] !== N || n[22] !== _
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = $),
          (n[21] = N),
          (n[22] = _),
          (n[23] = A))
        : (A = n[23]);
      var F;
      return (
        n[24] !== u || n[25] !== I || n[26] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[24] = u),
            (n[25] = I),
            (n[26] = A),
            (n[27] = F))
          : (F = n[27]),
        F
      );
    }
    l.DotTwoLoopsIntersectedIcon = m;
  },
  98,
);
