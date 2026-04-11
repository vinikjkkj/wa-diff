__d(
  "WAWebHistorySyncDynamicThrottlingManager",
  ["WAWebDynamicThrottlingManager"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
      targetTimeMs: 150,
      maxDelayTimeMs: 3e3,
      minBatchSize: 1,
      maxBatchSize: 500,
      defaultBatchSize: 50,
    });
    l.historySyncDynamicThrottlingManager = e;
  },
  98,
);
