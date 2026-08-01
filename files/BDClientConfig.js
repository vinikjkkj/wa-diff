__d(
  "BDClientConfig",
  ["BDLoggingConstants", "BDOperationLogHelper", "BDSignalWrapper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BDClientConfig",
      s = (function () {
        function t() {
          ((this.staticSignalBufferSize = 1),
            (this.dynamicSignalBufferSize = 1),
            (this.biometricSignalBufferSize = 1),
            (this.staticSignals = []),
            (this.dynamicSignals = []),
            (this.biometricSignals = []),
            (this.biometricSignalsMap = new Map()),
            (this.heartbeatSignal = new (r("BDSignalWrapper"))([], 38001)),
            (this.bufferSizeBySignalIdMap = {}),
            (this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER),
            (this.signalConfigGenerationTimeStampMs = 0),
            (this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.heartbeatIntervalMs = -1),
            (this.parsingDone = !1),
            (this.sid = -1),
            (this.hbVersion = ""),
            (this.bufferSizeBySignalIdMap[38001] = 1));
        }
        var n = t.prototype;
        return (
          (n.setStaticSignalBufferSize = function (n) {
            return (
              n > 0
                ? (this.staticSignalBufferSize = n)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                    { size: n.toString(), type: "s" },
                  ),
              this
            );
          }),
          (n.getStaticSignalBufferSize = function () {
            return this.staticSignalBufferSize;
          }),
          (n.setDynamicSignalBufferSize = function (n) {
            return (
              n > 1
                ? (this.dynamicSignalBufferSize = n)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                    { size: n.toString(), type: "d" },
                  ),
              this
            );
          }),
          (n.getDynamicSignalBufferSize = function () {
            return this.dynamicSignalBufferSize;
          }),
          (n.setBiometricSignalBufferSize = function (n) {
            return (
              n > 1
                ? (this.biometricSignalBufferSize = n)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                    { size: n.toString(), type: "b" },
                  ),
              this
            );
          }),
          (n.setSID = function (t) {
            return ((this.sid = t), this);
          }),
          (n.setHeartbeatVersion = function (t) {
            return ((this.hbVersion = t), this);
          }),
          (n.getHeartbeatVersion = function () {
            return this.hbVersion;
          }),
          (n.getBiometricSignalBufferSize = function () {
            return this.biometricSignalBufferSize;
          }),
          (n.setConfigGenerationTimeStamp = function (t) {
            return ((this.signalConfigGenerationTimeStampMs = t), this);
          }),
          (n.getConfigGenerationTimeStamp = function () {
            return this.signalConfigGenerationTimeStampMs;
          }),
          (n.setHeartbeatIntervalMinutes = function (t) {
            return ((this.heartbeatIntervalMs = t * 60 * 1e3), this);
          }),
          (n.getHeartbeatIntervalMs = function () {
            return this.heartbeatIntervalMs;
          }),
          (n.setSuspiciousTiersFlushDurationMinutes = function (n) {
            return (
              n > 0
                ? (this.suspiciousTiersFlushDurationMs = n * 60 * 1e3)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                    { size: n.toString(), type: "fds" },
                  ),
              this
            );
          }),
          (n.getSuspiciousTiersFlushDurationMs = function () {
            return this.suspiciousTiersFlushDurationMs;
          }),
          (n.setAllTiersFlushDurationMinutes = function (n) {
            return (
              n > 0
                ? (this.allTiersFlushDurationMs = n * 60 * 1e3)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                    { size: n.toString(), type: "fda" },
                  ),
              this
            );
          }),
          (n.getAllTiersFlushDurationMs = function () {
            return this.allTiersFlushDurationMs;
          }),
          (n.addMultipleSignalsToClientConfig = function (t) {
            var e = this;
            return (
              t.forEach(function (t) {
                return e.addSignalToClientConfig(t);
              }),
              this
            );
          }),
          (n.addSignalToClientConfig = function (t) {
            var e = t.getSignalFlags(),
              n = t.getSignalId();
            if (n === 38e3) return this;
            var o = new (r("BDSignalWrapper"))(e, n);
            return n === 38001
              ? ((this.heartbeatSignal = o), this)
              : (e.includes(2)
                  ? e.includes(4)
                    ? this.biometricSignals.push(o)
                    : this.dynamicSignals.push(o)
                  : this.staticSignals.push(o),
                t.getBufferSize() > 0 &&
                  (this.bufferSizeBySignalIdMap[t.getSignalId()] =
                    t.getBufferSize()),
                this);
          }),
          (n.setPeriodicCollectionIntervalSeconds = function (n) {
            return (
              n > 0
                ? (this.periodicCollectionIntervalMs = n * 1e3)
                : o("BDOperationLogHelper").logError(
                    e,
                    o("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                    { size: n.toString(), type: "pi" },
                  ),
              this
            );
          }),
          (n.getPeriodicCollectionIntervalMs = function () {
            return this.periodicCollectionIntervalMs;
          }),
          (n.getDynamicSignals = function () {
            return this.dynamicSignals;
          }),
          (n.getStaticSignals = function () {
            return this.staticSignals;
          }),
          (n.getBiometricSignals = function () {
            return this.biometricSignals;
          }),
          (n.getBiometricSignalsMap = function () {
            return (
              this.biometricSignalsMap.size === 0 &&
                this.biometricSignals.length > 0 &&
                (this.biometricSignalsMap = this.biometricSignals.reduce(
                  function (e, t) {
                    return e.set(t.signalType, t);
                  },
                  new Map(),
                )),
              this.biometricSignalsMap
            );
          }),
          (n.getHeartbeatSignal = function () {
            return this.heartbeatSignal;
          }),
          (n.getBufferSizeBySignalId = function (t) {
            return this.bufferSizeBySignalIdMap[t];
          }),
          (n.setParsingDone = function (t) {
            this.parsingDone = t;
          }),
          (n.isParsingDone = function () {
            return this.parsingDone;
          }),
          t
        );
      })(),
      u = null,
      c = {
        get: function () {
          return (u == null && (u = new s()), u);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
