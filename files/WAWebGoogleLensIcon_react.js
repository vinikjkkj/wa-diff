__d(
  "WAWebGoogleLensIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "google-lens";
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
            d: "M18.0088 20C19.1133 20 20.0088 19.1046 20.0088 18C20.0088 16.8954 19.1133 16 18.0088 16C16.9042 16 16.0088 16.8954 16.0088 18C16.0088 19.1046 16.9042 20 18.0088 20Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            d: "M12.0087 16C13.6656 16 15.0087 14.6569 15.0087 13C15.0087 11.3431 13.6656 10 12.0087 10C10.3519 10 9.00875 11.3431 9.00875 13C9.00875 14.6569 10.3519 16 12.0087 16Z",
            fill: "currentColor",
          })),
          (F = c.jsx("path", {
            d: "M3 16.9C3 19.1637 4.83625 21 7.1 21H10.9988C11.5517 21 12 20.5517 12 19.9988C12 19.4468 11.5532 18.9989 11.0013 18.9975L6.9875 18.9875C5.8875 18.9875 5 17.9638 5 16.75V15.5C5 14.9477 4.55228 14.5 4 14.5C3.44772 14.5 3 14.9477 3 15.5V16.9Z",
            fill: "currentColor",
          })),
          (M = c.jsx("path", {
            d: "M9.7 3.4C9.88885 3.14819 10.1852 3 10.5 3H13.5C13.8148 3 14.1111 3.14819 14.3 3.4L15.2 4.6C15.3889 4.85181 15.6852 5 16 5H16.9C19.1637 5 21 6.83625 21 9.1V12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12V9.25C19 8.03625 18.1 7 17 7H7C5.9 7 5 8.03625 5 9.25V10.5C5 11.0523 4.55228 11.5 4 11.5C3.44772 11.5 3 11.0523 3 10.5V9.1C3 6.83625 4.83625 5 7.1 5H8C8.31476 5 8.61115 4.85181 8.8 4.6L9.7 3.4Z",
            fill: "currentColor",
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
    l.GoogleLensIcon = m;
  },
  98,
);
