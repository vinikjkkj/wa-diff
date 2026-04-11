__d(
  "WAWebShopFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "shop-filled";
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
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M18.2825 5.72255C18.2825 2.65588 15.6178 0.166992 12.3346 0.166992C9.05137 0.166992 6.38672 2.65588 6.38672 5.72255H3.86177C2.60543 5.72255 1.56563 6.63496 1.48726 7.80615L0.674063 19.9591C0.551119 21.7964 2.04611 23.379 4.01323 23.4938C4.08734 23.4982 4.16158 23.5003 4.23584 23.5003H20.1211H20.4316C22.4026 23.5003 24.0003 22.0079 24.0003 20.167C24.0003 20.0976 23.998 20.0283 23.9934 19.9591L23.1802 7.80615C23.1018 6.63496 22.062 5.72255 20.8057 5.72255H18.2825ZM12.3346 2.38921C14.3093 2.38921 15.9033 3.8781 15.9033 5.72255H8.76587C8.76587 3.8781 10.3599 2.38921 12.3346 2.38921ZM12.3364 13.5003C9.49219 13.5003 7.09961 11.7337 6.42822 9.33366C6.2207 8.63366 6.81884 7.94477 7.6123 7.94477C8.18603 7.94477 8.6499 8.32255 8.80859 8.83366C9.23584 10.2448 10.6519 11.2781 12.3364 11.2781C14.021 11.2781 15.437 10.2448 15.8643 8.83366C16.023 8.32255 16.4868 7.94477 17.0606 7.94477C17.854 7.94477 18.4399 8.63366 18.2446 9.33366C17.5732 11.7337 15.1807 13.5003 12.3364 13.5003Z",
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
    l.ShopFilledIcon = m;
  },
  98,
);
