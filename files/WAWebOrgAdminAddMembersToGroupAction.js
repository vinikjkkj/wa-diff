__d(
  "WAWebOrgAdminAddMembersToGroupAction",
  [
    "WALogger",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebOrgManagedGroupsRepository",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["runParticipantFollowUp"];
    async function u(t, n, a) {
      var i,
        l = new Set(
          (i = n.participants) == null
            ? void 0
            : i.map(function (e) {
                return e.lid;
              }),
        ),
        u = a.filter(function (e) {
          var t = o("WAWebOrgAdminGroupCandidate").getOrgAdminGroupCandidateLID(
            e,
          );
          return t == null || !l.has(t);
        }),
        c = a.length - u.length;
      if (u.length === 0)
        return {
          addedMemberCount: 0,
          alreadyMemberCount: c,
          failedMemberCount: 0,
          invitedMemberCount: 0,
          runParticipantFollowUp: null,
        };
      try {
        var d = await o(
            "WAWebOrgManagedGroupsRepository",
          ).runOrgManagedGroupsMutation(t, async function (e) {
            var t = e.refreshGroupAfterMutation,
              r = await o(
                "WAWebOrgAdminGroupParticipantsAction",
              ).addOrgGroupCandidatesToGroup(n.gid, u);
            return (await t(n.gid), r);
          }),
          m = d.runParticipantFollowUp,
          p = babelHelpers.objectWithoutPropertiesLoose(d, s);
        return babelHelpers.extends(
          {},
          o(
            "WAWebOrgAdminGroupParticipantsAction",
          ).getOrgAdminGroupParticipantOutcomeCounts(u.length, p),
          { alreadyMemberCount: c, runParticipantFollowUp: m },
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] adding members to a group failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-add-members-to-group-failed"),
          null
        );
      }
    }
    l.addOrgAdminMembersToGroup = u;
  },
  98,
);
