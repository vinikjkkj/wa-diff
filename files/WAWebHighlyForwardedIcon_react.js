__d(
  "WAWebHighlyForwardedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "highly-forwarded";
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
      var E = 16,
        k = 20;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 20 16",
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
            d: "M13.6059557,5.26308901 C13.6220086,5.26163419 13.6302968,5.26102868 13.6302968,5.26102868 L13.6666317,3.82396292 C13.6881611,2.97246613 14.1900805,2.77489995 14.7806307,3.3754967 L18.4132486,7.06991365 C18.7126057,7.37436354 18.7160739,7.87287893 18.4230266,8.18124118 L14.7679628,12.0273223 C14.1812438,12.6447038 13.7056141,12.4510723 13.7056141,11.6045324 L13.7056141,9.93754567 L14.8701549,8.71214475 C15.4496567,8.10235763 15.441656,7.13001879 14.8512575,6.52957627 L13.6059557,5.26308901 L13.6059557,5.26308901 Z",
            fillOpacity: 0.25,
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M9.55511091,3.82396292 C9.57664026,2.97246613 10.0785597,2.77489995 10.6691099,3.3754967 L14.3017278,7.06991365 C14.6010849,7.37436354 14.6045531,7.87287893 14.3115058,8.18124118 L10.656442,12.0273223 C10.069723,12.6447038 9.59409325,12.4510723 9.59409325,11.6045324 L9.59409325,9.87219486 C9.59409325,9.87219486 5.03474338,9.49878283 2.43099409,12.3846575 C1.83824676,12.8974744 1.66218866,12.9568393 1.47026458,12.8572726 C1.32851376,12.7423664 1.28325362,12.3846575 1.73218749,11.260453 C3.56459895,5.69602505 9.51877595,5.26102868 9.51877595,5.26102868 L9.55511091,3.82396292 Z",
            fillOpacity: 0.4,
            fill: "currentColor",
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
    l.HighlyForwardedIcon = m;
  },
  98,
);
