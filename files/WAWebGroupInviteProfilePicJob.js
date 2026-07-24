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
    function s(e) {
      var t = e.adminWid,
        n = e.code,
        r = e.expiration,
        a = e.groupWid,
        i = e.option,
        l = { groupWid: a, code: n, expiration: r, adminWid: t, option: i };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroupInviteMessageProfilePic",
          function (e) {
            return o(
              "WAWebQueryGroupInviteProfilePicApi",
            ).queryGroupInviteMessageProfilePic(l);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted(l);
    }
    ((l.queryGroupInviteLinkProfilePicJob = e),
      (l.queryGroupInviteMessageProfilePicJob = s));
  },
  98,
);
