__d(
  "WAWebDoubleChevronInCircleIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "double-chevron-in-circle";
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
      var E = 19,
        k = 19;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 19 19",
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
            d: "M5.79303 5.94909C6.10056 5.64155 6.59918 5.64155 6.90672 5.94909L9.87657 8.91893C10.1841 9.22647 10.1841 9.72509 9.87657 10.0326L6.90672 13.0025C6.59918 13.31 6.10056 13.31 5.79303 13.0025C5.48549 12.6949 5.48549 12.1963 5.79303 11.8888L8.20603 9.47578L5.79303 7.06278C5.48549 6.75524 5.48549 6.25662 5.79303 5.94909Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M9.99302 5.94909C10.3006 5.64155 10.7992 5.64155 11.1067 5.94909L14.0766 8.91893C14.3841 9.22647 14.3841 9.72509 14.0766 10.0326L11.1067 13.0025C10.7992 13.31 10.3006 13.31 9.99302 13.0025C9.68549 12.6949 9.68549 12.1963 9.99302 11.8888L12.406 9.47578L9.99302 7.06278C9.68549 6.75524 9.68549 6.25662 9.99302 5.94909Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.2569 9.5037C18.2569 14.3372 14.3386 18.2555 9.50517 18.2555C4.67171 18.2555 0.753418 14.3372 0.753418 9.5037C0.753418 4.67024 4.67171 0.751953 9.50517 0.751953C14.3386 0.751953 18.2569 4.67024 18.2569 9.5037ZM16.6819 9.5037C16.6819 13.4673 13.4688 16.6805 9.50517 16.6805C5.54156 16.6805 2.32842 13.4673 2.32842 9.5037C2.32842 5.54009 5.54156 2.32695 9.50517 2.32695C13.4688 2.32695 16.6819 5.54009 16.6819 9.5037Z",
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
    l.DoubleChevronInCircleIcon = m;
  },
  98,
);
