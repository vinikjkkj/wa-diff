__d(
  "WAWebDefaultNewsletterIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "default-newsletter";
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
        ? ((W = c.jsx("rect", {
            width: 212,
            height: 212,
            rx: 106,
            fill: "currentColor",
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
            d: "M157.123 99.0265C154.027 75.5432 134.626 56.8186 111.097 54.6979C80.5503 51.9047 55.3184 75.388 54.7508 105.906C54.5444 116.872 58.7239 126.286 60.8395 130.32L54.6992 150.648C53.5124 154.579 57.1759 158.252 61.0975 157.062L81.1179 151.062C88.7546 155.304 97.3201 157.528 106.092 157.528C136.742 157.528 161.2 130.527 157.072 99.0265H157.123ZM85.7103 119.82C87.1034 121.889 86.9486 124.682 85.1943 126.441C82.8723 128.82 79.0024 128.355 77.1448 125.562C73.3781 119.975 71.1593 113.199 71.1593 105.958C71.1593 98.7161 73.5329 91.4229 77.6092 85.6813C79.4152 83.1468 83.1819 82.9916 85.4007 85.2158C87.2066 87.0262 87.3614 89.8194 85.9167 91.8884C83.1303 95.8712 81.5307 100.733 81.5307 105.958C81.5307 111.182 83.1303 115.837 85.8135 119.768L85.7103 119.82ZM106.35 113.716C102.067 113.716 98.61 110.251 98.61 105.958C98.61 101.664 102.067 98.1989 106.35 98.1989C110.633 98.1989 114.09 101.664 114.09 105.958C114.09 110.251 110.633 113.716 106.35 113.716ZM134.471 126.337C132.665 128.872 128.899 129.027 126.732 126.803C124.926 124.993 124.771 122.199 126.216 120.13C129.002 116.148 130.653 111.234 130.653 106.009C130.653 100.785 128.95 95.7678 126.112 91.7849C124.616 89.6642 124.719 86.8193 126.525 84.9572C128.692 82.7847 132.407 82.8882 134.265 85.4227C138.496 91.216 140.973 98.3023 140.973 106.061C140.973 113.82 138.548 120.648 134.471 126.389V126.337Z",
            fill: "#FFFFFF",
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
    l.DefaultNewsletterIcon = m;
  },
  98,
);
