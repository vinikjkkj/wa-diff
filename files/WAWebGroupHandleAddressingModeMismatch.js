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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o(
        "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
      ).logDuplicateRequestsWrapper(o("WAWebGroupQueryBridge").sendQueryGroup);
    async function d(t, n) {
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
        o("WAWebWamAddressingModeMismatchReporter").logAddressingModeMismatch(
          n,
        ),
        await m(t, r, n),
        await p(t, r));
    }
    async function m(e, t, n) {
      var r = await o(
        "WAWebDBGroupParticipant",
      ).migrateParticipantInfoAddressingMode(e, t);
      if (
        r === o("WAWebDBGroupParticipant").AddressingModeMigrationResult.Success
      ) {
        var a = await o("WAWebDBGroupParticipant").getGroupParticipant({
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
          await c(e, n.mismatchOrigin));
    }
    async function p(e, t) {
      var n = o("WAWebLidMigrationUtils").toAddressingModeFactory(t),
        a = await o(
          "WAWebApiMembershipApprovalRequestStore",
        ).getMembershipApprovalRequests(e);
      if (a.length !== 0)
        try {
          var i = a.map(function (e) {
            return babelHelpers.extends({}, e, {
              id: r("WANullthrows")(n(e.id)),
              addedBy: r("WANullthrows")(n(e.addedBy)),
            });
          });
          (await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["pending-membership-approval-request"], async function () {
              (await o(
                "WAWebApiMembershipApprovalRequestStore",
              ).removeMembershipApprovalRequests(
                e,
                a.map(function (e) {
                  return e.id;
                }),
              ),
                await o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).addMembershipApprovalRequests(e, i));
            }),
            o("WAWebBackendApi").frontendFireAndForget(
              "removeMembershipApprovalRequests",
              {
                groupId: e,
                requestIds: a.map(function (e) {
                  return e.id;
                }),
              },
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "addMembershipApprovalRequests",
              { groupId: e, requests: i },
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
    }
    l.handleAddressingModeMismatch = d;
  },
  98,
);
