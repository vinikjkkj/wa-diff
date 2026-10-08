__d(
  "WAWebOrgAdminAddMembersToGroupAction",
  [
    "WALogger",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebOrgManagedGroupsRepository",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["runParticipantFollowUp", "smsInviteCandidateCount"];
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            u = new Set(
              (l = a.participants) == null
                ? void 0
                : l.map(function (e) {
                    return e.lid;
                  }),
            ),
            c = i
              .filter(function (e) {
                return !u.has(e.lid);
              })
              .map(
                o("WAWebOrgAdminGroupCandidate")
                  .directoryMemberToGroupCandidate,
              ),
            d = i.length - c.length;
          if (c.length === 0)
            return {
              addedMemberCount: 0,
              alreadyMemberCount: d,
              failedMemberCount: 0,
              invitedMemberCount: 0,
              runParticipantFollowUp: null,
            };
          try {
            var m = yield o(
                "WAWebOrgManagedGroupsRepository",
              ).runOrgManagedGroupsMutation(
                t,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.refreshGroupAfterMutation,
                        n = yield o(
                          "WAWebOrgAdminGroupParticipantsAction",
                        ).addOrgGroupCandidatesToGroup(a.gid, c);
                      return (yield t(a.gid), n);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              p = m.runParticipantFollowUp,
              _ = m.smsInviteCandidateCount,
              f = babelHelpers.objectWithoutPropertiesLoose(m, s);
            return babelHelpers.extends(
              {},
              o(
                "WAWebOrgAdminGroupParticipantsAction",
              ).getOrgAdminGroupParticipantOutcomeCounts(c.length, f, _),
              { alreadyMemberCount: d, runParticipantFollowUp: p },
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
        })),
        c.apply(this, arguments)
      );
    }
    l.addOrgAdminMembersToGroup = u;
  },
  98,
);
