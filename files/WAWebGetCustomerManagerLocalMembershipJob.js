__d(
  "WAWebGetCustomerManagerLocalMembershipJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebCustomerManagerLocalMembershipQuery",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s({ candidates: [], selection: { kind: "none" } });
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getCustomerManagerLocalMembership",
              o("WAWebCustomerManagerLocalMembershipQuery")
                .queryCustomerManagerLocalMembership,
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted(e);
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getCustomerManagerLocalMembershipReadinessJob = e),
      (l.getCustomerManagerLocalMembershipJob = s));
  },
  98,
);
