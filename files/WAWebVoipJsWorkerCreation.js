__d(
  "WAWebVoipJsWorkerCreation",
  [
    "WAWebVoipInitEventEmitter",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMainThreadLockArm",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var o = u(e);
          return yield r("WAWebVoipJsWorkerThread").create(t, n, o);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
          initState: c(),
          onNativeStartFinished: function (t) {
            return o(
              "WAWebVoipMainThreadLockODS",
            ).logMainThreadLockCallDuration("jsworker_create", t);
          },
        }
      );
    }
    function c() {
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
    ((l.createJsWorkerThread = e), (l.readJsWorkerCreateContext = u));
  },
  98,
);
