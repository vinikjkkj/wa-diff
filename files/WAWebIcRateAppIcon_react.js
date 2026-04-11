__d(
  "WAWebIcRateAppIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-rate-app";
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
            d: "m12 13.63 2.11 1.276q.304.195.61-.014a.5.5 0 0 0 .221-.568l-.554-2.414 1.886-1.637a.53.53 0 0 0 .167-.596q-.11-.347-.5-.375l-2.469-.194-.971-2.275A.5.5 0 0 0 12 6.5a.5.5 0 0 0-.499.333l-.97 2.275-2.47.194q-.388.028-.5.375a.53.53 0 0 0 .167.596l1.887 1.637-.555 2.414q-.084.36.222.568a.51.51 0 0 0 .61.014z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 4.6A2.6 2.6 0 0 1 4.6 2h14.8A2.6 2.6 0 0 1 22 4.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-3.486l-3.03 3.03a1.25 1.25 0 0 1-1.768 0L8.086 20H4.6A2.6 2.6 0 0 1 2 17.4zM4.6 4a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6h3.693a1.5 1.5 0 0 1 1.06.44L12 21.085l2.646-2.647A1.5 1.5 0 0 1 15.707 18H19.4a.6.6 0 0 0 .6-.6V4.6a.6.6 0 0 0-.6-.6z",
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
    l.IcRateAppIcon = m;
  },
  98,
);
