__d(
  "WAWebHandleOfflineAbProps",
  ["WAWebABProps", "WAWebRuntimeEnvironmentUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_non_blocking_offline_resume_max_message_count",
      );
    }
    function s() {
      return (
        !o("WAWebRuntimeEnvironmentUtils").isServiceWorker() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_offline_dynamic_batch_size_enabled",
        )
      );
    }
    function u() {
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
      (l.isOfflineDynamicBatchSizeEnabled = s),
      (l.getOfflineDynamicBatchConfig = u));
  },
  98,
);
