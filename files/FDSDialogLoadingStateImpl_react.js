__d(
  "FDSDialogLoadingStateImpl.react",
  ["FDSGlimmer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        firstLine: {
          height: "x1kpxq89",
          marginBottom: "xyorhqc",
          maxWidth: "xq2pcee",
          $$css: !0,
        },
        glimmer: {
          borderStartStartRadius: "x1obq294",
          borderStartEndRadius: "x5a5i1n",
          borderEndEndRadius: "xde0f50",
          borderEndStartRadius: "x15x8krk",
          boxSizing: "x9f619",
          marginInlineStart: "xyqm7xq",
          marginInlineEnd: "x1ys307a",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        heading: {
          height: "x1qx5ct2",
          marginTop: "x1sy10c2",
          marginBottom: "xieb3on",
          maxWidth: "xws0hc0",
          $$css: !0,
        },
        secondLine: {
          height: "x1kpxq89",
          marginBottom: "xieb3on",
          maxWidth: "xg16ivm",
          $$css: !0,
        },
      };
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(r("FDSGlimmer.react"), {
            index: 0,
            xstyle: [u.glimmer, u.heading],
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s.jsx(r("FDSGlimmer.react"), {
            index: 1,
            xstyle: [u.glimmer, u.firstLine],
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = s.jsxs(s.Fragment, {
              children: [
                t,
                n,
                s.jsx(r("FDSGlimmer.react"), {
                  index: 2,
                  xstyle: [u.glimmer, u.secondLine],
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = c;
  },
  98,
);
