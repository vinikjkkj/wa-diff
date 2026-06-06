__d(
  "WAWebGroupHandleAddressingModeMismatch",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendApi",
    "WAWebDBGroupParticipant",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
    "WAWebHandleMsgCommon",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebWamAddressingModeMismatchReporter",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o(
        "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
      ).logDuplicateRequestsWrapper(o("WAWebGroupQueryBridge").sendQueryGroup);
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r =
            n.serverAddressingMode ===
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Migrating group ",
                " to addressing mode ",
                "",
              ])),
            t.toString(),
            n.serverAddressingMode,
          ),
            o(
              "WAWebWamAddressingModeMismatchReporter",
            ).logAddressingModeMismatch(n),
            yield p(t, r, n),
            yield f(t, r));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebDBGroupParticipant",
          ).migrateParticipantInfoAddressingMode(e, t);
          if (
            r ===
            o("WAWebDBGroupParticipant").AddressingModeMigrationResult.Success
          ) {
            var a = yield o("WAWebDBGroupParticipant").getGroupParticipant({
              groupWid: e,
            });
            o("WAWebBackendApi").frontendFireAndForget(
              "updateGroupAddressingMode",
              {
                id: e,
                isLidAddressingMode: t,
                groupInfoUpdate: {
                  participants: a == null ? void 0 : a.participants,
                },
              },
            );
          } else
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Unable to migrate participants in ",
                  " with local data",
                ])),
              e.toString(),
            ),
              yield c(e, n.mismatchOrigin));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = o("WAWebLidMigrationUtils").toAddressingModeFactory(t),
            i = yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(e);
          if (i.length !== 0)
            try {
              var l = i.map(function (e) {
                return babelHelpers.extends({}, e, {
                  id: r("WANullthrows")(a(e.id)),
                  addedBy: r("WANullthrows")(a(e.addedBy)),
                });
              });
              (yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["pending-membership-approval-request"],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (yield o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeMembershipApprovalRequests(
                      e,
                      i.map(function (e) {
                        return e.id;
                      }),
                    ),
                      yield o(
                        "WAWebApiMembershipApprovalRequestStore",
                      ).addMembershipApprovalRequests(e, l));
                  }),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "removeMembershipApprovalRequests",
                  {
                    groupId: e,
                    requestIds: i.map(function (e) {
                      return e.id;
                    }),
                  },
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "addMembershipApprovalRequests",
                  { groupId: e, requests: l },
                ));
            } catch (t) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to migrate pending approvals in ",
                    " with local data",
                  ])),
                e.toString(),
              );
            }
        })),
        g.apply(this, arguments)
      );
    }
    l.handleAddressingModeMismatch = d;
  },
  98,
);
