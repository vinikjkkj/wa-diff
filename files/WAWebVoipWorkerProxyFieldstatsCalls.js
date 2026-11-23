__d(
  "WAWebVoipWorkerProxyFieldstatsCalls",
  ["WAWebVoipInitEventEmitter", "WAWebVoipMainThreadLockMarker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return {
        cleanupUnfinishedCallStats: async function () {
          if (
            !t() ||
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          )
            return !1;
          var n = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
            "fs_cleanup",
            "offload",
          );
          try {
            await e(
              "cleanupUnfinishedCallStats",
              {},
              void 0,
              o("WAWebVoipMainThreadLockMarker")
                .MAIN_THREAD_LOCK_OFFLOAD_TIMEOUT_MS,
            );
          } finally {
            o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(n);
          }
          return !0;
        },
      };
    }
    l.createWorkerProxyFieldstatsCalls = e;
  },
  98,
);
