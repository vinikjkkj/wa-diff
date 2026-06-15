__d(
  "WAWebHandleOfflineAbProps",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_non_blocking_offline_resume_max_message_count",
      );
    }
    function s() {
      var e = JSON.parse(
          o("WAWebABProps").getABPropConfigValue(
            "web_offline_dynamic_batch_config",
          ),
        ),
        t = parseFloat(e.multiplier),
        n = e.version || "default";
      return { multiplier: Number.isNaN(t) ? 0.2 : t, version: n };
    }
    ((l.getNonBlockingOfflineResumeMaxMessageCount = e),
      (l.getOfflineDynamicBatchConfig = s));
  },
  98,
);
