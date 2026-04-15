__d(
  "WAWebMastercardLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "mastercard-logo";
    function m(t) {
      var n = o("react-compiler-runtime").c(29),
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
      var E = 13,
        k = 22;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 22 13",
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
        ? ((M = c.jsx("path", {
            d: "M7.932 1.634h6.139v9.731H7.93z",
            style: { fill: "color(display-p3 1 .3725 0)" },
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "M8.564 6.5c0-.937.218-1.862.64-2.705A6.2 6.2 0 0 1 11 1.635 6.5 6.5 0 0 0 7.74.348a6.55 6.55 0 0 0-3.466.587 6.3 6.3 0 0 0-2.618 2.283A6.06 6.06 0 0 0 .683 6.5c0 1.161.337 2.3.972 3.284a6.3 6.3 0 0 0 2.618 2.283 6.55 6.55 0 0 0 3.467.587A6.5 6.5 0 0 0 11 11.367a6.2 6.2 0 0 1-1.796-2.16 6 6 0 0 1-.64-2.707",
            style: { fill: "color(display-p3 .9216 0 .1059)" },
          })),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("path", {
            d: "M20.707 10.336v-.2h.089v-.041h-.21v.041h.082v.2zm.41 0v-.241h-.064l-.075.172-.074-.172h-.064v.24h.046v-.182l.07.157h.047l.07-.157v.183zm.2-3.836c0 1.162-.337 2.3-.972 3.284a6.3 6.3 0 0 1-2.618 2.283 6.55 6.55 0 0 1-3.468.587A6.5 6.5 0 0 1 11 11.365a6.2 6.2 0 0 0 1.795-2.16 6.04 6.04 0 0 0 .642-2.705 6.04 6.04 0 0 0-.642-2.706A6.2 6.2 0 0 0 11 1.634 6.5 6.5 0 0 1 14.26.345a6.55 6.55 0 0 1 3.468.587 6.3 6.3 0 0 1 2.618 2.283c.635.985.972 2.122.972 3.284z",
            style: { fill: "color(display-p3 .9686 .6196 .1059)" },
          })),
          (n[18] = A))
        : (A = n[18]);
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w, A],
          })),
          (n[19] = E),
          (n[20] = k),
          (n[21] = T),
          (n[22] = $),
          (n[23] = N),
          (n[24] = F))
        : (F = n[24]);
      var O;
      return (
        n[25] !== u || n[26] !== I || n[27] !== F
          ? ((O = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: F }),
            )),
            (n[25] = u),
            (n[26] = I),
            (n[27] = F),
            (n[28] = O))
          : (O = n[28]),
        O
      );
    }
    l.MastercardLogoIcon = m;
  },
  98,
);
