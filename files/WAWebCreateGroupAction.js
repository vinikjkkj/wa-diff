__d(
  "WAWebCreateGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WARandomHex",
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
    "WAWebGroupModifyInfoJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupQueryBridge",
    "WAWebJidToWid",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNoop",
    "WAWebOrgGatingUtils",
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
      h,
      y = h || (h = o("react")),
      C = [];
    function b(e, t, n, r) {
      return (
        n === void 0 && (n = C),
        E({
          createGroupArgs: e,
          groupCreateEntryPoint: r,
          outContacts: n,
          participants: t,
        })
      );
    }
    var v = 8,
      S = {
        announce: !1,
        memberAddMode: !1,
        memberLinkMode: null,
        memberShareGroupHistoryMode: !1,
        membershipApprovalMode: !1,
        restrict: !1,
      };
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l, s;
            if (
              (t === void 0 && (t = null),
              n === void 0 && (n = null),
              a === void 0 && (a = S),
              i === void 0 && (i = null),
              !o("WAWebOrgGatingUtils").isOrgHubEnabled())
            )
              throw r("err")("Org admin UI is disabled");
            var g = Date.now();
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin][group] create started",
                ])),
            );
            var h = babelHelpers.extends(
                {
                  title: e,
                  thumb: null,
                  full: null,
                  restrict: a.restrict,
                  announce: a.announce,
                  membershipApprovalMode: a.membershipApprovalMode,
                  memberAddMode: a.memberAddMode,
                  memberShareGroupHistoryMode: a.memberShareGroupHistoryMode,
                },
                a.memberLinkMode == null
                  ? {}
                  : { memberLinkMode: a.memberLinkMode },
              ),
              y,
              C;
            try {
              ((y = yield o("WAWebGroupCreateJob").createGroup(h, [], [])),
                (C = o("WAWebWidFactory").asGroupWidOrThrow(y.wid)));
            } catch (e) {
              throw (
                o("WAWebCoreActionsODS").logGroupCreateError(),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin][group] create succeeded after ",
                    "ms",
                  ])),
                Date.now() - g,
              ));
            try {
              yield o("WAWebFindChatAction").findOrCreateLatestChat(
                C,
                "createGroupAction",
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "createOrgAdminGroup local chat hydration dropped",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-admin-group-local-hydration-failed");
            }
            if (t != null && n != null)
              try {
                yield o("WAWebProfilePicThumbAction").setProfilePic({
                  full: n,
                  profilePicThumb: o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.gadd(C),
                  thumb: t,
                });
              } catch (e) {
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "createOrgAdminGroup group photo update dropped",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("org-admin-group-photo-update-failed");
              }
            var b = (l = (s = i) == null ? void 0 : s.trim()) != null ? l : "";
            if (b !== "")
              try {
                yield o("WAWebGroupModifyInfoJob").setGroupDescription({
                  desc: b,
                  groupWid: C,
                  newDescId: o("WARandomHex").randomHex(v),
                  prevDescId: null,
                });
              } catch (e) {
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "createOrgAdminGroup group description update dropped",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("org-admin-group-description-update-failed");
              }
            return (
              o("WAWebGroupQueryBridge")
                .sendQueryGroup(C)
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "createOrgAdminGroup metadata hydration dropped",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("org-admin-group-metadata-hydration-failed");
                }),
              {
                gid: C,
                participants: k(y.participants),
                invitedOutContacts: y.invitedOutContacts,
              }
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      var a = t.createGroupArgs,
        i = t.groupCreateEntryPoint,
        l = t.outContacts,
        u = t.participants,
        c = t.toastId,
        d = c === void 0 ? o("WAWebActionToast.react").genId() : c,
        m = a.full,
        p = a.parentGroupId,
        _ = a.thumb,
        f = a.title,
        h;
      try {
        h = u.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, !0, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          (g || (g = n("Promise"))).resolve(void 0)
        );
      }
      var C = l.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        b = o("WAWebGroupCreateJob")
          .createGroup(a, h, C)
          .then(function (e) {
            var t = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            return (
              o("WAWebCoreActionsODS").logGroupCreate(),
              i != null &&
                new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                  ephemeralityDuration: a.ephemeralDuration,
                  groupCreateEntryPoint: i,
                  hasGroupName: f.trim().length > 0,
                }).commit(),
              {
                gid: t,
                participants: k(e.participants),
                invitedOutContacts: e.invitedOutContacts,
              }
            );
          }),
        v = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Creating group"),
        ),
        S = b
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
                  return E({
                    createGroupArgs: a,
                    groupCreateEntryPoint: i,
                    outContacts: l,
                    participants: u,
                    toastId: d,
                  });
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          y.jsx(o("WAWebActionToast.react").ActionToast, {
            id: d,
            initialAction: v,
            pendingAction: S,
          }),
        ),
        b
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
                          return e.code !== "200";
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
                    u = r("countWhere")(n, function (e) {
                      return e.code !== "200";
                    }),
                    c = function () {
                      if (s.length > 0) {
                        o("WAWebModalManager").ModalManager.open(
                          y.jsx(
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
                                  o("WAWebWamEnumCompanionInviteOriginType")
                                    .COMPANION_INVITE_ORIGIN_TYPE
                                    .GROUPS_CREATE_PARTICIPANT_SELECTOR,
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
                      I(u);
                    };
                  if (
                    (a
                      ? o(
                          "WAWebSendForNeededAddRequest",
                        ).sendForNeededAddRequest(e, f, void 0, c)
                      : c(),
                    p == null &&
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
                            (f === "" ||
                              o(
                                "WAWebGroupGatingUtils",
                              ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                              o("WAWebGroupQueryBridge")
                                .sendQueryGroup(e.gid)
                                .finally(r("WAWebNoop")));
                        }),
                    _ != null && m != null)
                  ) {
                    var d = o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.gadd(e.gid);
                    yield o("WAWebProfilePicThumbAction")
                      .setProfilePic({ full: m, profilePicThumb: d, thumb: _ })
                      .then(function () {
                        return e.gid;
                      });
                  }
                  if (
                    o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
                  ) {
                    var g = e.participants.reduce(function (e, t) {
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
                    g.length > 0 &&
                      (yield o("WAWebSetUsernameJob").setUsernamesJob(g));
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
    function k(e) {
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
    function I(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          y.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    ((l.createGroup = b),
      (l.DEFAULT_ORG_ADMIN_GROUP_PERMISSIONS = S),
      (l.createOrgAdminGroup = R));
  },
  226,
);
