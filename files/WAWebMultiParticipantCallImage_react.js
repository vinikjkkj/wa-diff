__d(
  "WAWebMultiParticipantCallImage.react",
  [
    "WAWebDetailImage.react",
    "WAWebVoipUiContext",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      m = {
        container: {
          position: "x1n2onr6",
          backgroundColor: "x1c7u0tx",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        containerSize: function (t) {
          return [
            {
              width: t != null ? "x5lhr3w" : t,
              height: t != null ? "x16ye13r" : t,
              $$css: !0,
            },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        imageOneAuto: function (t) {
          return [
            d,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
            },
          ];
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(61),
        a = t.participantWids,
        i = t.size,
        l = i === void 0 ? 49 : i,
        s = c(r("WAWebVoipUiContext")),
        d = s.uiHeight,
        p;
      n[0] !== a ? ((p = a.slice(0, 3)), (n[0] = a), (n[1] = p)) : (p = n[1]);
      var g = p,
        h = g.length;
      if (h === 0) return null;
      var y;
      n[2] !== l ? ((y = f(l)), (n[2] = l), (n[3] = y)) : (y = n[3]);
      var C = y,
        b;
      n[4] !== h
        ? ((b = function (t) {
            if (t === "auto" && h === 1) return null;
            if (t === "auto") return m.containerSize(120);
            var e = t;
            return m.containerSize(e);
          }),
          (n[4] = h),
          (n[5] = b))
        : (b = n[5]);
      var v, S, R;
      if (
        n[6] !== C ||
        n[7] !== h ||
        n[8] !== g[0] ||
        n[9] !== g[1] ||
        n[10] !== l ||
        n[11] !== b ||
        n[12] !== d
      ) {
        R = Symbol.for("react.early_return_sentinel");
        e: {
          var L = b(l),
            E;
          n[16] !== l ? ((E = _(l)), (n[16] = l), (n[17] = E)) : (E = n[17]);
          var k = E;
          if (h === 1) {
            var I = l === "auto" ? null : l,
              T = l === "auto",
              D;
            n[18] !== l || n[19] !== d
              ? ((D = l === "auto" && m.imageOneAuto(d)),
                (n[18] = l),
                (n[19] = d),
                (n[20] = D))
              : (D = n[20]);
            var x;
            (n[21] !== g[0] ||
            n[22] !== k ||
            n[23] !== D ||
            n[24] !== I ||
            n[25] !== T
              ? ((x = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: g[0],
                  size: I,
                  quality: k,
                  customDimensionsStyle: T,
                  waitIdle: !0,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                  xstyle: D,
                })),
                (n[21] = g[0]),
                (n[22] = k),
                (n[23] = D),
                (n[24] = I),
                (n[25] = T),
                (n[26] = x))
              : (x = n[26]),
              (R = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(m.container, L),
                  { children: x },
                ),
              )));
            break e;
          }
          if (h === 2) {
            var $;
            n[27] !== C
              ? (($ = Math.round(C * 1.5)), (n[27] = C), (n[28] = $))
              : ($ = n[28]);
            var P = $,
              N = (e || (e = r("stylex"))).props(m.container, L),
              M,
              w;
            n[29] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = {
                  className:
                    "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62",
                }),
                (w = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }),
                (n[29] = M),
                (n[30] = w))
              : ((M = n[29]), (w = n[30]));
            var A;
            n[31] !== g[0] || n[32] !== P
              ? ((A = u.jsx(
                  "div",
                  babelHelpers.extends({}, M, {
                    children: u.jsx(
                      "div",
                      babelHelpers.extends({}, w, {
                        children: u.jsx(
                          o("WAWebDetailImage.react").DetailImage,
                          {
                            id: g[0],
                            size: P,
                            quality: o("WAWebDetailImage.react")
                              .DetailImageQuality.High,
                            waitIdle: !0,
                          },
                        ),
                      }),
                    ),
                  }),
                )),
                (n[31] = g[0]),
                (n[32] = P),
                (n[33] = A))
              : (A = n[33]);
            var F, O;
            n[34] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = {
                  className:
                    "x10l6tqk x13vifvy xtijo5x x1ax8nco x5yr21d x6ikm8r x10wlt62",
                }),
                (O = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }),
                (n[34] = F),
                (n[35] = O))
              : ((F = n[34]), (O = n[35]));
            var B;
            (n[36] !== g[1] || n[37] !== P
              ? ((B = u.jsx(
                  "div",
                  babelHelpers.extends({}, F, {
                    children: u.jsx(
                      "div",
                      babelHelpers.extends({}, O, {
                        children: u.jsx(
                          o("WAWebDetailImage.react").DetailImage,
                          {
                            id: g[1],
                            size: P,
                            quality: o("WAWebDetailImage.react")
                              .DetailImageQuality.High,
                            waitIdle: !0,
                          },
                        ),
                      }),
                    ),
                  }),
                )),
                (n[36] = g[1]),
                (n[37] = P),
                (n[38] = B))
              : (B = n[38]),
              (R = u.jsxs(
                "div",
                babelHelpers.extends({}, N, { children: [A, B] }),
              )));
            break e;
          }
          var W;
          (n[39] !== C
            ? ((W = Math.round(C * 1.5)), (n[39] = C), (n[40] = W))
            : (W = n[40]),
            (v = W),
            (S = (e || (e = r("stylex"))).props(m.container, L)));
        }
        ((n[6] = C),
          (n[7] = h),
          (n[8] = g[0]),
          (n[9] = g[1]),
          (n[10] = l),
          (n[11] = b),
          (n[12] = d),
          (n[13] = v),
          (n[14] = S),
          (n[15] = R));
      } else ((v = n[13]), (S = n[14]), (R = n[15]));
      if (R !== Symbol.for("react.early_return_sentinel")) return R;
      var q, U;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = {
            className:
              "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62",
          }),
          (U = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }),
          (n[41] = q),
          (n[42] = U))
        : ((q = n[41]), (U = n[42]));
      var V;
      n[43] !== g[0] || n[44] !== v
        ? ((V = u.jsx(
            "div",
            babelHelpers.extends({}, q, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, U, {
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: g[0],
                    size: v,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              ),
            }),
          )),
          (n[43] = g[0]),
          (n[44] = v),
          (n[45] = V))
        : (V = n[45]);
      var H, G;
      n[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = {
            className:
              "x10l6tqk x13vifvy xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62",
          }),
          (G = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }),
          (n[46] = H),
          (n[47] = G))
        : ((H = n[46]), (G = n[47]));
      var z;
      n[48] !== g[1] || n[49] !== v
        ? ((z = u.jsx(
            "div",
            babelHelpers.extends({}, H, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, G, {
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: g[1],
                    size: v,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              ),
            }),
          )),
          (n[48] = g[1]),
          (n[49] = v),
          (n[50] = z))
        : (z = n[50]);
      var j, K;
      n[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = {
            className:
              "x10l6tqk x1ey2m1c xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62",
          }),
          (K = { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz" }),
          (n[51] = j),
          (n[52] = K))
        : ((j = n[51]), (K = n[52]));
      var Q;
      n[53] !== g[2] || n[54] !== v
        ? ((Q = u.jsx(
            "div",
            babelHelpers.extends({}, j, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, K, {
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: g[2],
                    size: v,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              ),
            }),
          )),
          (n[53] = g[2]),
          (n[54] = v),
          (n[55] = Q))
        : (Q = n[55]);
      var X;
      return (
        n[56] !== z || n[57] !== Q || n[58] !== S || n[59] !== V
          ? ((X = u.jsxs(
              "div",
              babelHelpers.extends({}, S, { children: [V, z, Q] }),
            )),
            (n[56] = z),
            (n[57] = Q),
            (n[58] = S),
            (n[59] = V),
            (n[60] = X))
          : (X = n[60]),
        X
      );
    }
    function _(e) {
      if (e === "auto")
        return o("WAWebDetailImage.react").DetailImageQuality.High;
      var t = e;
      return t > 49
        ? o("WAWebDetailImage.react").DetailImageQuality.High
        : o("WAWebDetailImage.react").DetailImageQuality.Low;
    }
    function f(e) {
      if (e === "auto") return 120;
      var t = e;
      return t;
    }
    l.default = p;
  },
  98,
);
