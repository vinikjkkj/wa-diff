__d(
  "VideoPlayerNextgendashHostAPIDefault",
  [
    "VideoPlayerNextgendashHostAPIDefaultFactory",
    "oz-player/configs/OzGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzBandwidthUtils",
    "performance",
    "performanceAbsoluteNow",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o(
        "VideoPlayerNextgendashHostAPIDefaultFactory",
      ).createVideoPlayerNextgendashHostAPIDefault({
        clockPerfOriginMs:
          (e = (s || (s = r("performance"))).timeOrigin) != null
            ? e
            : (u || (u = r("performanceAbsoluteNow")))() -
              (c || (c = r("performanceNow")))(),
        fetchImpl:
          typeof window.fetch == "function"
            ? function (e, t) {
                return window.fetch(
                  e,
                  t ? babelHelpers.extends({}, t) : void 0,
                );
              }
            : null,
        networkDiagnostics: {
          networkDiagnosticsReadBandwidth: function (t, n) {
            var e = r(
              "oz-player/networks/OzBandwidthEstimator",
            ).getBandwidthDiagnostics(r("oz-player/configs/OzGlobalConfig"));
            return e != null || !t
              ? e
              : o(
                  "oz-player/networks/OzBandwidthUtils",
                ).createFallbackBandwidthDiagnostics(
                  r(
                    "oz-player/networks/OzBandwidthEstimator",
                  ).getDefaultEstimate(
                    r("oz-player/configs/OzGlobalConfig"),
                    n,
                  ),
                );
          },
          networkDiagnosticsUpdate: function (t) {
            (t.navigationTimingSample &&
              r(
                "oz-player/networks/OzBandwidthEstimator",
              ).addNavigationTimingSample(
                t.navigationTimingSample.timeToFirstByteMs,
                t.navigationTimingSample.timeToLastByteMs,
                t.navigationTimingSample.bytes,
                t.clock.unixMs,
              ),
              t.bandwidthSample &&
                r("oz-player/networks/OzBandwidthEstimator").addBandwidthSample(
                  t.bandwidthSample.bytes,
                  t.bandwidthSample.timeInMs,
                  t.clock.unixMs,
                ));
          },
        },
        networkIsOnline: function () {
          return navigator.onLine;
        },
        timers: {
          clearInterval: function (t) {
            return window.clearInterval(t != null ? t : void 0);
          },
          clearTimeout: function (t) {
            return window.clearTimeout(t != null ? t : void 0);
          },
          setInterval: window.setInterval.bind(window),
          setTimeout: window.setTimeout.bind(window),
        },
      });
    d.networkIsOnline();
    var m = d;
    l.default = m;
  },
  98,
);
