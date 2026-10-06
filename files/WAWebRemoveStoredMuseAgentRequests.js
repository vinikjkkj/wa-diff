__d(
  "WAWebRemoveStoredMuseAgentRequests",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBotGroupGatingUtils",
    "WAWebGroupAgentMembershipRequests",
    "WAWebGroupMembershipApprovalRequestsJob",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (
            !(
              !o(
                "WAWebBotGroupGatingUtils",
              ).isStandardBotProfileGroupEnabled() || n.length === 0
            )
          )
            try {
              var i = yield o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).getMembershipApprovalRequests(t),
                l = i
                  .map(function (e) {
                    return e.id;
                  })
                  .filter(
                    o("WAWebGroupAgentMembershipRequests")
                      .isMuseAgentRequestCandidate,
                  )
                  .map(String);
              if (l.length === 0) return;
              var s = new Map(
                  (yield o("WAWebSchemaBotProfile")
                    .getBotProfileTable()
                    .bulkGet(l)).map(function (e, t) {
                    return [l[t], e];
                  }),
                ),
                u = o("WAWebGroupAgentMembershipRequests")
                  .selectMuseAgentRequestsOfRemovedMembers(i, n, {
                    getAgentProfile: function (t) {
                      return s.get(String(t));
                    },
                    getAlternateUserWid:
                      o("WAWebApiContact").getAlternateUserWid,
                  })
                  .map(function (e) {
                    return e.id;
                  });
              u.length > 0 &&
                (yield o(
                  "WAWebGroupMembershipApprovalRequestsJob",
                ).removeMembershipApprovalRequestsJob(t, u, a));
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "removeStoredMuseAgentRequestsOfRemovedMembers failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-agent-remove-stored-muse-request-failed");
            }
        })),
        u.apply(this, arguments)
      );
    }
    l.removeStoredMuseAgentRequestsOfRemovedMembers = s;
  },
  98,
);
