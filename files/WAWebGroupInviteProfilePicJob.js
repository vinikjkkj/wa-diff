__d(
  "WAWebGroupInviteProfilePicJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQueryGroupInviteProfilePicApi",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.code,
        n = e.groupWid,
        r = e.option,
        a = { groupWid: n, code: t, option: r };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroupInviteLinkProfilePic",
          function (e) {
            return o(
              "WAWebQueryGroupInviteProfilePicApi",
            ).queryGroupInviteLinkProfilePic(a);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted(a);
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
