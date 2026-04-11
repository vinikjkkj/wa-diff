__d(
  "WAWebGroupMembershipApprovalRequestsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebGroupsMembershipApprovalRequestsApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = { group: e, requests: t, isOffline: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "removeMembershipApprovalRequests",
          function (e) {
            return o(
              "WAWebGroupsMembershipApprovalRequestsApi",
            ).removeMembershipApprovalRequests(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    l.removeMembershipApprovalRequestsJob = e;
  },
  98,
);
