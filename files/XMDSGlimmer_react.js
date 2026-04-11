__d(
  "XMDSGlimmer.react",
  [
    "BaseLoadingStateElement.react",
    "react",
    "react-compiler-runtime",
    "useCurrentDisplayMode",
    "useVisibilityObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = "x2fr1v2-B",
      p = "x2fr1v2-B",
      _ = "x12ve19h-B",
      f = "x12ve19h-B",
      g = { animationDelay: "xvo38ju", $$css: !0 },
      h = {
        animationDelay: function (t) {
          return [
            g,
            {
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })((t % 10) * 200 + "ms"),
            },
          ];
        },
        circle: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        dark: {
          animationName: "xbql7jm",
          backgroundColor: "x10l5999",
          opacity: "xzl3qmq",
          $$css: !0,
        },
        darkOnWhiteBackground: {
          animationName: "x1hx36qn",
          backgroundColor: "x13a6qad",
          opacity: "x1bu4zmy",
          $$css: !0,
        },
        light: {
          animationName: "xbql7jm",
          backgroundColor: "x10l5999",
          opacity: "xzl3qmq",
          $$css: !0,
        },
        lightOnWhiteBackground: {
          animationName: "x1hx36qn",
          backgroundColor: "x13a6qad",
          opacity: "x1bu4zmy",
          $$css: !0,
        },
        paused: { animationPlayState: "xorstpt", $$css: !0 },
        root: {
          animationDirection: "xpz12be",
          animationDuration: "x1q3qbx4",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "x3kn0hh",
          borderStartStartRadius: "x18a5s7t",
          borderStartEndRadius: "x2wv2di",
          borderEndEndRadius: "x1v8jt1",
          borderEndStartRadius: "xy21cdz",
          $$css: !0,
        },
      };
    function y(e, t) {
      return e === "dark"
        ? t
          ? h.darkOnWhiteBackground
          : h.dark
        : t
          ? h.lightOnWhiteBackground
          : h.light;
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.index,
        a = e.onWhiteBackground,
        i = e.shape,
        l = e.xstyle,
        u = n === void 0 ? 0 : n,
        c = a === void 0 ? !1 : a,
        m = i === void 0 ? "rectangle" : i,
        p = r("useCurrentDisplayMode")(),
        _ = d(!0),
        f = _[0],
        g = _[1],
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            var e = t.hiddenReason;
            e !== "COMPONENT_UNMOUNTED" && g(!0);
          }),
          (t[0] = C))
        : (C = t[0]);
      var b = C,
        v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            g(!1);
          }),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { onHidden: b, onVisible: S }), (t[2] = R))
        : (R = t[2]);
      var L = r("useVisibilityObserver")(R),
        E;
      t[3] !== p || t[4] !== c
        ? ((E = y(p, c)), (t[3] = p), (t[4] = c), (t[5] = E))
        : (E = t[5]);
      var k = E,
        I = f && h.paused,
        T = m === "circle" && h.circle,
        D;
      t[6] !== u
        ? ((D = h.animationDelay(u)), (t[6] = u), (t[7] = D))
        : (D = t[7]);
      var x;
      t[8] !== k || t[9] !== D || t[10] !== I || t[11] !== T || t[12] !== l
        ? ((x = [h.root, k, I, T, l, D]),
          (t[8] = k),
          (t[9] = D),
          (t[10] = I),
          (t[11] = T),
          (t[12] = l),
          (t[13] = x))
        : (x = t[13]);
      var $;
      return (
        t[14] !== L || t[15] !== x
          ? (($ = s.jsx(r("BaseLoadingStateElement.react"), {
              ref: L,
              xstyle: x,
            })),
            (t[14] = L),
            (t[15] = x),
            (t[16] = $))
          : ($ = t[16]),
        $
      );
    }
    l.default = C;
  },
  98,
);
