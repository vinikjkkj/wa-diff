__d(
  "oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator",
  ["oz-player/networks/OzNetworkRequestStreamBandwidthReporter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e5;
    function s(t, n, o, a, i) {
      return {
        startStream: function (s) {
          var l = new (r(
            "oz-player/networks/OzNetworkRequestStreamBandwidthReporter",
          ))({
            stream: n,
            loggerProvider: o,
            byteCountPerSample: t.getNumber("byte_count_per_sample", e),
            minimumBytesToSampleOnClose: t.getNumber(
              "minimum_bytes_to_sample_on_close",
              25e3,
            ),
            minimumSampleDuration: t.getNumber(
              "minimum_bandwidth_sample_duration",
              10,
            ),
            maximumSampleBandwidth: t.getNumber(
              "maximum_bandwidth_sample_bandwidth",
              1e8,
            ),
            useResponseTimeMs: t.getBool(
              "bandwidth_use_response_time_adjustment",
              !1,
            ),
            responseTimeHandicapMs: t.getNumber(
              "bandwidth_response_time_handicap",
              0,
            ),
            ignoreOnStreamWriteSamples: t.getBool(
              "bandwidth_ignore_on_stream_write_samples",
              !1,
            ),
            onResourceTimingBufferFull: i,
          });
          return (
            l.onBandwidthSample(function (e, t) {
              a.addBandwidthSample(e, t);
            }),
            l.onNavigationTimingSample(function (e, n, r) {
              var o = t.getNumber(
                "time_to_first_byte_ignore_above_threshold_ms",
                0,
              );
              (o === 0 || e <= o) && a.addNavigationTimingSample(e, n, r);
            }),
            l.onEstimateFromHeaders(function (e) {
              a.setBandwidthEstimateFromHeaders({ meanEstimate: e });
            }),
            n.startStream(s).then(function (e) {
              return n.retrievedFromCache()
                ? e
                : e.pipeThrough(l.getTransformStream());
            })
          );
        },
      };
    }
    l.pipeStreamThroughBandwidthEstimator = s;
  },
  98,
);
