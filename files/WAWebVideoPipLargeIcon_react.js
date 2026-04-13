__d(
  "WAWebVideoPipLargeIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-pip-large";
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
      var E = 28,
        k = 37;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 37 28",
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
            d: "M33.8354224,11.9998779 L22.16,11.9998779 C20.96768,11.9998779 20,11.0321979 20,9.83987797 L20,3.15999996 C20,1.96767998 20.96768,1 22.16,1 L33.8354224,1 C35.0277424,1 35.9954224,1.96767998 35.9954224,3.15999996 L35.9954224,9.83987797 C35.9954224,11.0321979 35.0277424,11.9998779 33.8354224,11.9998779 Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M17.5694596,5 L17.5694596,7 L4.15999996,7 C3.51933499,7 3,7.51951438 2.99999977,8.15932623 L3.01055908,23.8326453 C3.01055908,24.4731309 3.52989407,24.9926453 4.17055904,24.9926453 L27.850046,24.9926453 C28.4900723,24.9926453 29.0100192,24.4726895 29.0100198,23.8337553 L28.9994607,14.320724 L30.9994595,14.3185041 L31.0100192,23.8326453 C31.0100192,25.5772513 29.5946495,26.9926453 27.850046,26.9926453 L4.17055904,26.9926453 C2.42516991,26.9926453 1.01055908,25.5775458 1.01055931,23.833319 L1,8.15999996 C1,6.41509947 2.41461083,5 4.15999996,5 L17.5694596,5 Z",
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
    l.VideoPipLargeIcon = m;
  },
  98,
);
