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
    "WAWebUsernameTypes",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "countWhere",
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
      return (
        n === void 0 && (n = []),
        p({
          createGroupArgs: e,
          groupCreateEntryPoint: r,
          outContacts: n,
          participants: t,
        })
      );
    }
    function p(t) {
      var a = t.createGroupArgs,
        i = t.groupCreateEntryPoint,
        l = t.outContacts,
        c = l === void 0 ? [] : l,
        m = t.participants,
        f = t.toastId,
        g = f === void 0 ? o("WAWebActionToast.react").genId() : f,
        h = a.full,
        y = a.parentGroupId,
        C = a.thumb,
        b = a.title,
        v;
      try {
        v = m.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, !0, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          (u || (u = n("Promise"))).resolve(void 0)
        );
      }
      var S = c.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        R = o("WAWebGroupCreateJob")
          .createGroup(a, v, S)
          .then(function (e) {
            var t = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            (o("WAWebCoreActionsODS").logGroupCreate(),
              i != null &&
                new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                  ephemeralityDuration: a.ephemeralDuration,
                  groupCreateEntryPoint: i,
                  hasGroupName: b.trim().length > 0,
                }).commit());
            var n = e.participants.map(function (e) {
              return {
                userWid: e.wid,
                username: e.username,
                code: e.error != null ? e.error.toString() : "200",
                invite_code: e.invite_code,
                invite_code_exp: e.invite_code_exp,
              };
            });
            return {
              gid: t,
              participants: n,
              invitedOutContacts: e.invitedOutContacts,
            };
          }),
        L = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Creating group"),
        ),
        E = R.then(function (e) {
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
          .catch(function (t) {
            if (
              (o("WAWebCoreActionsODS").logGroupCreateError(),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chatCollection:createGroup dropped",
                  ])),
              ),
              t.status === 429 &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_group_create_or_add_rate_limiting_error_ux",
                ))
            )
              switch (t.name) {
                case "GroupAddParticipantTimeRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsTimeRateLimitText(t),
                  );
                case "GroupAddParticipantCountRateLimitServerError":
                  return new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebModifyParticipantsRateLimitText",
                    ).WAWebModifyParticipantsCountRateLimitText(t),
                  );
              }
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Couldn't create group."),
              {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: function () {
                  return p({
                    createGroupArgs: a,
                    groupCreateEntryPoint: i,
                    outContacts: c,
                    participants: m,
                    toastId: g,
                  });
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: g,
            initialAction: L,
            pendingAction: E,
          }),
        ),
        R.then(
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
                        return e.code !== "200";
                      })
                      .map(function (e) {
                        return e.phoneNumberWid.toString();
                      }),
                  ),
                  l = c.filter(function (e) {
                    return i.has(
                      o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                    );
                  }),
                  s = r("countWhere")(n, function (e) {
                    return e.code !== "200";
                  }),
                  u = function () {
                    if (l.length > 0) {
                      o("WAWebModalManager").ModalManager.open(
                        d.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                          names: l.map(function (e) {
                            return e.getName();
                          }),
                          onConfirm: function () {
                            (o(
                              "WAWebOutContactInviteAction",
                            ).sendMultiGroupInvite(
                              l.map(function (e) {
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
                    _(s);
                  };
                if (
                  (a
                    ? o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
                        e,
                        b,
                        void 0,
                        u,
                      )
                    : u(),
                  y == null &&
                    e.gid &&
                    o("WAWebFindChatAction")
                      .findOrCreateLatestChat(e.gid, "createGroupAction")
                      .then(function (t) {
                        var n = t.chat;
                        (o("WAWebCmd")
                          .Cmd.openChatBottom({
                            chat: n,
                            chatEntryPoint: o("WAWebChatEntryPoint")
                              .ChatEntryPoint.NewGroupCreation,
                          })
                          .then(function (e) {
                            e &&
                              o(
                                "WAWebComposeBoxActions",
                              ).ComposeBoxActions.focus(n);
                          }),
                          (b === "" ||
                            o(
                              "WAWebGroupGatingUtils",
                            ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                            o("WAWebGroupQueryBridge")
                              .sendQueryGroup(e.gid)
                              .finally(r("WAWebNoop")));
                      }),
                  C != null && h != null)
                ) {
                  var m = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.gadd(e.gid);
                  yield o("WAWebProfilePicThumbAction")
                    .setProfilePic(m, C, h)
                    .then(function () {
                      return e.gid;
                    });
                }
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                  var p = e.participants.reduce(function (e, t) {
                    return (
                      t.username != null &&
                        e.push({
                          username: o("WAWebUsernameTypes").asUsername(
                            t.username,
                          ),
                          userId: o("WAWebWidFactory").asUserWidOrThrow(
                            t.userWid,
                          ),
                        }),
                      e
                    );
                  }, []);
                  p.length > 0 &&
                    (yield o("WAWebSetUsernameJob").setUsernamesJob(p));
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
