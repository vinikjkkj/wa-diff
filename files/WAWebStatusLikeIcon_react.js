__d(
  "WAWebStatusLikeIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "status-like";
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(33),
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
      var I = 17,
        T = 18;
      (i != null || f != null) && ((I = i), (T = f));
      var D = l != null ? l : d,
        x = g != null ? g : "0 0 18 17",
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
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("path", {
            fill: "#25D366",
            d: "M8.46488 3.12843C6.98118 1.62981 4.58085 1.62253 3.10357 3.11467C1.62629 4.6068 1.6335 7.03128 3.11719 8.5299L8.60947 14.0774C8.83729 14.3075 9.20665 14.3075 9.43446 14.0774L14.8982 8.56198C16.372 7.06499 16.3674 4.64731 14.8834 3.14842C13.3971 1.64712 10.9956 1.63984 9.51569 3.13464L8.99386 3.66273L8.46488 3.12843Z",
          })),
          (a[17] = A))
        : (A = a[17]);
      var F;
      if (a[18] !== ((n = m) == null ? void 0 : n.border)) {
        var O, B;
        ((F = (s || (s = r("stylex")))((O = m) == null ? void 0 : O.border)),
          (a[18] = (B = m) == null ? void 0 : B.border),
          (a[19] = F));
      } else F = a[19];
      var W;
      a[20] !== F
        ? ((W = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "none",
            d: "M16.3191 9.96952L10.8557 15.4845C9.84525 16.5047 8.19851 16.505 7.1882 15.4845L1.69593 9.93703C-0.552382 7.66611 -0.573625 3.98616 1.6823 1.70755C3.67116 -0.301315 6.74551 -0.531042 8.99542 0.983327C11.2521 -0.525092 14.3225 -0.260789 16.3047 1.74131C18.5559 4.01515 18.568 7.68525 16.3234 9.96514L16.3191 9.96952ZM9.72885 2.93507C9.65591 2.99832 9.5848 3.06485 9.51569 3.13465L8.99387 3.66274L8.46488 3.12843C8.39391 3.05674 8.32083 2.98846 8.24585 2.92359C6.75364 1.63255 4.51018 1.69392 3.10357 3.11467C1.62629 4.60681 1.6335 7.03129 3.1172 8.52991L8.60948 14.0774C8.83729 14.3075 9.20665 14.3075 9.43446 14.0774L14.8982 8.56199C16.372 7.065 16.3674 4.64731 14.8834 3.14843C13.4665 1.71723 11.2179 1.64378 9.72885 2.93507Z",
            className: F,
          })),
          (a[20] = F),
          (a[21] = W))
        : (W = a[21]);
      var q;
      a[22] !== I ||
      a[23] !== T ||
      a[24] !== x ||
      a[25] !== N ||
      a[26] !== w ||
      a[27] !== W
        ? ((q = c.jsxs("svg", {
            viewBox: x,
            height: $,
            width: P,
            preserveAspectRatio: "xMidYMid meet",
            className: N,
            fill: "none",
            children: [w, A, W],
          })),
          (a[22] = I),
          (a[23] = T),
          (a[24] = x),
          (a[25] = N),
          (a[26] = w),
          (a[27] = W),
          (a[28] = q))
        : (q = a[28]);
      var U;
      return (
        a[29] !== p || a[30] !== D || a[31] !== q
          ? ((U = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: D }, p, { children: q }),
            )),
            (a[29] = p),
            (a[30] = D),
            (a[31] = q),
            (a[32] = U))
          : (U = a[32]),
        U
      );
    }
    l.StatusLikeIcon = m;
  },
  98,
);
