__d(
  "WAWebIcCheckCircleFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-check-circle-filled";
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(32),
        i,
        l,
        u,
        m,
        p,
        _,
        f;
      a[0] !== t
        ? ((i = t.height),
          (u = t.iconXstyle),
          (m = t.innerStyles),
          (l = t.name),
          (_ = t.viewBox),
          (f = t.width),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = u),
          (a[4] = m),
          (a[5] = p),
          (a[6] = _),
          (a[7] = f))
        : ((i = a[1]),
          (l = a[2]),
          (u = a[3]),
          (m = a[4]),
          (p = a[5]),
          (_ = a[6]),
          (f = a[7]));
      var g;
      if (_) {
        var h = _,
          y = h.height,
          C = h.width,
          b = h.x,
          v = h.y,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L = b === void 0 ? 0 : b,
          E = v === void 0 ? 0 : v,
          k;
        (a[8] !== S || a[9] !== R || a[10] !== L || a[11] !== E
          ? ((k = [L, E, R, S]),
            (a[8] = S),
            (a[9] = R),
            (a[10] = L),
            (a[11] = E),
            (a[12] = k))
          : (k = a[12]),
          (g = k.join(" ")));
      }
      var I = 12,
        T = 12;
      (i != null || f != null) && ((I = i), (T = f));
      var D = l != null ? l : d,
        x = g,
        $ = I,
        P = T,
        N;
      a[13] !== u
        ? ((N = (s || (s = r("stylex")))(u)), (a[13] = u), (a[14] = N))
        : (N = a[14]);
      var M = l != null ? l : d,
        w;
      a[15] !== M
        ? ((w = c.jsx("title", { children: M })), (a[15] = M), (a[16] = w))
        : (w = a[16]);
      var A;
      if (a[17] !== ((n = m) == null ? void 0 : n.background)) {
        var F, O;
        ((A = (s || (s = r("stylex")))(
          (F = m) == null ? void 0 : F.background,
        )),
          (a[17] = (O = m) == null ? void 0 : O.background),
          (a[18] = A));
      } else A = a[18];
      var B;
      a[19] !== A
        ? ((B = c.jsx("path", {
            fill: "#0A1014",
            d: "M5.3 6.9 4.22 5.82a.47.47 0 0 0-.34-.13.47.47 0 0 0-.35.13c-.1.1-.14.21-.14.35 0 .15.04.26.13.36l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.83c.1-.09.14-.2.14-.34a.47.47 0 0 0-.13-.36.47.47 0 0 0-.36-.13.47.47 0 0 0-.34.13zM6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 6 11",
            className: A,
          })),
          (a[19] = A),
          (a[20] = B))
        : (B = a[20]);
      var W;
      a[21] !== I ||
      a[22] !== T ||
      a[23] !== N ||
      a[24] !== w ||
      a[25] !== B ||
      a[26] !== g
        ? ((W = c.jsxs("svg", {
            viewBox: x,
            height: $,
            width: P,
            preserveAspectRatio: "xMidYMid meet",
            className: N,
            fill: "none",
            children: [w, B],
          })),
          (a[21] = I),
          (a[22] = T),
          (a[23] = N),
          (a[24] = w),
          (a[25] = B),
          (a[26] = g),
          (a[27] = W))
        : (W = a[27]);
      var q;
      return (
        a[28] !== p || a[29] !== D || a[30] !== W
          ? ((q = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: D }, p, { children: W }),
            )),
            (a[28] = p),
            (a[29] = D),
            (a[30] = W),
            (a[31] = q))
          : (q = a[31]),
        q
      );
    }
    l.IcCheckCircleFilledIcon = m;
  },
  98,
);
