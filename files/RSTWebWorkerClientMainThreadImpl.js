__d(
  "RSTWebWorkerClientMainThreadImpl",
  [
    "ErrorGuard",
    "FBLogger",
    "RSTConfig",
    "RSTUtils",
    "ResponsiveTrackerMainThread",
    "Run",
    "WorkerMessagePort",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("gkx")("4909") || r("gkx")("22276"),
      u = (function () {
        function t(e) {
          ((this.$1 = null), (this.$2 = !1), (this.$3 = e));
        }
        var n = t.prototype;
        return (
          (n.$4 = function () {
            return (this.$1 == null && (this.$1 = this.$3()), this.$1);
          }),
          (n.startRSTFromMainThread = function (t) {
            var e,
              n = this;
            if (
              (t === void 0 && (t = {}),
              !(!s || this.$2 || !o("RSTUtils").isIndexedDBSupported()))
            ) {
              var a = Math.max(
                (e = t.extraDelayInMs) != null ? e : 0,
                r("RSTConfig").START_RST_FROM_MAIN_THREAD_EXTRA_DELAY_IN_MS,
              );
              window.setTimeout(function () {
                try {
                  var e = n.$4(),
                    t = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
                      e,
                      "RSTWorkerClient",
                    );
                  (r("ResponsiveTrackerMainThread").init(t), (n.$2 = !0));
                } catch (e) {
                  var a = r("getErrorSafe")(e);
                  r("FBLogger")("responsive-tracker")
                    .catching(a)
                    .warn("Failed to start worker: " + a.message);
                }
              }, a);
            }
          }),
          (n.startRSTAfterPageLoadFromMainThread = function (n) {
            var t = this;
            n === void 0 && (n = {});
            var a = o("Run").onAfterLoad(function () {
              (e || (e = r("ErrorGuard"))).applyWithGuard(
                function () {
                  return t.startRSTFromMainThread(n);
                },
                null,
                [],
              );
            });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
