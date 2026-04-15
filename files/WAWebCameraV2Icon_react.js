__d(
  "WAWebCameraV2Icon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "camera-v2";
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
      var E = 16,
        k = 16;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 16 16",
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
            d: "M7.99961 10.0267C6.77739 10.0267 5.78287 9.03214 5.78287 7.80992C5.78287 6.5877 6.77739 5.59318 7.99961 5.59318C9.22183 5.59318 10.2163 6.5877 10.2163 7.80992C10.2163 9.03214 9.22183 10.0267 7.99961 10.0267Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.0704 2.45088C11.2894 2.82567 11.6744 3.07215 12.1086 3.07215H12.1616C13.5448 3.07215 14.6663 4.19344 14.6663 5.57688V11.2105C14.6663 12.5935 13.5448 13.715 12.1616 13.715H3.83774C2.45452 13.715 1.33301 12.5935 1.33301 11.2105V5.57688C1.33301 4.19344 2.45452 3.07215 3.83774 3.07215H3.89075C4.32495 3.07215 4.70991 2.82567 4.92899 2.45088C5.31991 1.78257 6.04432 1.33334 6.87474 1.33334H9.12461C9.95503 1.33334 10.6792 1.78257 11.0704 2.45088ZM7.99961 4.4889C6.16849 4.4889 4.67859 5.9788 4.67859 7.80992C4.67859 9.64104 6.16849 11.1309 7.99961 11.1309C9.83073 11.1309 11.3206 9.64104 11.3206 7.80992C11.3206 5.9788 9.83073 4.4889 7.99961 4.4889Z",
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
    l.CameraV2Icon = m;
  },
  98,
);
