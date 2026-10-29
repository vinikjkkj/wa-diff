__d(
  "WAWebLinkDeviceAndroidTablet.story",
  [
    "WAWebButton.react",
    "WAWebLinkDeviceAndroidTablet.react",
    "WAWebRobotoVariableFontLoadable",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t = u(!1),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (e[0] = i))
        : (i = e[0]);
      var l = r("useWAWebAsync")(p, i);
      if (l.error != null) throw l.error;
      if (l.loading) return null;
      if (n) {
        var c;
        return (
          e[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(r("WAWebLinkDeviceAndroidTablet.react"), {
                onClose: function () {
                  return a(!1);
                },
                onContinueToWeb: function () {
                  return a(!1);
                },
                onImpression: m,
                onOpenPlayStore: d,
              })),
              (e[1] = c))
            : (c = e[1]),
          c
        );
      }
      var _;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: function () {
                return a(!0);
              },
              testid: "android-tablet-app-download-story-trigger",
              children: "Open Android tablet interstitial",
            })),
            (e[2] = _))
          : (_ = e[2]),
        _
      );
    }
    function d() {}
    function m() {}
    function p() {
      return o("WAWebRobotoVariableFontLoadable").requireRobotoVariableFont();
    }
    var _ = {
      storyName: "WAWebLinkDeviceAndroidTablet",
      component: r("WAWebLinkDeviceAndroidTablet.react"),
      description:
        "Full-screen native-app download interstitial shown to eligible Android tablets.",
      examples: [
        { example: c, title: "Android tablet app-download interstitial" },
      ],
    };
    l.default = _;
  },
  98,
);
