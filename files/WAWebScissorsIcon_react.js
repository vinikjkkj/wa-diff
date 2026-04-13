__d(
  "WAWebScissorsIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "scissors";
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
      var M, w, A, F, O;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("circle", {
            cx: 6,
            cy: 18,
            r: 3.125,
            stroke: "currentColor",
            strokeWidth: 1.75,
          })),
          (F = c.jsx("circle", {
            cx: 6,
            cy: 6,
            r: 3.125,
            stroke: "currentColor",
            strokeWidth: 1.75,
          })),
          (O = c.jsx("path", {
            d: "M7.71745 14.7425C7.32693 15.1331 7.32693 15.7662 7.71745 16.1567C8.10798 16.5473 8.74114 16.5473 9.13167 16.1567L11.9372 13.3512L10.523 11.937L7.71745 14.7425Z",
            fill: "currentColor",
          })),
          (M = c.jsx("path", {
            d: "M13.3742 9.08579L14.7884 10.5L20.6956 4.59285C21.0861 4.20232 21.0861 3.56916 20.6956 3.17864C20.305 2.78811 19.6719 2.78811 19.2814 3.17864L13.3742 9.08579Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.01594 7.60173C8.62542 7.21121 7.99226 7.21121 7.60173 7.60173C7.21121 7.99226 7.21121 8.62542 7.60173 9.01594L19.3586 20.7728C19.7492 21.1634 20.3823 21.1634 20.7728 20.7728C21.1634 20.3823 21.1634 19.7492 20.7728 19.3586L9.01594 7.60173ZM12 12.5001C12.2761 12.5001 12.5 12.2762 12.5 12.0001C12.5 11.724 12.2761 11.5001 12 11.5001C11.7239 11.5001 11.5 11.724 11.5 12.0001C11.5 12.2762 11.7239 12.5001 12 12.5001Z",
            fill: "currentColor",
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
            fill: "none",
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
    l.ScissorsIcon = m;
  },
  98,
);
