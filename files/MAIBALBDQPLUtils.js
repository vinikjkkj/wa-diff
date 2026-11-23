__d(
  "MAIBALBDQPLUtils",
  ["QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return {
        int: { instrumentation_version: 1 },
        string: {
          experience: "unselected",
          observation_kind: n,
          outcome: r,
          phase: t,
          source: "lbd",
          surface: e,
        },
      };
    }
    function s(e, t, n) {
      n === void 0 && (n = "success");
      try {
        var o = r("qpl")._(41487821, "3729");
        (r("QPLUserFlow").start(o, {
          annotations: t,
          instanceKey: e,
          trackedForLoss: !1,
        }),
          n === "failure"
            ? r("QPLUserFlow").endFailure(o, "lbd_observation_error", {
                instanceKey: e,
              })
            : n === "cancel"
              ? r("QPLUserFlow").endCancel(o, { instanceKey: e })
              : r("QPLUserFlow").endSuccess(o, { instanceKey: e }));
      } catch (e) {}
    }
    ((l.getMAIBALBDQPLAnnotations = e), (l.logMAIBALBDQPLObservation = s));
  },
  98,
);
