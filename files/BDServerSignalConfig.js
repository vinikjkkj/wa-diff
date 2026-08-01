__d(
  "BDServerSignalConfig",
  ["BDLoggingConstants", "BDOperationLogHelper", "BotDetection_SignalFlags"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BDServerSignalConfig",
      s = (function () {
        function t(e, t, n) {
          ((this.parsedSignalFlags = []),
            (this.signalId = e),
            (this.signalFlags = t),
            (this.bufferSize = n));
        }
        var n = t.prototype;
        return (
          (n.getSignalId = function () {
            return this.signalId;
          }),
          (n.getSignalFlags = function () {
            var t = this;
            if (this.parsedSignalFlags.length === 0) {
              var n = Object.keys(r("BotDetection_SignalFlags"));
              n.forEach(function (e) {
                (r("BotDetection_SignalFlags")[e] & t.signalFlags) ===
                  r("BotDetection_SignalFlags")[e] &&
                  t.parsedSignalFlags.push(r("BotDetection_SignalFlags")[e]);
              });
            }
            return (
              this.parsedSignalFlags.length === 0 &&
                o("BDOperationLogHelper").logError(
                  e,
                  o("BDLoggingConstants").OPERATIONS.SIGNAL_FLAGS_MISSING,
                  {
                    id: this.signalId.toString(),
                    flags: this.signalFlags.toString(),
                  },
                ),
              this.parsedSignalFlags
            );
          }),
          (n.getBufferSize = function () {
            return this.bufferSize != null ? this.bufferSize : 0;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
