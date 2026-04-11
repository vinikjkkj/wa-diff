__d(
  "FalcoLoggerInternalState",
  ["AnalyticsCoreData", "BaseEventEmitter", "FalcoUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          var t;
          this.queuesMap = new Map();
          var n = (t = o("FalcoUtils")).identityToString(
            (e || (e = r("AnalyticsCoreData"))).identity,
          );
          ((this.observable = new (r("BaseEventEmitter"))()),
            (this.logQueue = o("FalcoUtils").createQueue(
              "falco_queue_log",
              n,
              this.queuesMap,
            )),
            (this.logImmediatelyQueue = o("FalcoUtils").createQueue(
              "falco_queue_immediately",
              n,
              this.queuesMap,
            )),
            (this.logCriticalQueue = o("FalcoUtils").createQueue(
              "falco_queue_critical",
              n,
              this.queuesMap,
            )));
        }
        return (
          (t.getInstance = function () {
            return (t.$1 || (t.$1 = new t()), t.$1);
          }),
          t
        );
      })();
    ((s.$1 = null), (l.default = s));
  },
  98,
);
