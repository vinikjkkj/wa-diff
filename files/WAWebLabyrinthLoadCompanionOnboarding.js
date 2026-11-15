__d(
  "WAWebLabyrinthLoadCompanionOnboarding",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugDatabase",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugTransactors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            u,
          );
          if (!e.success) return e;
          var t = e.value;
          if (t == null) return o("WAResultOrError").makeResult(null);
          var n = t.attemptCount,
            r = t.capturedAt,
            a = t.lastFailure,
            i = t.nextAttemptAt,
            l = t.step,
            s = t.testMessage;
          return o("WAResultOrError").makeResult({
            attemptCount: n,
            capturedAt: r,
            lastFailure: a,
            nextAttemptAt: i,
            step: l,
            testMessage: s,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
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
        })),
        c.apply(this, arguments)
      );
    }
    l.loadLabyrinthCompanionOnboarding = e;
  },
  98,
);
