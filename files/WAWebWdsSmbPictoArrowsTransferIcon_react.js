__d(
  "WAWebWdsSmbPictoArrowsTransferIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-picto-arrows-transfer";
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
      var E = 88,
        k = 88;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _,
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
            fill: "#25D366",
            stroke: "#111B21",
            strokeWidth: 1.5,
            d: "m59.67 36.796 1.281-1.28h-44.13a4.234 4.234 0 1 1 0-8.47h44.13l-1.28-1.28-1.789-1.788a4.234 4.234 0 1 1 5.988-5.988l10.298 10.297a4.234 4.234 0 0 1 0 5.988l-9.728 9.727a4.234 4.234 0 0 1-5.988-5.988l1.219-1.218ZM28.322 51.204l-1.28 1.28h44.13a4.234 4.234 0 1 1 0 8.47h-44.13l1.28 1.28 1.788 1.788a4.234 4.234 0 1 1-5.988 5.988L13.825 59.713a4.234 4.234 0 0 1 0-5.988l9.727-9.727a4.234 4.234 0 0 1 5.988 5.988l-1.218 1.218Z",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== $ || n[20] !== N || n[21] !== _
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
          (n[19] = $),
          (n[20] = N),
          (n[21] = _),
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
    l.WdsSmbPictoArrowsTransferIcon = m;
  },
  98,
);
