__d(
  "WAWebListMsgIconIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "list-msg-icon";
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
      var E = 12,
        k = 15;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 -4 15 20",
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
        ? ((M = c.jsx("g", {
            id: "Page-1",
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: c.jsxs("g", {
              id: "format_list_bulleted-black-18dp",
              transform: "translate(-1.000000, -3.000000)",
              children: [
                c.jsx("polygon", { id: "Path", points: "0 0 18 0 18 18 0 18" }),
                c.jsx("path", {
                  d: "M3,7.875 C2.3775,7.875 1.875,8.3775 1.875,9 C1.875,9.6225 2.3775,10.125 3,10.125 C3.6225,10.125 4.125,9.6225 4.125,9 C4.125,8.3775 3.6225,7.875 3,7.875 Z M3,3.375 C2.3775,3.375 1.875,3.8775 1.875,4.5 C1.875,5.1225 2.3775,5.625 3,5.625 C3.6225,5.625 4.125,5.1225 4.125,4.5 C4.125,3.8775 3.6225,3.375 3,3.375 Z M3,12.375 C2.3775,12.375 1.875,12.885 1.875,13.5 C1.875,14.115 2.385,14.625 3,14.625 C3.615,14.625 4.125,14.115 4.125,13.5 C4.125,12.885 3.6225,12.375 3,12.375 Z M5.25,14.25 L15.75,14.25 L15.75,12.75 L5.25,12.75 L5.25,14.25 Z M5.25,9.75 L15.75,9.75 L15.75,8.25 L5.25,8.25 L5.25,9.75 Z M5.25,3.75 L5.25,5.25 L15.75,5.25 L15.75,3.75 L5.25,3.75 Z",
                  id: "Shape",
                  fill: "currentColor",
                  fillRule: "nonzero",
                }),
              ],
            }),
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
            version: "1.1",
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
    l.ListMsgIconIcon = m;
  },
  98,
);
