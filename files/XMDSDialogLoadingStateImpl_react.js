__d(
  "XMDSDialogLoadingStateImpl.react",
  ["XMDSGlimmer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        firstLine: {
          height: "x170jfvy",
          marginBottom: "xyorhqc",
          marginInlineStart: "xqsn43r",
          marginInlineEnd: "x3aesyq",
          marginLeft: null,
          marginRight: null,
          maxWidth: "xq2pcee",
          $$css: !0,
        },
        glimmer: {
          alignSelf: "xqcrz7y",
          boxSizing: "x9f619",
          width: "x19sv2k2",
          $$css: !0,
        },
        heading: {
          height: "x1qx5ct2",
          marginBottom: "xieb3on",
          marginInlineStart: "xqsn43r",
          marginInlineEnd: "x3aesyq",
          marginLeft: null,
          marginRight: null,
          maxWidth: "xws0hc0",
          $$css: !0,
        },
        secondLine: {
          height: "x170jfvy",
          marginBottom: "xyorhqc",
          marginInlineStart: "xqsn43r",
          marginInlineEnd: "x3aesyq",
          marginLeft: null,
          marginRight: null,
          maxWidth: "xg16ivm",
          $$css: !0,
        },
      };
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(r("XMDSGlimmer.react"), {
            xstyle: [u.glimmer, u.heading],
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s.jsx(r("XMDSGlimmer.react"), {
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
                s.jsx(r("XMDSGlimmer.react"), {
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
