__d(
  "WAWebAlertPhoneIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-phone";
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
      var E = 48,
        k = 48;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 48 48",
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
            d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z",
          })),
          (w = c.jsx("path", {
            className: "icon-shape",
            fill: "#FFBC00",
            d: "M19.352,30.776c0.809-0.008,1.626,0,2.443,0c0.008-2.05,0.008-4.109,0-6.159h-2.451 C19.336,26.667,19.328,28.725,19.352,30.776z M15.876,22.102l1.928-1.928l1.929,1.928l0.964-0.964l-1.929-1.929l1.929-1.928 l-0.964-0.964l-1.929,1.928l-1.928-1.928l-0.965,0.964l1.929,1.928l-1.929,1.929L15.876,22.102z M15.635,27.1 c0.008,1.225,0.008,2.443,0,3.668c0.825,0.016,1.642,0,2.467,0.008c0.008-1.233,0-2.459,0-3.692 C17.277,27.084,16.452,27.052,15.635,27.1z M30.42,17.232c0,4.517-0.008,9.026,0,13.544c0.825-0.008,1.642,0.008,2.467-0.008 c-0.008-4.509-0.008-9.01,0-13.52C32.07,17.2,31.245,17.24,30.42,17.232z M26.72,20.131c0.008,3.548-0.008,7.096,0.008,10.644 c0.817,0,1.634-0.008,2.443,0c0.032-3.684,0-7.377,0.016-11.061c-0.809-0.056-1.626,0-2.435-0.032 C26.728,19.827,26.72,19.979,26.72,20.131z M23.052,22.15c-0.024,0.152-0.024,0.312-0.024,0.464 c0.008,2.723-0.008,5.438,0.008,8.161h2.451c0.016-0.961,0-1.914,0.008-2.875c-0.016-1.914,0.024-3.836-0.016-5.751 C24.67,22.158,23.861,22.158,23.052,22.15z",
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
            version: "1.1",
            x: "0px",
            y: "0px",
            enableBackground: "new 0 0 48 48",
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
    l.AlertPhoneIcon = m;
  },
  98,
);
