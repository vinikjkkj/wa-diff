__d(
  "WAWebE2EStatusIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "e2e-status";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
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
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "M20.3351 11.583C20.4874 15.1659 18.3165 18.5828 14.7619 19.8518C14.3677 19.9923 13.9702 20.102 13.5718 20.1813",
            stroke: "#8696A0",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (A = c.jsx("path", {
            d: "M5.61426 6.39954C6.52735 5.35496 7.71219 4.52266 9.11157 4.02283C11.6343 3.12242 14.3025 3.50061 16.408 4.82167",
            stroke: "#8696A0",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (F = c.jsx("path", {
            d: "M10.3036 20.1821C7.50086 19.624 5.05315 17.6498 4.02262 14.7625C3.35894 12.9029 3.3898 10.9646 3.98122 9.23047",
            stroke: "#8696A0",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (M = c.jsx("path", {
            d: "M17.2768 11.9373C17.2768 14.8864 14.886 17.2769 11.937 17.2769C8.98793 17.2769 6.59717 14.8864 6.59717 11.9373C6.59717 8.98828 8.98793 6.59778 11.937 6.59778C12.9754 6.59778 13.9446 6.89418 14.7646 7.40699",
            stroke: "#8696A0",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.E2EStatusIcon = m;
  },
  98,
);
