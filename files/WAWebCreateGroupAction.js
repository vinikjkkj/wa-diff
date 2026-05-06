__d(
  "WAWebCreateGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCoreActionsODS",
    "WAWebFindChatAction",
    "WAWebGroupCreateJob",
    "WAWebGroupCreateWamEvent",
    "WAWebGroupGatingUtils",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupQueryBridge",
    "WAWebHandleMsgCommon",
    "WAWebJidToWid",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNoop",
    "WAWebOutContactConsts",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebProfilePicThumbAction",
    "WAWebProfilePicThumbCollection",
    "WAWebSendForNeededAddRequest",
    "WAWebSetUsernameJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "fbs",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t, n, r) {
      return (n === void 0 && (n = []), p(e, t, void 0, n, r));
    }
    function p(t, a, i, l, c) {
      (i === void 0 && (i = o("WAWebActionToast.react").genId()),
        l === void 0 && (l = []));
      var m = t.full,
        f = t.parentGroupId,
        g = t.thumb,
        h = t.title,
        y =
          o("WAWebUsernameGatingUtils").usernameGroupMutationEnabled() ||
          t.addressingModeOverride ===
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid,
        C;
      try {
        C = a.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, y, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          (u || (u = n("Promise"))).resolve(void 0)
        );
      }
      var b = l.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        v = o("WAWebGroupCreateJob")
          .createGroup(t, C, b)
          .then(function (e) {
            var n = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            (o("WAWebCoreActionsODS").logGroupCreate(),
              c != null &&
                new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                  ephemeralityDuration: t.ephemeralDuration,
                  groupCreateEntryPoint: c,
                  hasGroupName: h.trim().length > 0,
                }).commit());
            var r = e.participants.map(function (e) {
              return {
                userWid: e.wid,
                username: e.username,
                code: e.error != null ? e.error.toString() : "200",
                invite_code: e.invite_code,
                invite_code_exp: e.invite_code_exp,
              };
            });
            return {
              gid: n,
              participants: r,
              invitedOutContacts: e.invitedOutContacts,
            };
          }),
        S = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Creating group"),
        ),
        R = v
          .then(function (e) {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Created group"),
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
                        s._(/*BTDS*/ "Couldn't create group."),
                      )
                    : e.status === 406
                      ? new (o("WAWebActionToast.react").ActionType)(
                          r("fbs")
                            ._(/*BTDS*/ "Couldn't create group.")
                            .toString() +
                            " " +
                            r("fbs")
                              ._(/*BTDS*/ "Please enter a shorter subject.")
                              .toString(),
                        )
                      : e.status === 412
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(
                              /*BTDS*/ "You can't create this group because the community is full.",
                            ),
                          )
                        : e.status === 429
                          ? new (o("WAWebActionToast.react").ActionType)(
                              r("fbs")
                                ._(/*BTDS*/ "Couldn't create group.")
                                .toString() +
                                " " +
                                r("fbs")
                                  ._(
                                    /*BTDS*/ "You've created too many groups too quickly. Try again later.",
                                  )
                                  .toString(),
                            )
                          : new (o("WAWebActionToast.react").ActionType)(
                              s._(/*BTDS*/ "Couldn't create group."),
                            )
                );
              },
            ),
          )
          .catch(function (n) {
            if (
              (o("WAWebCoreActionsODS").logGroupCreateError(),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chatCollection:createGroup dropped",
                  ])),
              ),
              n.status === 429 &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_group_create_or_add_rate_limiting_error_ux",
                ))
            )
              switch (n.name) {
                case "GroupAddParticipantTimeRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsTimeRateLimitText(n),
                  );
                case "GroupAddParticipantCountRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsCountRateLimitText(n),
                  );
              }
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Couldn't create group."),
              {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: function () {
                  return p(t, a, i, l, c);
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: S,
            pendingAction: R,
          }),
        ),
        v
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n = (t = e.invitedOutContacts) != null ? t : [],
                    a = e.participants.some(function (e) {
                      return e.code === "403";
                    }),
                    i = new Set(
                      n
                        .filter(function (e) {
                          return e.invite_code != null;
                        })
                        .map(function (e) {
                          return e.phoneNumberWid.toString();
                        }),
                    ),
                    s = l.filter(function (e) {
                      return i.has(
                        o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                      );
                    }),
                    u = n.filter(function (e) {
                      return e.invite_code == null;
                    }).length,
                    c = function () {
                      if (s.length > 0) {
                        o("WAWebModalManager").ModalManager.open(
                          d.jsx(
                            r("WAWebOutContactSmsInviteConfirmModal.react"),
                            {
                              names: s.map(function (e) {
                                return e.getName();
                              }),
                              onConfirm: function () {
                                (o(
                                  "WAWebOutContactInviteAction",
                                ).sendMultiGroupInvite(
                                  s.map(function (e) {
                                    return e.phoneNumber;
                                  }),
                                  o("WAWebWidToJid").widToGroupJid(e.gid),
                                  o("WAWebOutContactConsts")
                                    .WAWebOutContactInviteEntryPoint
                                    .GROUP_INVITE_CREATE_NEW_GROUP,
                                ),
                                  o("WAWebModalManager").closeModalManager());
                              },
                              onCancel:
                                o("WAWebModalManager").closeModalManager,
                            },
                          ),
                        );
                        return;
                      }
                      _(u);
                    };
                  if (
                    (a
                      ? o(
                          "WAWebSendForNeededAddRequest",
                        ).sendForNeededAddRequest(e, h, void 0, c)
                      : c(),
                    f == null &&
                      e.gid &&
                      o("WAWebFindChatAction")
                        .findOrCreateLatestChat(e.gid, "createGroupAction")
                        .then(function (t) {
                          var n = t.chat;
                          (o("WAWebCmd")
                            .Cmd.openChatBottom({ chat: n })
                            .then(function (e) {
                              e &&
                                o(
                                  "WAWebComposeBoxActions",
                                ).ComposeBoxActions.focus(n);
                            }),
                            (h === "" ||
                              o(
                                "WAWebGroupGatingUtils",
                              ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                              o("WAWebGroupQueryBridge")
                                .sendQueryGroup(e.gid)
                                .finally(r("WAWebNoop")));
                        }),
                    g != null && m != null)
                  ) {
                    var p = o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.gadd(e.gid);
                    yield o("WAWebProfilePicThumbAction")
                      .setProfilePic(p, g, m)
                      .then(function () {
                        return e.gid;
                      });
                  }
                  if (
                    o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
                  ) {
                    var y = e.participants.reduce(function (e, t) {
                      return (
                        t.username != null &&
                          e.push({
                            username: t.username,
                            userId: o("WAWebWidFactory").asUserWidOrThrow(
                              t.userWid,
                            ),
                          }),
                        e
                      );
                    }, []);
                    y.length > 0 &&
                      (yield o("WAWebSetUsernameJob").setUsernamesJob(y));
                  }
                  return e.gid;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
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
    function _(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    l.createGroup = m;
  },
  226,
);
