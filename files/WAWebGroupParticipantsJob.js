__d(
  "WAWebGroupParticipantsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebGroupsParticipantsApi",
    "WAWebLidMigrationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaParticipant",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").updateParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(e);
    }
    function s(e, t) {
      var n = { parentGroupId: e, isParentGroupLidAddressingMode: t };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "migrateParticipantsToLIDOrPN",
          function (e) {
            return g(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(n);
    }
    function u(e, t, n, r) {
      var a = { group: e, participants: t, isOffline: n, reason: r };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "addParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").addParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(a);
    }
    function c(e, t, n, r, a, i, l) {
      var s = {
        group: e,
        participants: t,
        timestamp: n,
        author: r,
        reason: a,
        groupMetadata: i,
        isOffline: l,
      };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "removeParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").removeParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(s);
    }
    function d(e, t, n, r) {
      var a = { group: e, participants: t, groupMetadata: n, isOffline: r };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "demoteParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").demoteParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(a);
    }
    function m(e, t, n, r) {
      var a = { group: e, participants: t, groupMetadata: n, isOffline: r };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "promoteParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").promoteParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(a);
    }
    function p(e, t) {
      var n = { group: e, newSuperAdmin: t };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setGroupSuperAdmin",
          function (e) {
            return o("WAWebGroupsParticipantsApi").setGroupSuperAdmin(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(n);
    }
    function _(e, t, n) {
      var r = { group: e, participants: t, isOffline: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "promoteCommunityParticipants",
          function (e) {
            return o(
              "WAWebGroupsParticipantsApi",
            ).promoteCommmunityParticipants(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    function f(e, t, n) {
      var r = { group: e, participants: t, isOffline: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "demoteCommunityParticipants",
          function (e) {
            return o("WAWebGroupsParticipantsApi").demoteCommmunityParticipants(
              e,
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.isParentGroupLidAddressingMode,
            i = e.parentGroupId,
            l = yield o("WAWebSchemaParticipant").getParticipantTable().get(i);
          if (l != null) {
            var s = a
                ? o("WAWebLidMigrationUtils").toUserLidOrThrow
                : o("WAWebLidMigrationUtils").toPnOrThrow,
              u = function (t) {
                return t.map(function (e) {
                  return s(
                    o("WAWebWidFactory").createUserWidOrThrow(e),
                  ).toString();
                });
              },
              c = u(l.participants),
              d = u(l.admins),
              m = u((t = l == null ? void 0 : l.superAdmins) != null ? t : []),
              p =
                (n =
                  (r = l.pastParticipants) == null
                    ? void 0
                    : r.map(function (e) {
                        var t = s(
                          o("WAWebWidFactory").createUserWidOrThrow(e.jid),
                        ).toString();
                        return babelHelpers.extends({}, e, { jid: t });
                      })) != null
                  ? n
                  : [];
            yield o("WAWebSchemaParticipant").getParticipantTable().merge(i, {
              groupId: i,
              participants: c,
              pastParticipants: p,
              admins: d,
              superAdmins: m,
            });
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.updateParticipantsJob = e),
      (l.migrateParentGroupToLIDOrFallbackToPNJob = s),
      (l.addParticipantsJob = u),
      (l.removeParticipantsJob = c),
      (l.demoteParticipantsJob = d),
      (l.promoteParticipantsJob = m),
      (l.setGroupSuperAdminJob = p),
      (l.promoteCommunityParticipantsJob = _),
      (l.demoteCommunityParticipantsJob = f));
  },
  98,
);
