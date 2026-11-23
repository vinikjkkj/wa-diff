__d(
  "WAWebGroupHandleAddressingModeMismatch",
  [
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendApi",
    "WAWebDBGroupParticipant",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
    "WAWebHandleMsgCommon",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebWamAddressingModeMismatchReporter",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["membershipFormAnswers"],
      s,
      u,
      c,
      d = o(
        "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
      ).logDuplicateRequestsWrapper(o("WAWebGroupQueryBridge").sendQueryGroup);
    async function m(e, t) {
      var n =
        t.serverAddressingMode ===
        o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid;
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Migrating group ",
            " to addressing mode ",
            "",
          ])),
        e.toString(),
        t.serverAddressingMode,
      ),
        o("WAWebWamAddressingModeMismatchReporter").logAddressingModeMismatch(
          t,
        ),
        await p(e, n, t),
        await _(e, n));
    }
    async function p(e, t, n) {
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Unable to migrate participants in ",
              " with local data",
            ])),
          e.toString(),
        ),
          await d(e, n.mismatchOrigin));
    }
    async function _(t, n) {
      var a = o("WAWebLidMigrationUtils").toAddressingModeFactory(n),
        i = await o(
          "WAWebApiMembershipApprovalRequestStore",
        ).getMembershipApprovalRequestsWithFormAnswers(t);
      if (i.length !== 0)
        try {
          var l = i.map(function (t) {
              var n = t.membershipFormAnswers,
                o = babelHelpers.objectWithoutPropertiesLoose(t, e);
              return {
                request: babelHelpers.extends({}, o, {
                  id: r("nullthrows")(a(o.id)),
                  addedBy: r("nullthrows")(a(o.addedBy)),
                }),
                membershipFormAnswers: n,
              };
            }),
            s = l.map(function (e) {
              var t = e.request;
              return t;
            });
          (await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["pending-membership-approval-request"], async function () {
              (await o(
                "WAWebApiMembershipApprovalRequestStore",
              ).removeMembershipApprovalRequests(
                t,
                i.map(function (e) {
                  return e.id;
                }),
              ),
                await o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).addMembershipApprovalRequests(
                  t,
                  l.map(function (e) {
                    var t = e.membershipFormAnswers,
                      n = e.request;
                    return babelHelpers.extends({}, n, {
                      membershipFormAnswers: t,
                    });
                  }),
                ));
            }),
            o("WAWebBackendApi").frontendFireAndForget(
              "removeMembershipApprovalRequests",
              {
                groupId: t,
                requestIds: i.map(function (e) {
                  return e.id;
                }),
              },
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "addMembershipApprovalRequests",
              { groupId: t, requests: s },
            ));
        } catch (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Unable to migrate pending approvals in ",
                " with local data",
              ])),
            t.toString(),
          );
        }
    }
    l.handleAddressingModeMismatch = m;
  },
  98,
);
