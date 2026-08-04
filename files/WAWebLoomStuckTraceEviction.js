__d(
  "WAWebLoomStuckTraceEviction",
  ["WAWebABProps", "WebLoom"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WebLoom").setStuckTraceTimeoutMs(
        o("WAWebABProps").getABPropConfigValue(
          "web_loom_stuck_trace_timeout_ms",
        ),
      );
    }
    l.initWebLoomStuckTraceEviction = e;
  },
  98,
);
