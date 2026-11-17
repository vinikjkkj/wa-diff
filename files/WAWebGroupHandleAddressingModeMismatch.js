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
    "asyncToGeneratorRuntime",
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            o(
              "WAWebWamAddressingModeMismatchReporter",
            ).logAddressingModeMismatch(t),
            yield _(e, n, t),
            yield g(e, n));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Unable to migrate participants in ",
                  " with local data",
                ])),
              e.toString(),
            ),
              yield d(e, n.mismatchOrigin));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = o("WAWebLidMigrationUtils").toAddressingModeFactory(a),
            l = yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequestsWithFormAnswers(t);
          if (l.length !== 0)
            try {
              var s = l.map(function (t) {
                  var n = t.membershipFormAnswers,
                    o = babelHelpers.objectWithoutPropertiesLoose(t, e);
                  return {
                    request: babelHelpers.extends({}, o, {
                      id: r("nullthrows")(i(o.id)),
                      addedBy: r("nullthrows")(i(o.addedBy)),
                    }),
                    membershipFormAnswers: n,
                  };
                }),
                u = s.map(function (e) {
                  var t = e.request;
                  return t;
                });
              (yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["pending-membership-approval-request"],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (yield o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeMembershipApprovalRequests(
                      t,
                      l.map(function (e) {
                        return e.id;
                      }),
                    ),
                      yield o(
                        "WAWebApiMembershipApprovalRequestStore",
                      ).addMembershipApprovalRequests(
                        t,
                        s.map(function (e) {
                          var t = e.membershipFormAnswers,
                            n = e.request;
                          return babelHelpers.extends({}, n, {
                            membershipFormAnswers: t,
                          });
                        }),
                      ));
                  }),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "removeMembershipApprovalRequests",
                  {
                    groupId: t,
                    requestIds: l.map(function (e) {
                      return e.id;
                    }),
                  },
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "addMembershipApprovalRequests",
                  { groupId: t, requests: u },
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
        })),
        h.apply(this, arguments)
      );
    }
    l.handleAddressingModeMismatch = m;
  },
  98,
);
