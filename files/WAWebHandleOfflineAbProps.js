__d(
  "WAWebHandleOfflineAbProps",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = JSON.parse(
          o("WAWebABProps").getABPropConfigValue(
            "web_offline_dynamic_batch_config",
          ),
        ),
        t = parseFloat(e.multiplier),
        n = e.version || "default";
      return { multiplier: Number.isNaN(t) ? 0.2 : t, version: n };
    }
    l.getOfflineDynamicBatchConfig = e;
  },
  98,
);
