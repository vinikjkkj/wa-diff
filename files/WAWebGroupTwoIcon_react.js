__d(
  "WAWebGroupTwoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "group-two";
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
      var E = 90,
        k = 135;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 135 90",
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
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M63.282 19.2856C63.282 29.957 54.8569 38.5713 44.3419 38.5713C33.827 38.5713 25.339 29.957 25.339 19.2856C25.339 8.6143 33.827 0 44.3419 0C54.8569 0 63.282 8.6143 63.282 19.2856ZM111.35 22.1427C111.35 31.9446 103.612 39.857 93.954 39.857C84.296 39.857 76.5 31.9446 76.5 22.1427C76.5 12.3409 84.296 4.4285 93.954 4.4285C103.612 4.4285 111.35 12.3409 111.35 22.1427ZM44.3402 51.428C29.5812 51.428 0 58.95 0 73.928V85.714C0 89.25 2.8504 90 6.3343 90H82.346C85.83 90 88.68 89.25 88.68 85.714V73.928C88.68 58.95 59.0991 51.428 44.3402 51.428ZM87.804 52.853C88.707 52.871 89.485 52.886 90 52.886C104.759 52.886 135 58.95 135 73.929V83.571C135 87.107 132.15 90 128.666 90H95.854C96.551 88.007 96.995 85.821 96.995 83.571L96.75 73.071C96.75 63.51 91.136 59.858 85.162 55.971C83.772 55.067 82.363 54.15 81 53.143C80.981 53.123 80.962 53.098 80.941 53.07C80.893 53.007 80.835 52.931 80.747 52.886C82.343 52.747 85.485 52.808 87.804 52.853Z",
            fill: "currentColor",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== T || n[20] !== $ || n[21] !== N
        ? ((w = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M],
          })),
          (n[17] = E),
          (n[18] = k),
          (n[19] = T),
          (n[20] = $),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== u || n[24] !== I || n[25] !== w
          ? ((A = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: w }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = w),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    l.GroupTwoIcon = m;
  },
  98,
);
