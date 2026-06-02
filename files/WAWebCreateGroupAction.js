__d(
  "WAWebCreateGroupAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCoreActionsODS",
    "WAWebFindChatAction",
    "WAWebGroupCreateJob",
    "WAWebGroupCreateWamEvent",
    "WAWebGroupGatingUtils",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupQueryBridge",
    "WAWebJidToWid",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNoop",
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
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "countWhere",
    "fbs",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n, r) {
      return (n === void 0 && (n = []), m(e, t, void 0, n, r));
    }
    function m(t, n, a, i, l) {
      (a === void 0 && (a = o("WAWebActionToast.react").genId()),
        i === void 0 && (i = []));
      var u = t.full,
        d = t.parentGroupId,
        _ = t.thumb,
        f = t.title,
        g;
      try {
        g = n.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, !0, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          Promise.resolve(void 0)
        );
      }
      var h = i.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        y = o("WAWebGroupCreateJob")
          .createGroup(t, g, h)
          .then(function (e) {
            var n = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            (o("WAWebCoreActionsODS").logGroupCreate(),
              l != null &&
                new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                  ephemeralityDuration: t.ephemeralDuration,
                  groupCreateEntryPoint: l,
                  hasGroupName: f.trim().length > 0,
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
        C = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Creating group"),
        ),
        b = y
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
          .catch(function (r) {
            if (
              (o("WAWebCoreActionsODS").logGroupCreateError(),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chatCollection:createGroup dropped",
                  ])),
              ),
              r.status === 429 &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_group_create_or_add_rate_limiting_error_ux",
                ))
            )
              switch (r.name) {
                case "GroupAddParticipantTimeRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsTimeRateLimitText(r),
                  );
                case "GroupAddParticipantCountRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsCountRateLimitText(r),
                  );
              }
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Couldn't create group."),
              {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: function () {
                  return m(t, n, a, i, l);
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: C,
            pendingAction: b,
          }),
        ),
        y
          .then(async function (e) {
            var t,
              n = (t = e.invitedOutContacts) != null ? t : [],
              a = e.participants.some(function (e) {
                return e.code === "403";
              }),
              l = new Set(
                n
                  .filter(function (e) {
                    return e.invite_code != null;
                  })
                  .map(function (e) {
                    return e.phoneNumberWid.toString();
                  }),
              ),
              s = i.filter(function (e) {
                return l.has(
                  o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                );
              }),
              m = r("countWhere")(n, function (e) {
                return e.invite_code == null;
              }),
              g = function () {
                if (s.length > 0) {
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                      names: s.map(function (e) {
                        return e.getName();
                      }),
                      onConfirm: function () {
                        (o("WAWebOutContactInviteAction").sendMultiGroupInvite(
                          s.map(function (e) {
                            return e.phoneNumber;
                          }),
                          o("WAWebWidToJid").widToGroupJid(e.gid),
                          o("WAWebWamEnumCompanionInviteOriginType")
                            .COMPANION_INVITE_ORIGIN_TYPE
                            .GROUPS_CREATE_PARTICIPANT_SELECTOR,
                        ),
                          o("WAWebModalManager").closeModalManager());
                      },
                      onCancel: o("WAWebModalManager").closeModalManager,
                    }),
                  );
                  return;
                }
                p(m);
              };
            if (
              (a
                ? o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
                    e,
                    f,
                    void 0,
                    g,
                  )
                : g(),
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
                      (f === "" ||
                        o(
                          "WAWebGroupGatingUtils",
                        ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                        o("WAWebGroupQueryBridge")
                          .sendQueryGroup(e.gid)
                          .finally(r("WAWebNoop")));
                  }),
              _ != null && u != null)
            ) {
              var h = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.gadd(e.gid);
              await o("WAWebProfilePicThumbAction")
                .setProfilePic(h, _, u)
                .then(function () {
                  return e.gid;
                });
            }
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var y = e.participants.reduce(function (e, t) {
                return (
                  t.username != null &&
                    e.push({
                      username: t.username,
                      userId: o("WAWebWidFactory").asUserWidOrThrow(t.userWid),
                    }),
                  e
                );
              }, []);
              y.length > 0 &&
                (await o("WAWebSetUsernameJob").setUsernamesJob(y));
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
    function p(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    l.createGroup = d;
  },
  226,
);
