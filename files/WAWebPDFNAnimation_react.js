__d(
  "WAWebPDFNAnimation.react",
  ["WAWebLottieAnimationLoadable", "WAWebPDFNUtils", "react", "vulture"],
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
      var t = e.icon;
      r("vulture")("2N3VkUBZRFjNiHnD4OHHkRZByAM=");
      var n = u(null),
        a = o("WAWebPDFNUtils").usePDFNThemedIcon(t);
      return a == null
        ? null
        : s.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            ref: n,
            autoplay: !0,
            path: a,
            xstyle: c.lottieComponent,
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
