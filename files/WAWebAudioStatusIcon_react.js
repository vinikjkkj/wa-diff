__d(
  "WAWebAudioStatusIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-status";
    function m(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(33),
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
      var T = 19,
        D = 19;
      (l != null || g != null) && ((T = l), (D = g));
      var x = u != null ? u : d,
        $ = h != null ? h : "0 0 19 19",
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
      var F =
          (s || (s = r("stylex")))((n = p) == null ? void 0 : n.background) +
          " ptt-status-background",
        O;
      i[17] !== F
        ? ((O = c.jsx("path", {
            fill: "#FFFFFF",
            className: F,
            d: "M8.48311 0.463216C4.0294 0.752054 0.757935 4.62515 0.757935 8.95218V13.9874C0.757935 16.0652 2.43806 17.7453 4.51588 17.7453H5.26853C6.92487 17.7453 8.27383 16.3964 8.27383 14.74V14.7294C8.76927 14.8705 9.29428 14.8705 9.78972 14.7294V14.74C9.78972 16.3964 11.1387 17.7453 12.795 17.7453H13.5477C15.6255 17.7453 17.3056 16.0652 17.3056 13.9874V8.71886C17.3056 3.9662 13.297 0.150866 8.48311 0.463216Z",
          })),
          (i[17] = F),
          (i[18] = O))
        : (O = i[18]);
      var B = s((a = p) == null ? void 0 : a.primary) + " ptt-status-icon",
        W;
      i[19] !== B
        ? ((W = c.jsx("path", {
            fill: "currentColor",
            className: B,
            d: "M8.70732 1.89651C5.10966 2.12984 2.38507 5.28343 2.38507 8.88862V13.9238C2.38507 15.1732 3.39362 16.1818 4.64302 16.1818H5.39567C6.22358 16.1818 6.90096 15.5044 6.90096 14.6765V11.6659C6.90096 10.838 6.22358 10.1606 5.39567 10.1606H3.89037V8.87357C3.89037 5.9834 6.11821 3.46955 9.00085 3.38676C11.9889 3.30397 14.4274 5.68986 14.4274 8.6553V10.1606H12.9222C12.0942 10.1606 11.4169 10.838 11.4169 11.6659V14.6765C11.4169 15.5044 12.0942 16.1818 12.9222 16.1818H13.6748C14.9242 16.1818 15.9327 15.1732 15.9327 13.9238V8.6553C15.9327 4.76411 12.6512 1.64061 8.70732 1.89651Z",
          })),
          (i[19] = B),
          (i[20] = W))
        : (W = i[20]);
      var q;
      i[21] !== T ||
      i[22] !== D ||
      i[23] !== $ ||
      i[24] !== W ||
      i[25] !== M ||
      i[26] !== A ||
      i[27] !== O
        ? ((q = c.jsxs("svg", {
            viewBox: $,
            height: P,
            width: N,
            preserveAspectRatio: "xMidYMid meet",
            className: M,
            fill: "none",
            children: [A, O, W],
          })),
          (i[21] = T),
          (i[22] = D),
          (i[23] = $),
          (i[24] = W),
          (i[25] = M),
          (i[26] = A),
          (i[27] = O),
          (i[28] = q))
        : (q = i[28]);
      var U;
      return (
        i[29] !== _ || i[30] !== x || i[31] !== q
          ? ((U = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: x }, _, { children: q }),
            )),
            (i[29] = _),
            (i[30] = x),
            (i[31] = q),
            (i[32] = U))
          : (U = i[32]),
        U
      );
    }
    l.AudioStatusIcon = m;
  },
  98,
);
