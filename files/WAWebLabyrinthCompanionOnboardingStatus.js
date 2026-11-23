__d(
  "WAWebLabyrinthCompanionOnboardingStatus",
  [
    "WATimeUtils",
    "WAWebLabyrinthLoadCompanionOnboarding",
    "WAWebLabyrinthPendingAddPeerPayload",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      attemptCount: 0,
      capturedAtMs: null,
      lastFailure: null,
      nextAttemptAtMs: null,
      testMessage: null,
    };
    async function s() {
      if (o("WAWebLabyrinthPendingAddPeerPayload").hasAddPeerPayload())
        return babelHelpers.extends({}, e, { state: "captured" });
      var t = await o(
        "WAWebLabyrinthLoadCompanionOnboarding",
      ).loadLabyrinthCompanionOnboarding();
      if (!t.success)
        return babelHelpers.extends({}, e, {
          lastFailure: t.error.kind,
          state: "unreadable",
        });
      var n = t.value;
      if (n == null) return babelHelpers.extends({}, e, { state: "none" });
      var r = n.nextAttemptAt;
      return {
        attemptCount: n.attemptCount,
        capturedAtMs: o("WATimeUtils").fromMillisTime(n.capturedAt),
        lastFailure: n.lastFailure,
        nextAttemptAtMs: r == null ? null : o("WATimeUtils").fromMillisTime(r),
        state:
          n.step.kind === "captured" || n.step.kind === "prepared"
            ? "persisted"
            : n.step.kind === "registered"
              ? "registered"
              : n.step.kind === "abandoned"
                ? "abandoned"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        n.step.kind,
                    );
                  })(),
        testMessage: n.testMessage == null ? null : u(n.testMessage),
      };
    }
    function u(e) {
      var t = e.attemptCount,
        n = e.checkedAt,
        r = e.outcome;
      return {
        attemptCount: t,
        checkedAtMs: o("WATimeUtils").fromMillisTime(n),
        createdAtMs:
          r.kind === "restored"
            ? o("WATimeUtils").fromMillisTime(r.createdAt)
            : null,
        result: (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "checking" &&
            "lastResult" in e
          ) {
            var t = e.lastResult;
            return t;
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "failed" &&
            "reason" in e
          ) {
            var n = e.reason;
            return n;
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            (e.kind === "missing" || e.kind === "restored")
          )
            return r.kind;
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(r),
        state: r.kind,
      };
    }
    l.getLabyrinthCompanionOnboardingStatus = s;
  },
  98,
);
