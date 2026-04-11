__d(
  "WAWebWdsPictoAiIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-ai";
    function m(t) {
      var n = o("react-compiler-runtime").c(31),
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
        T = _ != null ? _ : "0 0 88 88",
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
      var M, w, A, F, O;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("style", {
            children: ".st0{fill:#25d366;stroke:#111b21;stroke-width:1.5}",
          })),
          (F = c.jsx("path", {
            d: "m49.2 22.2-2.8-.6c-1.6-.3-2.7-2-2.4-3.6.3-1.6 2-2.7 3.6-2.4l2.8.6.6-2.8c.3-1.6 2-2.7 3.6-2.4 1.6.3 2.7 2 2.4 3.6l-.6 2.8 2.7.6c1.6.3 2.7 2 2.4 3.6-.3 1.4-1.6 2.4-3 2.4-.2 0-.4 0-.6-.1l-2.7-.6-.6 2.7c-.3 1.4-1.6 2.4-3 2.4-.2 0-.4 0-.6-.1-1.6-.3-2.7-2-2.4-3.6l.6-2.5z",
            className: "st0",
          })),
          (O = c.jsx("path", {
            d: "m74.7 31.6.9 10.4c.1 1.1-.4 2.1-1.3 2.7-.5.4-1.1.6-1.7.6-.4 0-.9-.1-1.3-.3l-9.5-4.4c-1-.5-1.7-1.4-1.7-2.5-.1-1.1.4-2.1 1.3-2.7l8.6-6c.9-.6 2-.7 3-.3.9.5 1.6 1.5 1.7 2.5z",
            className: "st0",
          })),
          (M = c.jsx("path", {
            d: "M19.5 40c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2-7.2 3.2-7.2 7.2 3.3 7.2 7.2 7.2z",
            className: "st0",
          })),
          (w = c.jsx("path", {
            d: "M61.2 49.9c2.4 1.1 2.6 3.3 2.6 4 0 .8-.3 3-2.6 4l-10.5 4.5c-.5.2-1 .7-1.3 1.3l-4.6 10.7c-1 2.4-3.4 2.6-4 2.6-.7 0-2.9-.2-4-2.6l-4.9-10.8c-.3-.6-.7-1-1.2-1.2L20.5 58c-2.4-1-2.6-3.3-2.6-4 0-.7.3-3 2.7-4l10.6-4.5c.5-.2 1-.7 1.3-1.3L37 33.8c1-2.5 3.4-2.7 4-2.7s3 .2 4 2.7l4.5 10.5c.2.5.7 1 1.2 1.2l10.5 4.4z",
            className: "st0",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F),
          (n[20] = O))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]), (O = n[20]));
      var B;
      n[21] !== E || n[22] !== k || n[23] !== T || n[24] !== $ || n[25] !== N
        ? ((B = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            id: "Layer_1",
            x: "0",
            y: "0",
            version: "1.1",
            children: [N, A, F, O, M, w],
          })),
          (n[21] = E),
          (n[22] = k),
          (n[23] = T),
          (n[24] = $),
          (n[25] = N),
          (n[26] = B))
        : (B = n[26]);
      var W;
      return (
        n[27] !== u || n[28] !== I || n[29] !== B
          ? ((W = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: B }),
            )),
            (n[27] = u),
            (n[28] = I),
            (n[29] = B),
            (n[30] = W))
          : (W = n[30]),
        W
      );
    }
    l.WdsPictoAiIcon = m;
  },
  98,
);
