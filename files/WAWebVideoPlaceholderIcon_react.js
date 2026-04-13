__d(
  "WAWebVideoPlaceholderIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-placeholder";
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
      var E = 28,
        k = 46;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 46 28",
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
            d: "M0.632234 3.05765C0 4.25556 0 5.82371 0 8.96V19.04C0 22.1763 0 23.7444 0.632234 24.9423C1.18836 25.9961 2.07575 26.8527 3.16722 27.3896C4.40804 28 6.03238 28 9.28106 28H23.5894C26.838 28 28.4624 28 29.7032 27.3896C30.7947 26.8527 31.682 25.9961 32.2382 24.9423C32.8704 23.7444 32.8704 22.1763 32.8704 19.04V8.96C32.8704 5.82371 32.8704 4.25556 32.2382 3.05765C31.682 2.00395 30.7947 1.14725 29.7032 0.610364C28.4624 0 26.838 0 23.5894 0H9.28106C6.03238 0 4.40804 0 3.16722 0.610364C2.07575 1.14725 1.18836 2.00395 0.632234 3.05765Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M36.7051 8.4197C36.3068 8.77319 36.0801 9.27163 36.0801 9.79396V18.206C36.0801 18.7284 36.3068 19.2268 36.7051 19.5803L41.899 24.1895C43.1385 25.2895 45.1411 24.4407 45.1411 22.8153V5.18474C45.1411 3.55931 43.1385 2.71047 41.899 3.81048L36.7051 8.4197Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w))
        : ((M = n[16]), (w = n[17]));
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $ || n[22] !== N
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
          (n[20] = T),
          (n[21] = $),
          (n[22] = N),
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
    l.VideoPlaceholderIcon = m;
  },
  98,
);
