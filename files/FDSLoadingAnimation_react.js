__d(
  "FDSLoadingAnimation.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 38,
      d = 62,
      m = 42,
      p = 2,
      _ = 3,
      f = 4,
      g = c / 2,
      h = d / 2,
      y = m / 2,
      C = g - 2,
      b = h - 2,
      v = y - 2,
      S = "x1k1ooqk-B",
      R = "xh7ukb3-B",
      L = "x1acst8a-B",
      E = "x1uh2x5g-B",
      k = {
        animationPaused: { animationPlayState: "xorstpt", $$css: !0 },
        animationUploadingCircle: {
          animationDirection: "xeo85xg",
          animationDuration: "x7s8090",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "x1esw782",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        animationUploadingCircleSize36: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "xq0anyh",
          animationTimingFunction: "x1esw782",
          strokeWidth: "xvlca1e",
          $$css: !0,
        },
        animationUploadingCircleSize40: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "x62hu5v",
          animationTimingFunction: "x1esw782",
          strokeWidth: "xqjr0vm",
          $$css: !0,
        },
        animationUploadingCircleSize60: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "xm4p48w",
          animationTimingFunction: "x1esw782",
          strokeWidth: "x17ld789",
          $$css: !0,
        },
        circleStrokeDefault: { stroke: "x1559cp3", $$css: !0 },
        circleStrokeMedia: { stroke: "x1cy1n3u", $$css: !0 },
      };
    function I(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.animationPaused,
        i = t.color,
        l = t.size,
        s = a === void 0 ? !1 : a,
        S = i === void 0 ? "default" : i,
        R,
        L,
        E;
      e: switch (l) {
        case 36: {
          ((R = c), (L = g), (E = C));
          break e;
        }
        case 40: {
          ((R = m), (L = y), (E = v));
          break e;
        }
        case 60:
        default:
          ((R = d), (L = h), (E = b));
      }
      var I;
      n[0] !== l
        ? ((I = {
            0: { className: "x10l6tqk" },
            4: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            2: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            6: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            1: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            5: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            3: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
            7: { className: "x10l6tqk x1xf60ip x1e0gzzx" },
          }[((l === 36) << 2) | ((l === 60) << 1) | ((l === 40) << 0)]),
          (n[0] = l),
          (n[1] = I))
        : (I = n[1]);
      var T = R,
        D = R,
        x;
      n[2] !== s
        ? ((x = {
            0: { className: "xeaay5l xa4qsjk xnjvcao x1esw782 x1bndym7" },
            1: {
              className: "xeaay5l xa4qsjk xnjvcao x1esw782 x1bndym7 xorstpt",
            },
          }[!!s << 0]),
          (n[2] = s),
          (n[3] = x))
        : (x = n[3]);
      var $;
      n[4] !== s || n[5] !== S || n[6] !== l
        ? (($ = (e || (e = r("stylex"))).props(
            k.animationUploadingCircle,
            S === "default" ? k.circleStrokeDefault : k.circleStrokeMedia,
            l === 36 && k.animationUploadingCircleSize36,
            l === 40 && k.animationUploadingCircleSize40,
            l === 60 && k.animationUploadingCircleSize60,
            s && k.animationPaused,
          )),
          (n[4] = s),
          (n[5] = S),
          (n[6] = l),
          (n[7] = $))
        : ($ = n[7]);
      var P = l === 36 ? p : l === 40 ? _ : f,
        N;
      n[8] !== L || n[9] !== E || n[10] !== $ || n[11] !== P
        ? ((N = u.jsx(
            "circle",
            babelHelpers.extends({}, $, {
              cx: L,
              cy: L,
              fill: "none",
              r: E,
              strokeWidth: P,
            }),
          )),
          (n[8] = L),
          (n[9] = E),
          (n[10] = $),
          (n[11] = P),
          (n[12] = N))
        : (N = n[12]);
      var M;
      n[13] !== x || n[14] !== N
        ? ((M = u.jsx("g", babelHelpers.extends({}, x, { children: N }))),
          (n[13] = x),
          (n[14] = N),
          (n[15] = M))
        : (M = n[15]);
      var w;
      return (
        n[16] !== R || n[17] !== M || n[18] !== I
          ? ((w = u.jsx(
              "svg",
              babelHelpers.extends({}, I, {
                "aria-hidden": !0,
                height: T,
                width: D,
                children: M,
              }),
            )),
            (n[16] = R),
            (n[17] = M),
            (n[18] = I),
            (n[19] = w))
          : (w = n[19]),
        w
      );
    }
    l.default = I;
  },
  98,
);
