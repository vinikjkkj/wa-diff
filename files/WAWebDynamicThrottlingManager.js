__d(
  "WAWebDynamicThrottlingManager",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e(e, t) {
          if ((t === void 0 && (t = 0.2), t <= 1e-5 || t >= 0.8)) {
            var n = new Error(
              "newValueRatio should be between 0.00001 and 0.8",
            );
            throw (n.stack, n);
          }
          ((this.average = e), (this.lastValue = e), (this.newValueRatio = t));
        }
        var t = e.prototype;
        return (
          (t.addObservation = function (t) {
            ((this.average =
              this.average * (1 - this.newValueRatio) + t * this.newValueRatio),
              (this.lastValue = t));
          }),
          e
        );
      })(),
      l = (function () {
        function t(n) {
          var r, o, a, i, l;
          ((this.targetTimeMs =
            (r = n == null ? void 0 : n.targetTimeMs) != null
              ? r
              : t.DEFAULT_TARGET_TIME_MS),
            (this.maxDelayTimeMs =
              (o = n == null ? void 0 : n.maxDelayTimeMs) != null
                ? o
                : t.DEFAULT_MAX_DELAY_TIME_MS),
            (this.minBatchSize =
              (a = n == null ? void 0 : n.minBatchSize) != null
                ? a
                : t.DEFAULT_MIN_BATCH_SIZE),
            (this.maxBatchSize =
              (i = n == null ? void 0 : n.maxBatchSize) != null
                ? i
                : t.DEFAULT_MAX_BATCH_SIZE),
            (this.defaultBatchSize =
              (l = n == null ? void 0 : n.defaultBatchSize) != null
                ? l
                : t.DEFAULT_BATCH_SIZE),
            (this.batchSize = this.defaultBatchSize),
            (this.averageTotalTime = new e(this.targetTimeMs / 1e3, 0.2)));
        }
        var n = t.prototype;
        return (
          (n.getThrottleRate = function () {
            var e = this.getTotalTimeSeconds() * 0.5,
              t = Math.min(e, this.maxDelayTimeMs / 1e3);
            return { batchSize: this.batchSize, delayMs: t * 1e3 };
          }),
          (n.setLastProcessTime = function (t, n) {
            var e = t / 1e3;
            this.averageTotalTime.addObservation(e);
            var r = this.targetTimeMs / 1e3,
              o = this.getTotalTimeSeconds();
            (o < r
              ? o < r * 0.5
                ? (this.batchSize =
                    this.batchSize > 20
                      ? Math.floor(this.batchSize * 1.2)
                      : this.batchSize + 2)
                : (this.batchSize =
                    this.batchSize > 20
                      ? Math.floor(this.batchSize * 1.1)
                      : this.batchSize + 1)
              : o > r * 2
                ? (this.batchSize =
                    this.batchSize > 20
                      ? Math.floor(this.batchSize * 0.8)
                      : this.batchSize - 2)
                : (this.batchSize =
                    this.batchSize > 20
                      ? Math.floor(this.batchSize * 0.9)
                      : this.batchSize - 1),
              (this.batchSize = Math.max(
                this.minBatchSize,
                Math.min(this.batchSize, this.maxBatchSize),
              )));
          }),
          (n.getTotalTimeSeconds = function () {
            return Math.max(
              this.averageTotalTime.average,
              this.averageTotalTime.lastValue,
            );
          }),
          (n.reset = function () {
            ((this.batchSize = this.defaultBatchSize),
              (this.averageTotalTime = new e(this.targetTimeMs / 1e3, 0.2)));
          }),
          (n.getMetrics = function () {
            return {
              batchSize: this.batchSize,
              avgTotalTimeMs: this.averageTotalTime.average * 1e3,
              lastTotalTimeMs: this.averageTotalTime.lastValue * 1e3,
            };
          }),
          t
        );
      })();
    ((l.DEFAULT_TARGET_TIME_MS = 400),
      (l.DEFAULT_MAX_DELAY_TIME_MS = 3e3),
      (l.DEFAULT_MIN_BATCH_SIZE = 1),
      (l.DEFAULT_MAX_BATCH_SIZE = 500),
      (l.DEFAULT_BATCH_SIZE = 50),
      (i.DynamicThrottlingManager = l));
  },
  66,
);
