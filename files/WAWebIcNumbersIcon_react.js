__d(
  "WAWebIcNumbersIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-numbers";
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
            d: "m9 16-.82 3.27a.91.91 0 0 1-.93.73.95.95 0 0 1-.77-.38.88.88 0 0 1-.18-.82L7 16H4.28a.96.96 0 0 1-.8-.39.95.95 0 0 1-.18-.86.88.88 0 0 1 .35-.55c.18-.13.4-.2.63-.2H7.5l1-4H5.78a.96.96 0 0 1-.8-.39.95.95 0 0 1-.18-.86.88.88 0 0 1 .35-.55c.18-.13.4-.2.63-.2H9l.83-3.28a.92.92 0 0 1 .92-.72c.32 0 .57.13.78.38.2.25.25.52.17.82L11 8h4l.82-3.28a.91.91 0 0 1 .93-.72c.32 0 .57.13.77.38.2.25.26.52.18.82L17 8h2.73c.33 0 .6.13.8.39.2.26.25.54.17.86a.88.88 0 0 1-.35.55c-.18.13-.4.2-.63.2H16.5l-1 4h2.73c.33 0 .6.13.8.39.2.26.25.54.17.86a.88.88 0 0 1-.35.55c-.18.13-.4.2-.63.2H15l-.82 3.27a.91.91 0 0 1-.93.73.95.95 0 0 1-.78-.38.88.88 0 0 1-.17-.82L13 16H9Zm.5-2h4l1-4h-4l-1 4Z",
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
    l.IcNumbersIcon = m;
  },
  98,
);
