__d(
  "WAWebGetCustomerManagerLocalMembershipJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebCustomerManagerLocalMembershipQuery",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s({ candidates: [], selection: { kind: "none" } });
    }
    async function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getCustomerManagerLocalMembership",
          o("WAWebCustomerManagerLocalMembershipQuery")
            .queryCustomerManagerLocalMembership,
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted(e);
    }
    ((l.getCustomerManagerLocalMembershipReadinessJob = e),
      (l.getCustomerManagerLocalMembershipJob = s));
  },
  98,
);
