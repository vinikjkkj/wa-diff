__d(
  "WAWebIcLocalShippingIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-local-shipping";
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
            fill: "currentColor",
            d: "M6 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 3 17H2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 1 16V6c0-.55.2-1.02.59-1.41C1.98 4.19 2.45 4 3 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2h2a1.99 1.99 0 0 1 1.6.8l2.2 2.92c.07.09.12.18.15.28.03.1.05.2.05.32V16c0 .28-.1.52-.29.71-.19.2-.43.29-.71.29h-1c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 18 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 15 17H9c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 6 20Zm0-2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 6 16c-.28 0-.52.1-.71.29-.2.19-.29.43-.29.71 0 .28.1.52.29.71.19.2.43.29.71.29Zm-3-3h.8c.28-.3.6-.54.98-.72A2.7 2.7 0 0 1 6 14c.45 0 .86.1 1.22.28.37.18.7.42.98.72H15V6H3v9Zm15 3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 18 16c-.28 0-.52.1-.71.29-.2.19-.29.43-.29.71 0 .28.1.52.29.71.19.2.43.29.71.29Zm-1-5h4.25L19 10h-2v3Z",
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
    l.IcLocalShippingIcon = m;
  },
  98,
);
