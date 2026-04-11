__d(
  "WAWebGroupInviteProfilePicJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQueryGroupInviteProfilePicApi",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = { groupWid: e, code: t, option: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroupInviteLinkProfilePic",
          function (e) {
            return o(
              "WAWebQueryGroupInviteProfilePicApi",
            ).queryGroupInviteLinkProfilePic(r);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted(r);
    }
    function s(e, t, n, r, a) {
      var i = { groupWid: e, code: t, expiration: n, adminWid: r, option: a };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroupInviteMessageProfilePic",
          function (e) {
            return o(
              "WAWebQueryGroupInviteProfilePicApi",
            ).queryGroupInviteMessageProfilePic(i);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted(i);
    }
    ((l.queryGroupInviteLinkProfilePicJob = e),
      (l.queryGroupInviteMessageProfilePicJob = s));
  },
  98,
);
