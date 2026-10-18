__d(
  "WAWebLoomStuckTraceEviction",
  ["WAWebABProps", "WAWebCmd", "WebLoom"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (s(),
        o("WAWebCmd").Cmd.on("ab_props_loaded_from_bridge", s),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", s));
    }
    function s() {
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
