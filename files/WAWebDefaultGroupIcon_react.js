__d(
  "WAWebDefaultGroupIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "default-group";
    function m(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(37),
        l,
        u,
        m,
        p,
        _,
        f,
        g;
      i[0] !== t
        ? ((l = t.height),
          (m = t.iconXstyle),
          (p = t.innerStyles),
          (u = t.name),
          (f = t.viewBox),
          (g = t.width),
          (_ = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = m),
          (i[4] = p),
          (i[5] = _),
          (i[6] = f),
          (i[7] = g))
        : ((l = i[1]),
          (u = i[2]),
          (m = i[3]),
          (p = i[4]),
          (_ = i[5]),
          (f = i[6]),
          (g = i[7]));
      var h;
      if (f) {
        var y = f,
          C = y.height,
          b = y.width,
          v = y.x,
          S = y.y,
          R = C === void 0 ? 0 : C,
          L = b === void 0 ? 0 : b,
          E = v === void 0 ? 0 : v,
          k = S === void 0 ? 0 : S,
          I;
        (i[8] !== R || i[9] !== L || i[10] !== E || i[11] !== k
          ? ((I = [E, k, L, R]),
            (i[8] = R),
            (i[9] = L),
            (i[10] = E),
            (i[11] = k),
            (i[12] = I))
          : (I = i[12]),
          (h = I.join(" ")));
      }
      var T = 212,
        D = 212;
      (l != null || g != null) && ((T = l), (D = g));
      var x = u != null ? u : d,
        $ = h != null ? h : "0 0 212 212",
        P = T,
        N = D,
        M;
      i[13] !== m
        ? ((M = (s || (s = r("stylex")))(m)), (i[13] = m), (i[14] = M))
        : (M = i[14]);
      var w = u != null ? u : d,
        A;
      i[15] !== w
        ? ((A = c.jsx("title", { children: w })), (i[15] = w), (i[16] = A))
        : (A = i[16]);
      var F;
      if (i[17] !== ((n = p) == null ? void 0 : n.background)) {
        var O, B;
        ((F = (s || (s = r("stylex")))(
          (O = p) == null ? void 0 : O.background,
        )),
          (i[17] = (B = p) == null ? void 0 : B.background),
          (i[18] = F));
      } else F = i[18];
      var W;
      i[19] !== F
        ? ((W = c.jsx("path", {
            d: "M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z",
            fill: "#DFE5E7",
            className: F,
          })),
          (i[19] = F),
          (i[20] = W))
        : (W = i[20]);
      var q;
      if (i[21] !== ((a = p) == null ? void 0 : a.primary)) {
        var U, V;
        ((q = (s || (s = r("stylex")))((U = p) == null ? void 0 : U.primary)),
          (i[21] = (V = p) == null ? void 0 : V.primary),
          (i[22] = q));
      } else q = i[22];
      var H;
      i[23] !== q
        ? ((H = c.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z",
            className: q,
          })),
          (i[23] = q),
          (i[24] = H))
        : (H = i[24]);
      var G;
      i[25] !== T ||
      i[26] !== D ||
      i[27] !== $ ||
      i[28] !== H ||
      i[29] !== M ||
      i[30] !== A ||
      i[31] !== W
        ? ((G = c.jsxs("svg", {
            viewBox: $,
            height: P,
            width: N,
            preserveAspectRatio: "xMidYMid meet",
            className: M,
            fill: "none",
            children: [A, W, H],
          })),
          (i[25] = T),
          (i[26] = D),
          (i[27] = $),
          (i[28] = H),
          (i[29] = M),
          (i[30] = A),
          (i[31] = W),
          (i[32] = G))
        : (G = i[32]);
      var z;
      return (
        i[33] !== _ || i[34] !== x || i[35] !== G
          ? ((z = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: x }, _, { children: G }),
            )),
            (i[33] = _),
            (i[34] = x),
            (i[35] = G),
            (i[36] = z))
          : (z = i[36]),
        z
      );
    }
    l.DefaultGroupIcon = m;
  },
  98,
);
