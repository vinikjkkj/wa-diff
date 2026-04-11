__d(
  "WAWebNewsletterSystemMessageIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "newsletter-system-message";
    function m(t) {
      var n = o("react-compiler-runtime").c(29),
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
      var E = 14,
        k = 14;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 14 14",
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
      var M, w, A;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M5.11003 4.98C4.86003 4.71 4.42003 4.72 4.20003 5.01C3.79003 5.58 3.54003 6.28 3.54003 7.03C3.54003 7.73 3.75003 8.38 4.11003 8.93C4.33003 9.26 4.79003 9.31 5.06003 9.02C5.26003 8.81 5.27003 8.5 5.11003 8.25C4.88003 7.9 4.75003 7.48 4.75003 7.03C4.75003 6.56 4.90003 6.12 5.15003 5.76C5.32003 5.52 5.32003 5.19 5.11003 4.98ZM8.91003 4.96C8.71003 5.18 8.70003 5.51 8.87003 5.75C9.12003 6.11 9.28003 6.55 9.28003 7.03C9.28003 7.51 9.14003 7.91 8.91003 8.26C8.75003 8.5 8.76003 8.82 8.96003 9.03C9.23003 9.32 9.69003 9.27 9.91003 8.94C10.27 8.39 10.48 7.74 10.48 7.03C10.48 6.27 10.23 5.57 9.82003 5C9.60003 4.71 9.16003 4.7 8.91003 4.96Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M7.01003 7.9C7.50709 7.9 7.91003 7.49706 7.91003 7C7.91003 6.50294 7.50709 6.1 7.01003 6.1C6.51298 6.1 6.11003 6.50294 6.11003 7C6.11003 7.49706 6.51298 7.9 7.01003 7.9Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            d: "M11.78 3.39C11.57 3.1 11.15 3.06 10.89 3.3C10.67 3.51 10.63 3.85 10.81 4.09C12.18 5.91 12.13 8.38 10.7 10.09C10.51 10.32 10.53 10.66 10.73 10.88C10.98 11.14 11.4 11.12 11.63 10.85C13.4 8.72 13.47 5.66 11.79 3.4L11.78 3.39ZM3.30003 3.12C3.05003 2.86 2.62003 2.88 2.39003 3.16C0.540032 5.37 0.530032 8.62 2.39003 10.85C2.62003 11.13 3.05003 11.15 3.30003 10.88C3.51003 10.66 3.53003 10.32 3.34003 10.09C1.83003 8.3 1.85003 5.68 3.34003 3.91C3.54003 3.68 3.52003 3.33 3.31003 3.11L3.30003 3.12Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A))
        : ((M = n[16]), (w = n[17]), (A = n[18]));
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w, A],
          })),
          (n[19] = E),
          (n[20] = k),
          (n[21] = T),
          (n[22] = $),
          (n[23] = N),
          (n[24] = F))
        : (F = n[24]);
      var O;
      return (
        n[25] !== u || n[26] !== I || n[27] !== F
          ? ((O = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: F }),
            )),
            (n[25] = u),
            (n[26] = I),
            (n[27] = F),
            (n[28] = O))
          : (O = n[28]),
        O
      );
    }
    l.NewsletterSystemMessageIcon = m;
  },
  98,
);
