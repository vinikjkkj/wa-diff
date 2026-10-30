__d(
  "WAWebVoipWorkerProxyFieldstatsCalls",
  [
    "WAWebVoipInitEventEmitter",
    "WAWebVoipMainThreadLockMarker",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        cleanupUnfinishedCallStats: (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !t() ||
              !o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()
            )
              return !1;
            var n = o(
              "WAWebVoipMainThreadLockMarker",
            ).startMainThreadLockMarker("fs_cleanup", "offload");
            try {
              yield e("cleanupUnfinishedCallStats", {});
            } finally {
              o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(n);
            }
            return !0;
          });
          function a() {
            return r.apply(this, arguments);
          }
          return a;
        })(),
      };
    }
    l.createWorkerProxyFieldstatsCalls = e;
  },
  98,
);
