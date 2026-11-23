__d(
  "WAWebCreateGroupAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WARandomHex",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCoreActionsODS",
    "WAWebFindChatAction",
    "WAWebGroupAddResultDialogs.react",
    "WAWebGroupAgentConflictAddResult",
    "WAWebGroupCreateJob",
    "WAWebGroupCreateWamEvent",
    "WAWebGroupIncompatibleDeviceAddResult",
    "WAWebGroupLifecycleService",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupOutContactInvite",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryService",
    "WAWebGroupSettingsService",
    "WAWebJidToWid",
    "WAWebLidMappingService",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNoop",
    "WAWebOrgGatingUtils",
    "WAWebOutContactInviteUtils",
    "WAWebProfilePicThumbAction",
    "WAWebProfilePicThumbCollection",
    "WAWebSendForNeededAddRequest",
    "WAWebSetUsernameJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "fbs",
    "getErrorSafe",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react")),
      y = [];
    function C(e, t, n, r) {
      return (
        n === void 0 && (n = y),
        L({
          createGroupArgs: e,
          groupCreateEntryPoint: r,
          outContacts: n,
          participants: t,
        })
      );
    }
    var b = 8,
      v = {
        announce: !0,
        memberAddMode: !0,
        memberLinkMode: !0,
        memberShareGroupHistoryMode: !0,
        membershipApprovalMode: !1,
        restrict: !0,
      };
    async function S(t, n, a, i, l) {
      var s, f;
      if (
        (n === void 0 && (n = null),
        a === void 0 && (a = null),
        i === void 0 && (i = v),
        l === void 0 && (l = null),
        !o("WAWebOrgGatingUtils").isOrgsEnabled())
      )
        throw r("err")("Org admin UI is disabled");
      var g = Date.now();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin][group] create started",
          ])),
      );
      var h = {
          title: t,
          thumb: null,
          full: null,
          restrict: i.restrict,
          announce: i.announce,
          membershipApprovalMode: i.membershipApprovalMode,
          memberAddMode: i.memberAddMode,
          memberShareGroupHistoryMode: i.memberShareGroupHistoryMode,
          memberLinkMode: i.memberLinkMode,
        },
        y,
        C;
      try {
        ((y = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupLifecycleService").GroupLifecycleService,
              ).createGroup
            : o("WAWebGroupCreateJob").createGroup
        )(h, [], [])),
          (C = o("WAWebWidFactory").asGroupWidOrThrow(y.wid)));
      } catch (e) {
        throw (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin][group] create failed after ",
                "ms",
              ])),
            Date.now() - g,
          ),
          e
        );
      }
      (o("WAWebCoreActionsODS").logGroupCreate(),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[org-admin][group] create succeeded after ",
              "ms",
            ])),
          Date.now() - g,
        ));
      try {
        await o("WAWebFindChatAction").findOrCreateLatestChat(
          C,
          "createGroupAction",
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "createOrgAdminGroup local chat hydration dropped",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("org-admin-group-local-hydration-failed");
      }
      if (n != null && a != null)
        try {
          await o("WAWebProfilePicThumbAction").setProfilePic({
            full: a,
            profilePicThumb: o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.gadd(C),
            thumb: n,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrgAdminGroup group photo update dropped",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-photo-update-failed");
        }
      var S = (s = (f = l) == null ? void 0 : f.trim()) != null ? s : "";
      if (S !== "")
        try {
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupSettingsService").GroupSettingsService,
                ).setGroupDescription
              : o("WAWebGroupModifyInfoJob").setGroupDescription
          )({
            desc: S,
            groupWid: C,
            newDescId: o("WARandomHex").randomHex(b),
            prevDescId: null,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrgAdminGroup group description update dropped",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-description-update-failed");
        }
      return (
        (o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebGroupQueryService").GroupQueryService,
            ).sendQueryGroup
          : o("WAWebGroupQueryBridge").sendQueryGroup)(C).catch(function (e) {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrgAdminGroup metadata hydration dropped",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-metadata-hydration-failed");
        }),
        {
          gid: C,
          participants: E(y.participants),
          invitedOutContacts: y.invitedOutContacts,
        }
      );
    }
    function R(e) {
      return o("WAWebGroupMutationParticipantUtils").getGroupAddParticipant(
        e,
        !0,
        "createGroup",
      );
    }
    function L(e) {
      var t = e.createGroupArgs,
        n = e.groupCreateEntryPoint,
        a = e.outContacts,
        i = e.participants,
        l = e.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        c = t.full,
        d = t.parentGroupId,
        m = t.thumb,
        p = t.title,
        _;
      try {
        _ = i.map(R);
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          o("WAWebToastManager").ToastManager.open(
            h.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          Promise.resolve(void 0)
        );
      }
      var g = a.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        y = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupLifecycleService").GroupLifecycleService,
              ).createGroup
            : o("WAWebGroupCreateJob").createGroup
        )(t, _, g).then(function (e) {
          var r = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
          return (
            o("WAWebCoreActionsODS").logGroupCreate(),
            n != null &&
              new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                ephemeralityDuration: t.ephemeralDuration,
                groupCreateEntryPoint: n,
                hasGroupName: p.trim().length > 0,
              }).commit(),
            {
              gid: r,
              participants: E(e.participants),
              invitedOutContacts: e.invitedOutContacts,
            }
          );
        }),
        C = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        b = y
          .then(function (e) {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ ""),
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                return (
                  o("WAWebCoreActionsODS").logGroupCreateError(),
                  !r("gkx")("26258") && e.status === 400
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ ""),
                      )
                    : e.status === 406
                      ? new (o("WAWebActionToast.react").ActionType)(
                          r("fbs")._(/*BTDS*/ "").toString() +
                            " " +
                            r("fbs")._(/*BTDS*/ "").toString(),
                        )
                      : e.status === 412
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ ""),
                          )
                        : e.status === 429
                          ? new (o("WAWebActionToast.react").ActionType)(
                              r("fbs")._(/*BTDS*/ "").toString() +
                                " " +
                                r("fbs")._(/*BTDS*/ "").toString(),
                            )
                          : new (o("WAWebActionToast.react").ActionType)(
                              s._(/*BTDS*/ ""),
                            )
                );
              },
            ),
          )
          .catch(function (e) {
            if (
              (o("WAWebCoreActionsODS").logGroupCreateError(),
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chatCollection:createGroup dropped",
                  ])),
              ),
              e.status === 429 &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_group_create_or_add_rate_limiting_error_ux",
                ))
            )
              switch (e.name) {
                case "GroupAddParticipantTimeRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsTimeRateLimitText(e),
                  );
                case "GroupAddParticipantCountRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsCountRateLimitText(e),
                  );
              }
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ ""),
              {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: function () {
                  return L({
                    createGroupArgs: t,
                    groupCreateEntryPoint: n,
                    outContacts: a,
                    participants: i,
                    toastId: u,
                  });
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: u,
            initialAction: C,
            pendingAction: b,
          }),
        ),
        y
          .then(async function (e) {
            var t,
              n = (t = e.invitedOutContacts) != null ? t : [],
              i = e.participants.some(function (e) {
                return e.code === "403";
              }),
              l = function () {
                var t = o("WAWebGroupOutContactInvite").inviteGroupOutContacts({
                    entryPoint: o("WAWebWamEnumCompanionInviteOriginType")
                      .COMPANION_INVITE_ORIGIN_TYPE
                      .GROUPS_CREATE_PARTICIPANT_SELECTOR,
                    groupJid: o("WAWebWidToJid").widToGroupJid(e.gid),
                    groupName: p,
                    invitedOutContacts: n,
                    isStandaloneGroup: d == null,
                    outContacts: a,
                  }),
                  r = t.uninvitedCount;
                k(r);
              };
            if (
              (o("WAWebGroupAddResultDialogs.react").runAfterAddResultDialogs(
                {
                  agentConflictWids: o(
                    "WAWebGroupAgentConflictAddResult",
                  ).getAgentConflictRejectedWids(e.participants),
                  hasIncompatibleDeviceRejection: o(
                    "WAWebGroupIncompatibleDeviceAddResult",
                  ).hasAgentIncompatibleDeviceRejection(e.participants),
                },
                function () {
                  i
                    ? o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
                        {
                          groupAddResponse: e,
                          groupDesc: void 0,
                          onFinish: l,
                          subject: p,
                        },
                      )
                    : l();
                },
              ),
              d == null &&
                e.gid &&
                o("WAWebFindChatAction")
                  .findOrCreateLatestChat(e.gid, "createGroupAction")
                  .then(function (t) {
                    var n = t.chat;
                    (o("WAWebCmd")
                      .Cmd.openChatBottom({
                        chat: n,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                          .NewGroupCreation,
                      })
                      .then(function (e) {
                        e &&
                          o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                            n,
                          );
                      }),
                      (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                        ? o("WAWebBackendRuntime").runtime(
                            o("WAWebGroupQueryService").GroupQueryService,
                          ).sendQueryGroup
                        : o("WAWebGroupQueryBridge").sendQueryGroup)(
                        e.gid,
                      ).finally(r("WAWebNoop")));
                  }),
              m != null && c != null)
            ) {
              var s = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.gadd(e.gid);
              await o("WAWebProfilePicThumbAction")
                .setProfilePic({ full: c, profilePicThumb: s, thumb: m })
                .then(function () {
                  return e.gid;
                });
            }
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var u = e.participants.reduce(function (e, t) {
                return (
                  t.username != null &&
                    e.push({
                      username: o("WAWebUsernameTypes").asUsername(t.username),
                      userId: o("WAWebWidFactory").asUserWidOrThrow(t.userWid),
                    }),
                  e
                );
              }, []);
              u.length > 0 &&
                (await (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebLidMappingService").LidMappingService,
                      ).setUsernamesJob
                    : o("WAWebSetUsernameJob").setUsernamesJob
                )(u));
            }
            return e.gid;
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              r("WAWebNoop"),
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors")
                .GroupAddParticipantCountRateLimitServerError,
              r("WAWebNoop"),
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors")
                .GroupAddParticipantTimeRateLimitServerError,
              r("WAWebNoop"),
            ),
          )
      );
    }
    function E(e) {
      return e.map(function (e) {
        return {
          userWid: e.wid,
          username: e.username,
          code: e.error != null ? e.error.toString() : "200",
          invite_code: e.invite_code,
          invite_code_exp: e.invite_code_exp,
        };
      });
    }
    function k(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    ((l.createGroup = C),
      (l.DEFAULT_ORG_ADMIN_GROUP_PERMISSIONS = v),
      (l.createOrgAdminGroup = S));
  },
  226,
);
