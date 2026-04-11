__d(
  "WAWebPaletteOutlineIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "palette-outline";
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
        ? ((M = c.jsx("path", {
            d: "M10 20a9.7 9.7 0 0 1-3.875-.788 10.1 10.1 0 0 1-3.187-2.15 10.1 10.1 0 0 1-2.15-3.187A9.7 9.7 0 0 1 0 10q0-2.074.813-3.9a10.1 10.1 0 0 1 2.2-3.175A10.5 10.5 0 0 1 6.25.788 10 10 0 0 1 10.2 0q2 0 3.775.688a9.9 9.9 0 0 1 3.112 1.9 9.1 9.1 0 0 1 2.125 2.875A8.3 8.3 0 0 1 20 9.05q0 2.875-1.75 4.413Q16.5 15 14 15h-1.85q-.225 0-.312.125a.47.47 0 0 0-.088.275q0 .3.375.862t.375 1.288q0 1.25-.687 1.85T10 20m-5.5-9q.65 0 1.075-.425T6 9.5t-.425-1.075T4.5 8t-1.075.425T3 9.5t.425 1.075T4.5 11m3-4q.65 0 1.075-.425T9 5.5t-.425-1.075T7.5 4t-1.075.425T6 5.5t.425 1.075T7.5 7m5 0q.65 0 1.075-.425T14 5.5t-.425-1.075T12.5 4t-1.075.425T11 5.5t.425 1.075T12.5 7m3 4q.65 0 1.075-.425T17 9.5t-.425-1.075T15.5 8t-1.075.425T14 9.5t.425 1.075T15.5 11M10 18q.224 0 .363-.125a.42.42 0 0 0 .137-.325q0-.35-.375-.825T9.75 15.3q0-1.05.725-1.675T12.25 13H14q1.65 0 2.825-.963Q18 11.076 18 9.05q0-3.025-2.312-5.038Q13.375 2 10.2 2 6.8 2 4.4 4.325T2 10q0 3.325 2.338 5.663T10 18",
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
    l.PaletteOutlineIcon = m;
  },
  98,
);
