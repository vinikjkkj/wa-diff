__d(
  "useVideoPlayerBandwidthEstimate",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "react",
    "react-compiler-runtime",
    "useInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState,
      u = 5e3;
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t = d,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = t()), (e[0] = n))
        : (n = e[0]);
      var a = s(n),
        i = a[0],
        l = a[1],
        c;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function () {
              return l(t());
            }),
            (e[1] = c))
          : (c = e[1]),
        r("useInterval")(c, u),
        i
      );
    }
    function d() {
      return r("oz-player/networks/OzBandwidthEstimator").getBandwidth(
        r("VideoPlayerOzWWWGlobalConfig"),
      );
    }
    l.default = c;
  },
  98,
);
