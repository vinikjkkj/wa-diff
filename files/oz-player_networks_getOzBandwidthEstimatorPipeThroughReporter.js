__d(
  "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
  [
    "oz-player/networks/OzNetworkRequestStream",
    "oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return function (n, a, i, l) {
        var s = e === "video";
        return a instanceof r("oz-player/networks/OzNetworkRequestStream") && s
          ? o(
              "oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator",
            ).pipeStreamThroughBandwidthEstimator(
              n.getLegacyConfig(),
              a,
              i,
              t,
              l,
            )
          : a;
      };
    }
    l.default = e;
  },
  98,
);
