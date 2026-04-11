__d(
  "WAWebBusinessEmailIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-email";
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
      var P, N, M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx("title", { children: "business-email" })),
          (N = c.jsx("desc", { children: "Created with Sketch." })),
          (M = c.jsx("defs", {})),
          (n[14] = P),
          (n[15] = N),
          (n[16] = M))
        : ((P = n[14]), (N = n[15]), (M = n[16]));
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsxs("g", {
            stroke: "none",
            strokeWidth: 1,
            fill: "none",
            fillRule: "evenodd",
            children: [
              c.jsx("path", {
                d: "M20.9169216,8.25409863 L12.2871787,13.5717219 L3.65743574,8.25409863 L3.65743574,6.12704932 L12.2871787,11.4446726 L20.9169216,6.12704932 L20.9169216,8.25409863 Z M20.9169216,4 L3.65743574,4 C2.47084608,4 1.51078718,4.95717219 1.51078718,6.12704932 L1.5,18.8893452 C1.5,20.0592223 2.47084608,21.0163945 3.65743574,21.0163945 L20.9169216,21.0163945 C22.1035113,21.0163945 23.0743574,20.0592223 23.0743574,18.8893452 L23.0743574,6.12704932 C23.0743574,4.95717219 22.1035113,4 20.9169216,4 L20.9169216,4 Z",
                fill: "currentColor",
              }),
              c.jsx("g", {
                id: "slices",
                transform: "translate(0.000000, -480.000000)",
              }),
            ],
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            version: "1.1",
            children: [P, N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = T),
          (n[21] = $),
          (n[22] = A))
        : (A = n[22]);
      var F;
      return (
        n[23] !== u || n[24] !== I || n[25] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = A),
            (n[26] = F))
          : (F = n[26]),
        F
      );
    }
    l.BusinessEmailIcon = m;
  },
  98,
);
