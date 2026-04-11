__d(
  "WAWebVoipPerfOptimizations",
  ["$InternalEnum", "WAWebABProps", "err"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      ALL_DISABLED: 0,
      ALL_ENABLED: 1,
      PERMISSIONS_API_OPTIMIZATION: 2,
      CAMERA_PREWARM: 3,
      CONVERTER_PREWARM: 4,
      OPERATION_QUEUE_YIELD: 5,
      LOG_RING_BUFFER: 6,
      WORKLET_PRELOAD: 7,
      SCTP_PREWARM: 8,
      MAX_FLAG: 30,
    });
    function s() {
      var t;
      return (t = o("WAWebABProps").getABPropConfigValue(
        "web_calling_perf_optimizations_bitmask",
      )) != null
        ? t
        : e.ALL_DISABLED;
    }
    function u(t) {
      var n = t;
      if (n < 2 || n >= e.MAX_FLAG) throw r("err")("Invalid feature flag used");
      var o = s();
      return o === e.ALL_DISABLED
        ? !1
        : o === e.ALL_ENABLED
          ? !0
          : (o & (1 << n)) !== 0;
    }
    ((l.PerfOptimizationFlag = e), (l.isPerfOptimizationEnabled = u));
  },
  98,
);
