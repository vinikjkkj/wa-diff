__d(
  "WAWebLabyrinthLoadCompanionOnboarding",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugTransactors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(s);
      if (!e.success) return e;
      var t = e.value;
      if (t == null) return o("WAResultOrError").makeResult(null);
      var n = t.attemptCount,
        r = t.capturedAt,
        a = t.lastFailure,
        i = t.nextAttemptAt,
        l = t.step,
        u = t.testMessage;
      return o("WAResultOrError").makeResult({
        attemptCount: n,
        capturedAt: r,
        lastFailure: a,
        nextAttemptAt: i,
        step: l,
        testMessage: u,
      });
    }
    async function s(e) {
      var t = await o(
        "WAWebLabyrinthDebugDatabase",
      ).getLabyrinthDebugDatabase();
      return t.runInTransaction(
        ["companionOnboarding"],
        "readonly",
        function (t) {
          return o(
            "WAWebLabyrinthDebugTransactors",
          ).readOwnedCompanionOnboarding(t, e);
        },
        "loadLabyrinthCompanionOnboarding",
      );
    }
    l.loadLabyrinthCompanionOnboarding = e;
  },
  98,
);
