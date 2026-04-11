__d(
  "WAWebPDFNAnimation.react",
  [
    "WAWebLottieAnimationLoadable",
    "WAWebPDFNUtils",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = {
        lottieComponent: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          height: "x19swzb4",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.icon;
      r("vulture")("2N3VkUBZRFjNiHnD4OHHkRZByAM=");
      var a = u(null),
        i = o("WAWebPDFNUtils").usePDFNThemedIcon(n);
      if (i == null) return null;
      var l;
      return (
        t[0] !== i
          ? ((l = s.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
              ref: a,
              autoplay: !0,
              path: i,
              xstyle: c.lottieComponent,
            })),
            (t[0] = i),
            (t[1] = l))
          : (l = t[1]),
        l
      );
    }
    l.default = d;
  },
  98,
);
