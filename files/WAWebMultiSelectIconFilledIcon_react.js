__d(
  "WAWebMultiSelectIconFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "multi-select-icon-filled";
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
      var T = 12,
        D = 19;
      (l != null || g != null) && ((T = l), (D = g));
      var x = u != null ? u : d,
        $ = h,
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
            fill: "#0A1014",
            d: "m12.3 6.9-1.08-1.07a.47.47 0 0 0-.35-.14.47.47 0 0 0-.34.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.82c.1-.1.14-.21.14-.35a.47.47 0 0 0-.13-.35.47.47 0 0 0-.36-.14.47.47 0 0 0-.34.14zM13 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 8.4 4.05 5.05 5.05 0 0 1 13 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 13 11",
            className: F,
          })),
          (i[19] = F),
          (i[20] = W))
        : (W = i[20]);
      var q;
      if (i[21] !== ((a = p) == null ? void 0 : a.background)) {
        var U, V;
        ((q = (s || (s = r("stylex")))(
          (U = p) == null ? void 0 : U.background,
        )),
          (i[21] = (V = p) == null ? void 0 : V.background),
          (i[22] = q));
      } else q = i[22];
      var H;
      i[23] !== q
        ? ((H = c.jsx("path", {
            fill: "#0A1014",
            d: "M8.72 10.2A4.87 4.87 0 0 1 6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 2.71.8 5.98 5.98 0 0 0-1.65 3.34L5.3 6.9 4.22 5.83a.47.47 0 0 0-.34-.14.47.47 0 0 0-.35.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l1.38-1.38a5.93 5.93 0 0 0 1.69 3.63",
            className: q,
          })),
          (i[23] = q),
          (i[24] = H))
        : (H = i[24]);
      var G;
      i[25] !== T ||
      i[26] !== D ||
      i[27] !== H ||
      i[28] !== M ||
      i[29] !== A ||
      i[30] !== W ||
      i[31] !== h
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
          (i[27] = H),
          (i[28] = M),
          (i[29] = A),
          (i[30] = W),
          (i[31] = h),
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
    l.MultiSelectIconFilledIcon = m;
  },
  98,
);
