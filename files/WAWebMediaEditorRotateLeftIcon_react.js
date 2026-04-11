__d(
  "WAWebMediaEditorRotateLeftIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-editor-rotate-left";
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
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.3542 8.1443C6.3542 7.7438 6.03051 7.4185 5.63045 7.4185L5.01611 7.41915C5.03258 5.57318 5.47035 4.24139 6.34295 3.36586C7.23254 2.4733 8.59469 2.03425 10.4907 2.03425H10.6135C10.9457 2.03425 11.2144 1.76409 11.2144 1.43161V0.815805C11.2144 0.415302 10.8908 0.090004 10.4907 0.090004C8.0866 0.090004 6.22855 0.730549 4.97198 1.99134C3.73442 3.23304 3.09655 5.05999 3.07758 7.41919L2.11375 7.4185C1.94433 7.4185 1.78034 7.4781 1.65028 7.58684C1.34333 7.84348 1.30195 8.30096 1.55763 8.60881L3.31599 10.7259C3.344 10.7596 3.37501 10.7907 3.40863 10.8189C3.71579 11.0757 4.17235 11.034 4.42821 10.7259L6.18656 8.60881C6.29491 8.47836 6.3542 8.31399 6.3542 8.1443Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.35864 8.89517V17.2464C9.35864 18.6072 10.4633 19.71 11.8256 19.71H20.143C21.5053 19.71 22.61 18.6072 22.61 17.2464V8.89517C22.61 7.53441 21.5053 6.43158 20.143 6.43158H11.8256C10.4633 6.43158 9.35864 7.53442 9.35864 8.89517ZM11.8256 17.764C11.5391 17.764 11.3071 17.5321 11.3071 17.2464V8.89517C11.3071 8.60945 11.5391 8.37755 11.8256 8.37755H20.143C20.4295 8.37755 20.6615 8.60945 20.6615 8.89517V17.2464C20.6615 17.5321 20.4295 17.764 20.143 17.764H11.8256Z",
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
            fill: "none",
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
    l.MediaEditorRotateLeftIcon = m;
  },
  98,
);
