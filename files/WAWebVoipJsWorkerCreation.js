__d(
  "WAWebVoipJsWorkerCreation",
  [
    "WAWebVoipInitEventEmitter",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMainThreadLockArm",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockODS",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var o = s(e);
      return await r("WAWebVoipJsWorkerThread").create(t, n, o);
    }
    function s(e) {
      return (
        o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
          "jsworker_create",
        ),
        o("WAWebVoipMainThreadLockODS").logMainThreadLockJsWorkerReached(
          e,
          o("WAWebVoipMainThreadLockArm").getMainThreadLockArm(),
        ),
        {
          caller: e,
          initState: u(),
          onNativeStartFinished: function (t) {
            return o(
              "WAWebVoipMainThreadLockODS",
            ).logMainThreadLockCallDuration("jsworker_create", t);
          },
        }
      );
    }
    function u() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? "done"
        : o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
          ? "in_flight"
          : "not_started";
    }
    ((l.createJsWorkerThread = e), (l.readJsWorkerCreateContext = s));
  },
  98,
);
