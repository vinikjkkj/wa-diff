__d(
  "WAWebSearchPluginGoogleIconIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "search-plugin-google-icon";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
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
      var E = 21,
        k = 20;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 20 21",
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
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.9999 10.436C19.9999 9.71244 19.935 9.01671 19.8144 8.34882H10.2041V12.3005H15.6957C15.4545 13.5714 14.731 14.6475 13.6456 15.371V17.9406H16.9573C18.8868 16.1595 19.9999 13.5436 19.9999 10.436Z",
            fill: "#4285F4",
          })),
          (A = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.2041 20.4081C12.9592 20.4081 15.269 19.499 16.9573 17.9406L13.6456 15.3711C12.7366 15.9833 11.577 16.3544 10.2041 16.3544C7.55108 16.3544 5.29692 14.564 4.48988 12.1522H1.09473V14.7866C2.77375 18.1169 6.21528 20.4081 10.2041 20.4081Z",
            fill: "#34A853",
          })),
          (F = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.48976 12.1427C4.28568 11.5305 4.16509 10.8812 4.16509 10.204C4.16509 9.52681 4.28568 8.87747 4.48976 8.26523V5.63074H1.09461C0.398884 7.00364 0 8.55279 0 10.204C0 11.8552 0.398884 13.4043 1.09461 14.7772L3.73837 12.7179L4.48976 12.1427Z",
            fill: "#FBBC05",
          })),
          (M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.2041 4.06305C11.7069 4.06305 13.0427 4.58252 14.1095 5.58437L17.0315 2.66232C15.2597 1.01112 12.9592 0 10.2041 0C6.21528 0 2.77375 2.29126 1.09473 5.63075L4.48988 8.26524C5.29692 5.85339 7.55108 4.06305 10.2041 4.06305Z",
            fill: "#EA4335",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.SearchPluginGoogleIconIcon = m;
  },
  98,
);
