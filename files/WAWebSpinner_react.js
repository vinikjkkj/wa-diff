__d(
  "WAWebSpinner.react",
  ["VisualCompletionAttributes", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = "xnrop4s-B",
      m = "xoslcoy-B",
      p = {
        accent: { stroke: "x94ds6z", $$css: !0 },
        container: {
          animationName: "x1e112to",
          animationDuration: "x1c74tu6",
          animationTimingFunction: "x1esw782",
          animationIterationCount: "xa4qsjk",
          zIndex: "xhtitgo",
          $$css: !0,
        },
        default: { stroke: "xsg6dc1", $$css: !0 },
        wdsSecondaryLighter: { stroke: "xsg6dc1", $$css: !0 },
        highlight: { stroke: "x94ds6z", $$css: !0 },
        progress: { stroke: "x9ss0fe", $$css: !0 },
        in: { stroke: "x1yzj2yw", $$css: !0 },
        noop: { visibility: "xnpuxes", $$css: !0 },
        out: { stroke: "x14t83b7", $$css: !0 },
        rounded: { strokeLinecap: "x1owpc8m", $$css: !0 },
        square: { strokeLinecap: "x37uqsb", $$css: !0 },
        path: {
          animationName: "xu41xpa",
          animationDuration: "xmg6eyc",
          animationTimingFunction: "x4hg4is",
          animationIterationCount: "xa4qsjk",
          strokeDasharray: "xbla1kb",
          strokeDashoffset: "x1b0o3cz",
          $$css: !0,
        },
        solidwhite: { stroke: "xaccaqi", $$css: !0 },
        white: { stroke: "x12iiw5v", $$css: !0 },
        rotate: {
          transform: "x9tu13d",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        transparent: { stroke: "xmy28x3", $$css: !0 },
        incoming: { stroke: "x1xg270d", $$css: !0 },
        outgoing: { stroke: "xxcrxs2", $$css: !0 },
      },
      _ = 20;
    function f(e) {
      if (e == null) return null;
      var t = Math.ceil(2 * _ * Math.PI);
      return {
        strokeDasharray: t + " " + t,
        strokeDashoffset: t - (e / 100) * t,
      };
    }
    function g(e, t) {
      if (e == null) return null;
      var n = Math.max(Math.min(e, t), 0);
      return (n * 100) / t;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.color,
        a = e.outgoingMsg,
        i = e.progress,
        l = e.stroke,
        u = e.strokeLinecap,
        d = e.viewBoxSide,
        m = u === void 0 ? "round" : u,
        g;
      t[0] !== i ? ((g = f(i)), (t[0] = i), (t[1] = g)) : (g = t[1]);
      var h;
      t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== m
        ? ((h = (s || (s = r("stylex")))(
            m === "round" && p.rounded,
            m === "square" && p.square,
            i == null && p.path,
            typeof n != "string" ? n : p[n],
            a === !1 && p.in,
            a === !0 && p.out,
          )),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = m),
          (t[6] = h))
        : (h = t[6]);
      var y = d / 2,
        C = d / 2,
        b;
      return (
        t[7] !== l || t[8] !== g || t[9] !== h || t[10] !== y || t[11] !== C
          ? ((b = c.jsx("circle", {
              style: g,
              className: h,
              cx: y,
              cy: C,
              r: _,
              fill: "none",
              strokeWidth: l,
            })),
            (t[7] = l),
            (t[8] = g),
            (t[9] = h),
            (t[10] = y),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(33),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.color,
        d = l.max,
        m = l.outgoingMsg,
        f = l.progressContainerColor,
        y = l.size,
        C = l.stroke,
        b = l.strokeLinecap,
        v = l.testid,
        S = l.value,
        R = l.xstyle,
        L = u === void 0 ? "default" : u,
        E = d === void 0 ? 100 : d,
        k = f === void 0 ? "default" : f,
        I = y === void 0 ? 65 : y,
        T = C === void 0 ? 4 : C,
        D = b === void 0 ? "round" : b,
        x = v === void 0 ? "loading-spinner" : v,
        $;
      n[3] !== E || n[4] !== S
        ? (($ = g(S, E)), (n[3] = E), (n[4] = S), (n[5] = $))
        : ($ = n[5]);
      var P = $,
        N = 2 * _ + T,
        M = "0 0 " + N + " " + N,
        w;
      n[6] !== P || n[7] !== R
        ? ((w = (s || (s = r("stylex"))).props(
            (P == null && p.container) || p.rotate,
            R,
          )),
          (n[6] = P),
          (n[7] = R),
          (n[8] = w))
        : (w = n[8]);
      var A;
      n[9] !== m ||
      n[10] !== P ||
      n[11] !== k ||
      n[12] !== T ||
      n[13] !== D ||
      n[14] !== N
        ? ((A =
            P != null
              ? c.jsx(h, {
                  viewBoxSide: N,
                  stroke: T,
                  strokeLinecap: D,
                  outgoingMsg: m,
                  color: k,
                  progress: 100,
                })
              : null),
          (n[9] = m),
          (n[10] = P),
          (n[11] = k),
          (n[12] = T),
          (n[13] = D),
          (n[14] = N),
          (n[15] = A))
        : (A = n[15]);
      var F;
      n[16] !== L ||
      n[17] !== m ||
      n[18] !== P ||
      n[19] !== T ||
      n[20] !== D ||
      n[21] !== N
        ? ((F = c.jsx(h, {
            progress: P,
            viewBoxSide: N,
            stroke: T,
            strokeLinecap: D,
            outgoingMsg: m,
            color: L,
          })),
          (n[16] = L),
          (n[17] = m),
          (n[18] = P),
          (n[19] = T),
          (n[20] = D),
          (n[21] = N),
          (n[22] = F))
        : (F = n[22]);
      var O;
      n[23] !== I || n[24] !== A || n[25] !== F || n[26] !== w || n[27] !== M
        ? ((O = c.jsxs(
            "svg",
            babelHelpers.extends({}, w, {
              width: I,
              height: I,
              viewBox: M,
              role: "status",
              children: [A, F],
            }),
          )),
          (n[23] = I),
          (n[24] = A),
          (n[25] = F),
          (n[26] = w),
          (n[27] = M),
          (n[28] = O))
        : (O = n[28]);
      var B;
      return (
        n[29] !== i || n[30] !== O || n[31] !== x
          ? ((B = c.jsx(
              "span",
              babelHelpers.extends(
                { ref: i, "data-testid": void 0 },
                r("VisualCompletionAttributes").LOADING_STATE,
                { children: O },
              ),
            )),
            (n[29] = i),
            (n[30] = O),
            (n[31] = x),
            (n[32] = B))
          : (B = n[32]),
        B
      );
    }
    ((l.RADIUS = _), (l.Spinner = y));
  },
  98,
);
