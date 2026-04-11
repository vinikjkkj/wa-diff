__d(
  "WAWebKeyIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "key";
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
      var E = 20,
        k = 20;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 20 20",
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
        ? ((M = { maskType: "alpha" }), (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("mask", {
            id: "main",
            style: M,
            maskUnits: "userSpaceOnUse",
            x: 0,
            y: 0,
            width: 20,
            height: 20,
            children: c.jsx("rect", {
              width: 20,
              height: 20,
              fill: "currentColor",
            }),
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("g", {
            mask: "url(#main)",
            children: c.jsx("path", {
              d: "M6.00367 12.8125C5.36233 12.8125 4.81597 12.588 4.36458 12.1391C3.91319 11.6902 3.6875 11.145 3.6875 10.5037C3.6875 9.86233 3.91197 9.31597 4.36092 8.86458C4.80985 8.41319 5.35499 8.1875 5.99633 8.1875C6.63767 8.1875 7.18403 8.41197 7.63542 8.8609C8.08681 9.30984 8.3125 9.85499 8.3125 10.4963C8.3125 11.1377 8.08803 11.684 7.63908 12.1354C7.19015 12.5868 6.64501 12.8125 6.00367 12.8125ZM6 15.5C7.02778 15.5 7.98611 15.1875 8.875 14.5625C9.76389 13.9375 10.3681 13.1319 10.6875 12.1458H11L12.0646 13.2105C12.1465 13.2924 12.2431 13.3542 12.3542 13.3958C12.4653 13.4375 12.5764 13.4583 12.6875 13.4583C12.7986 13.4583 12.9062 13.4375 13.0104 13.3958C13.1146 13.3542 13.2069 13.2931 13.2874 13.2126L14.3333 12.1667L15.3958 13.2083C15.4792 13.2917 15.5729 13.3542 15.6771 13.3958C15.7813 13.4375 15.8889 13.4583 16 13.4583C16.1111 13.4583 16.2218 13.4359 16.3322 13.391C16.4425 13.3461 16.5401 13.2853 16.625 13.2083L18.7368 11.0822C18.8151 10.9996 18.8785 10.9028 18.9271 10.7917C18.9757 10.6806 19 10.5694 19 10.4583C19 10.3472 18.9754 10.2365 18.9261 10.1262C18.8769 10.0158 18.8112 9.91821 18.7292 9.83333L17.9583 9.0625C17.8745 8.97917 17.7802 8.91667 17.6755 8.875C17.5707 8.83333 17.4624 8.8125 17.3507 8.8125H10.6875C10.3681 7.85417 9.77431 7.0625 8.90625 6.4375C8.03819 5.8125 7.06944 5.5 6 5.5C4.61111 5.5 3.43056 5.98611 2.45833 6.95833C1.48611 7.93056 1 9.11111 1 10.5C1 11.8889 1.48611 13.0694 2.45833 14.0417C3.43056 15.0139 4.61111 15.5 6 15.5Z",
              fill: "currentColor",
            }),
          })),
          (n[18] = A))
        : (A = n[18]);
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, w, A],
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
    l.KeyIcon = m;
  },
  98,
);
