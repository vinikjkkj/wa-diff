__d(
  "BaseText.react",
  [
    "BaseLineClamp.react",
    "BaseTextContext",
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        base: {
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          whiteSpace: "x1fj9vlw",
          wordBreak: "x13faqbe",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        block: {
          "::after_content": "x1s928wv",
          "::after_display": "xhkezso",
          "::after_height": "x1gmr53x",
          "::before_content": "x1cpjm7i",
          "::before_display": "x1fgarty",
          "::before_height": "x1943h6x",
          $$css: !0,
        },
        inline: { display: "xt0psk2", $$css: !0 },
      },
      p = {
        1: { "::before_marginTop": "x1ckan80", $$css: !0 },
        2: { "::before_marginTop": "x1s3etm8", $$css: !0 },
        3: { "::before_marginTop": "x1tu3fi", $$css: !0 },
        4: { "::before_marginTop": "x4zkp8e", $$css: !0 },
        5: { "::before_marginTop": "xudqn12", $$css: !0 },
        6: { "::before_marginTop": "xtoi2st", $$css: !0 },
        7: { "::before_marginTop": "x14z4hjw", $$css: !0 },
        8: { "::before_marginTop": "x1ill7wo", $$css: !0 },
        9: { "::before_marginTop": "xhau9xz", $$css: !0 },
        10: { "::before_marginTop": "x14qwyeo", $$css: !0 },
        11: { "::before_marginTop": "xb4g69", $$css: !0 },
        12: { "::before_marginTop": "x1rov3wm", $$css: !0 },
      },
      _ = {
        1: { "::after_marginBottom": "xo8pqpo", $$css: !0 },
        2: { "::after_marginBottom": "xlf94lp", $$css: !0 },
        3: { "::after_marginBottom": "x676frb", $$css: !0 },
        4: { "::after_marginBottom": "x3x7a5m", $$css: !0 },
        5: { "::after_marginBottom": "x41vudc", $$css: !0 },
        6: { "::after_marginBottom": "xw06pyt", $$css: !0 },
        7: { "::after_marginBottom": "x1g2y4wz", $$css: !0 },
        8: { "::after_marginBottom": "x1x48ksl", $$css: !0 },
        9: { "::after_marginBottom": "x1guzi96", $$css: !0 },
        10: { "::after_marginBottom": "x1y9wsrc", $$css: !0 },
        11: { "::after_marginBottom": "xykhf1w", $$css: !0 },
        12: { "::after_marginBottom": "xe797ca", $$css: !0 },
      },
      f = {
        1: { paddingBottom: "x1j85h84", $$css: !0 },
        2: { paddingBottom: "x1120s5i", $$css: !0 },
        3: { paddingBottom: "xg8j3zb", $$css: !0 },
      },
      g = {
        auto: { $$css: !0 },
        center: { textAlign: "x2b8uid", $$css: !0 },
        end: { textAlign: "xp4054r", $$css: !0 },
        start: { textAlign: "x1yc453h", $$css: !0 },
      };
    function h(e) {
      return e === 1
        ? _[1]
        : e === 2
          ? _[2]
          : e === 3
            ? _[3]
            : e === 4
              ? _[4]
              : e === 5
                ? _[5]
                : e === 6
                  ? _[6]
                  : e === 7
                    ? _[7]
                    : e === 8
                      ? _[8]
                      : e === 9
                        ? _[9]
                        : e === 10
                          ? _[10]
                          : e === 11
                            ? _[11]
                            : e === 12
                              ? _[12]
                              : null;
    }
    function y(e, t) {
      var n = [p[e[0]], _[e[1]]],
        r = null;
      return (
        e.length === 3 && t > 0 && ((n[1] = h(e[1] + e[2])), (r = f[e[2]])),
        [n, r]
      );
    }
    function C(t, n) {
      function a(a) {
        var i,
          l = o("react-compiler-runtime").c(54),
          u,
          d;
        l[0] !== a
          ? ((d = a.ref),
            (u = babelHelpers.objectWithoutPropertiesLoose(a, e)),
            (l[0] = a),
            (l[1] = u),
            (l[2] = d))
          : ((u = l[1]), (d = l[2]));
        var p = u,
          _ = p.alignment,
          f = p.children,
          h = p.colorName,
          C = p.dir,
          b = p.elementType,
          v = p.htmlFor,
          S = p.id,
          R = p.isDenseModeEnabled,
          L = p.lines,
          E = p.styleName,
          k = p.testid,
          I = p.translate,
          T = p.truncationTooltip,
          D = p.wrap,
          x = p.xstyle,
          $ = _ === void 0 ? "start" : _,
          P = b === void 0 ? "span" : b,
          N = R === void 0 ? !1 : R,
          M = L === void 0 ? 0 : L,
          w =
            N && t.stylesForDenseMode && (i = t.stylesForDenseMode[E]) != null
              ? i
              : t.styles[E],
          A = w.lineHeight,
          F = w.style,
          O = t.defaultFontFamily,
          B,
          W,
          q;
        if (l[3] !== $ || l[4] !== h || l[5] !== M || l[6] !== E) {
          var U = t.offsets(E);
          ((W = t.colors[h]),
            (B = g[$]),
            (q = y(U, M)),
            (l[3] = $),
            (l[4] = h),
            (l[5] = M),
            (l[6] = E),
            (l[7] = B),
            (l[8] = W),
            (l[9] = q));
        } else ((B = l[7]), (W = l[8]), (q = l[9]));
        var V = q,
          H = V[0],
          G = V[1],
          z;
        l[10] !== f
          ? ((z = c.jsx(o("BaseTextContext").BaseTextContextProvider, {
              nested: !0,
              children: f,
            })),
            (l[10] = f),
            (l[11] = z))
          : (z = l[11]);
        var j = z,
          K;
        l[12] !== T
          ? ((K =
              T != null && n != null
                ? { tooltipImpl: n, tooltipProps: T }
                : void 0),
            (l[12] = T),
            (l[13] = K))
          : (K = l[13]);
        var Q = K,
          X = o("BaseTextContext").useBaseTextContext();
        if (X && X.nested) {
          var Y;
          l[14] !== k
            ? ((Y = r("testID")(k)), (l[14] = k), (l[15] = Y))
            : (Y = l[15]);
          var J;
          l[16] !== B || l[17] !== W || l[18] !== F || l[19] !== x
            ? ((J = (s || (s = r("stylex")))(m.base, m.inline, O, F, W, B, x)),
              (l[16] = B),
              (l[17] = W),
              (l[18] = F),
              (l[19] = x),
              (l[20] = J))
            : (J = l[20]);
          var Z = typeof A == "number" ? A + "px" : A,
            ee;
          l[21] !== Z
            ? ((ee = { lineHeight: Z }), (l[21] = Z), (l[22] = ee))
            : (ee = l[22]);
          var te;
          return (
            l[23] !== P ||
            l[24] !== v ||
            l[25] !== S ||
            l[26] !== d ||
            l[27] !== ee ||
            l[28] !== Y ||
            l[29] !== J ||
            l[30] !== I ||
            l[31] !== j
              ? ((te = c.jsx(
                  P,
                  babelHelpers.extends({}, Y, {
                    className: J,
                    htmlFor: v,
                    id: S,
                    ref: d,
                    style: ee,
                    translate: I,
                    children: j,
                  }),
                )),
                (l[23] = P),
                (l[24] = v),
                (l[25] = S),
                (l[26] = d),
                (l[27] = ee),
                (l[28] = Y),
                (l[29] = J),
                (l[30] = I),
                (l[31] = j),
                (l[32] = te))
              : (te = l[32]),
            te
          );
        }
        n == null &&
          T != null &&
          r("FBLogger")("comet_ui", "BaseText")
            .blameToPreviousFile()
            .mustfix("Using truncation tooltip without tooltip impl");
        var ne = F,
          re;
        l[33] !== B || l[34] !== W || l[35] !== H || l[36] !== ne || l[37] !== x
          ? ((re = [m.base, m.block, O, ne, W, B, H, x]),
            (l[33] = B),
            (l[34] = W),
            (l[35] = H),
            (l[36] = ne),
            (l[37] = x),
            (l[38] = re))
          : (re = l[38]);
        var oe;
        return (
          l[39] !== P ||
          l[40] !== G ||
          l[41] !== C ||
          l[42] !== v ||
          l[43] !== S ||
          l[44] !== A ||
          l[45] !== M ||
          l[46] !== d ||
          l[47] !== re ||
          l[48] !== k ||
          l[49] !== Q ||
          l[50] !== I ||
          l[51] !== D ||
          l[52] !== j
            ? ((oe = c.jsx(r("BaseLineClamp.react"), {
                baselineAdjustmentXStyle: G,
                dir: C,
                elementType: P,
                htmlFor: v,
                id: S,
                lineHeight: A,
                lines: M,
                ref: d,
                testid: void 0,
                translate: I,
                truncationTooltip: Q,
                wrap: D,
                xstyle: re,
                children: j,
              })),
              (l[39] = P),
              (l[40] = G),
              (l[41] = C),
              (l[42] = v),
              (l[43] = S),
              (l[44] = A),
              (l[45] = M),
              (l[46] = d),
              (l[47] = re),
              (l[48] = k),
              (l[49] = Q),
              (l[50] = I),
              (l[51] = D),
              (l[52] = j),
              (l[53] = oe))
            : (oe = l[53]),
          oe
        );
      }
      return a;
    }
    l.createBaseTextComponent = C;
  },
  98,
);
