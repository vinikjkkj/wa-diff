__d(
  "BaseProgressRingIndeterminate.react",
  ["fbt", "ariaGlimmerProps", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 24,
      m = 2,
      p = "x1m1m39n-B",
      _ = "x1k35ma4-B",
      f = "x2un0yo-B",
      g = "xz9a51c-B",
      h = "x1bt8ye9-B",
      y = "xaeq8qu-B",
      C = "x1941mlr-B",
      b = "xjo493o-B",
      v = "xyllbq6-B",
      S = {
        animationFillModeAndTimingFn: {
          animationFillMode: "x1u6ievf",
          animationTimingFunction: "x1wnkzza",
          $$css: !0,
        },
        foregroundCircle: {
          animationDuration: "x1c74tu6",
          animationFillMode: "x1u6ievf",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xuxiujg",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        foregroundCircle12: { animationName: "x1iqdq0d", $$css: !0 },
        foregroundCircle16: { animationName: "x1koaglw", $$css: !0 },
        foregroundCircle20: { animationName: "x16tkgvi", $$css: !0 },
        foregroundCircle24: { animationName: "xiepp7r", $$css: !0 },
        foregroundCircle32: { animationName: "x1pb3rhs", $$css: !0 },
        foregroundCircle48: { animationName: "x1w90wak", $$css: !0 },
        foregroundCircle60: { animationName: "x1jrcm85", $$css: !0 },
        foregroundCircle72: { animationName: "xnw30k", $$css: !0 },
        rotationCircle: {
          animationDuration: "x1c74tu6",
          animationIterationCount: "xa4qsjk",
          animationName: "x1kfoseq",
          animationTimingFunction: "x193epu2",
          outline: "x1a2a7pz",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        stroke: { stroke: "x137613r", $$css: !0 },
      },
      R = {
        12: S.foregroundCircle12,
        16: S.foregroundCircle16,
        20: S.foregroundCircle20,
        24: S.foregroundCircle24,
        32: S.foregroundCircle32,
        48: S.foregroundCircle48,
        60: S.foregroundCircle60,
        72: S.foregroundCircle72,
      };
    function L(t) {
      var n = o("react-compiler-runtime").c(51),
        a = t.animationXstyle,
        i = t.focusable,
        l = t.isDecorative,
        u = t.pathLength,
        p = t.ref,
        _ = t.size,
        f = t.sizeVariant,
        g = t.strokeOverride,
        h = t.strokeWidth,
        y = t.typeVariant,
        C = t.xstyle,
        b = t["aria-label"],
        v = t["aria-labelledby"],
        L = i === void 0 ? !0 : i,
        E = l === void 0 ? !1 : l,
        k = _ === void 0 ? d : _,
        I = h === void 0 ? m : h,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q;
      if (
        n[0] !== a ||
        n[1] !== b ||
        n[2] !== v ||
        n[3] !== L ||
        n[4] !== E ||
        n[5] !== p ||
        n[6] !== k ||
        n[7] !== f ||
        n[8] !== I ||
        n[9] !== y ||
        n[10] !== C
      ) {
        var U,
          V,
          H,
          G,
          z = y
            ? babelHelpers.extends(
                { focusable: !0, isDecorative: !1, strokeWidth: m },
                y,
              )
            : {
                focusable: L,
                isDecorative: E,
                strokeWidth: I,
                xstyleConfig: { svg: C },
              };
        ((x = f
          ? babelHelpers.extends({ size: d }, f)
          : { size: k, xstyleConfig: { circle: R[k] } }),
          (D = (U = x.strokeWidth) != null ? U : z.strokeWidth),
          (T = (x.size - D) * Math.PI),
          (O = (V = z.isDecorative) != null ? V : void 0),
          n[25] !== b || n[26] !== v
            ? ((B =
                v == null
                  ? b != null
                    ? b
                    : s._(/*BTDS*/ "Loading...")
                  : void 0),
              (n[25] = b),
              (n[26] = v),
              (n[27] = B))
            : (B = n[27]),
          (W = v),
          (q = (e || (e = r("stylex"))).props(
            S.rotationCircle,
            S.animationFillModeAndTimingFn,
            S.stroke,
            (H = z.xstyleConfig) == null ? void 0 : H.svg,
          )),
          ($ = x.size),
          (P = p),
          (N = "status"),
          (M =
            z.focusable && !z.isDecorative
              ? r("ariaGlimmerProps").tabIndex
              : void 0),
          (w = "0 0 " + x.size + " " + x.size),
          (A = x.size),
          (F = e.props([
            S.foregroundCircle,
            (G = x.xstyleConfig) == null ? void 0 : G.circle,
            a,
          ])),
          (n[0] = a),
          (n[1] = b),
          (n[2] = v),
          (n[3] = L),
          (n[4] = E),
          (n[5] = p),
          (n[6] = k),
          (n[7] = f),
          (n[8] = I),
          (n[9] = y),
          (n[10] = C),
          (n[11] = T),
          (n[12] = D),
          (n[13] = x),
          (n[14] = $),
          (n[15] = P),
          (n[16] = N),
          (n[17] = M),
          (n[18] = w),
          (n[19] = A),
          (n[20] = F),
          (n[21] = O),
          (n[22] = B),
          (n[23] = W),
          (n[24] = q));
      } else
        ((T = n[11]),
          (D = n[12]),
          (x = n[13]),
          ($ = n[14]),
          (P = n[15]),
          (N = n[16]),
          (M = n[17]),
          (w = n[18]),
          (A = n[19]),
          (F = n[20]),
          (O = n[21]),
          (B = n[22]),
          (W = n[23]),
          (q = n[24]));
      var j = x.size / 2,
        K = x.size / 2,
        Q = (x.size - D) / 2,
        X = u != null ? u : T,
        Y;
      n[28] !== g
        ? ((Y = g != null ? { stroke: g } : void 0), (n[28] = g), (n[29] = Y))
        : (Y = n[29]);
      var J;
      n[30] !== D ||
      n[31] !== u ||
      n[32] !== j ||
      n[33] !== K ||
      n[34] !== Q ||
      n[35] !== X ||
      n[36] !== Y ||
      n[37] !== F
        ? ((J = c.jsx(
            "circle",
            babelHelpers.extends({}, F, {
              cx: j,
              cy: K,
              fill: "none",
              pathLength: u,
              r: Q,
              strokeDasharray: X,
              strokeWidth: D,
              style: Y,
            }),
          )),
          (n[30] = D),
          (n[31] = u),
          (n[32] = j),
          (n[33] = K),
          (n[34] = Q),
          (n[35] = X),
          (n[36] = Y),
          (n[37] = F),
          (n[38] = J))
        : (J = n[38]);
      var Z;
      return (
        n[39] !== $ ||
        n[40] !== P ||
        n[41] !== N ||
        n[42] !== M ||
        n[43] !== w ||
        n[44] !== A ||
        n[45] !== J ||
        n[46] !== O ||
        n[47] !== B ||
        n[48] !== W ||
        n[49] !== q
          ? ((Z = c.jsx(
              "svg",
              babelHelpers.extends(
                { "aria-hidden": O, "aria-label": B, "aria-labelledby": W },
                q,
                {
                  height: $,
                  ref: P,
                  role: N,
                  tabIndex: M,
                  viewBox: w,
                  width: A,
                  children: J,
                },
              ),
            )),
            (n[39] = $),
            (n[40] = P),
            (n[41] = N),
            (n[42] = M),
            (n[43] = w),
            (n[44] = A),
            (n[45] = J),
            (n[46] = O),
            (n[47] = B),
            (n[48] = W),
            (n[49] = q),
            (n[50] = Z))
          : (Z = n[50]),
        Z
      );
    }
    l.default = L;
  },
  226,
);
