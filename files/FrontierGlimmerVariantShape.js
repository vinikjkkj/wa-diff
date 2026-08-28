__d(
  "FrontierGlimmerVariantShape",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 0.03,
      c = 0.12,
      d = "x1nf8lo2-B",
      m = { animationDelay: "xvo38ju", $$css: !0 },
      p = {
        animationDelay: function (t) {
          return [
            m,
            {
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })((t % 10) * 200 + "ms"),
            },
          ];
        },
        animationIterationCount: {
          animationIterationCount: "xa4qsjk",
          $$css: !0,
        },
        containerCircle: {
          borderStartStartRadius: "x1se9f2g",
          borderStartEndRadius: "x12573ex",
          borderEndEndRadius: "x19kflk0",
          borderEndStartRadius: "x1bsy6ig",
          $$css: !0,
        },
        containerRounded: {
          borderStartStartRadius: "x13tsxwm",
          borderStartEndRadius: "x1pqclm2",
          borderEndEndRadius: "x1id48y1",
          borderEndStartRadius: "x1qrn9go",
          $$css: !0,
        },
        containerSquare: {
          borderStartStartRadius: "x19v6qyv",
          borderStartEndRadius: "x1wws76u",
          borderEndEndRadius: "x1yn5b4z",
          borderEndStartRadius: "x7mspp5",
          $$css: !0,
        },
        glimmer: {
          animationName: "xhize96",
          backgroundColor: "x3lpzh7",
          opacity: "x16d2dfz",
          $$css: !0,
        },
        root: {
          animationDirection: "xpz12be",
          animationDuration: "x1q3qbx4",
          animationTimingFunction: "x3kn0hh",
          $$css: !0,
        },
      },
      _ = {
        circle: p.containerCircle,
        rounded: p.containerRounded,
        square: p.containerSquare,
      },
      f = p.glimmer;
    function g(e, t, n) {
      var r = o("react-compiler-runtime").c(9),
        a;
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [p.root, f]), (r[0] = a))
        : (a = r[0]);
      var i;
      r[1] !== e
        ? ((i = p.animationDelay(e)), (r[1] = e), (r[2] = i))
        : (i = r[2]);
      var l = _[t],
        s;
      r[3] !== l || r[4] !== n
        ? ((s = [l, n]), (r[3] = l), (r[4] = n), (r[5] = s))
        : (s = r[5]);
      var u;
      return (
        r[6] !== i || r[7] !== s
          ? ((u = {
              xstyleConfig: {
                animation: a,
                animationDelay: i,
                animationIteration: p.animationIterationCount,
                container: s,
              },
            }),
            (r[6] = i),
            (r[7] = s),
            (r[8] = u))
          : (u = r[8]),
        u
      );
    }
    l.useFrontierGlimmerVariantShape = g;
  },
  98,
);
