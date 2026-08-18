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
      p = m || (m = o("react")),
      _ = [];
    function f(e, t, n, r) {
      return (
        n === void 0 && (n = _),
        y({
          createGroupArgs: e,
          groupCreateEntryPoint: r,
          outContacts: n,
          participants: t,
        })
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebABProps").getABPropConfigValue("web_org_admin_ui_enabled")
          )
            throw r("err")("Org admin UI is disabled");
          var t = {
              title: e,
              thumb: null,
              full: null,
              restrict: !1,
              announce: !1,
              membershipApprovalMode: !1,
              memberAddMode: !1,
              memberShareGroupHistoryMode: !1,
            },
            n,
            a;
          try {
            ((n = yield o("WAWebGroupCreateJob").createGroup(t, [], [])),
              (a = o("WAWebWidFactory").asGroupWidOrThrow(n.wid)));
          } catch (e) {
            throw (o("WAWebCoreActionsODS").logGroupCreateError(), e);
          }
          o("WAWebCoreActionsODS").logGroupCreate();
          try {
            yield o("WAWebFindChatAction").findOrCreateLatestChat(
              a,
              "createGroupAction",
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrgAdminGroup local chat hydration dropped",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("org-admin-group-local-hydration-failed");
          }
          return (
            o("WAWebGroupQueryBridge")
              .sendQueryGroup(a)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "createOrgAdminGroup metadata hydration dropped",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("org-admin-group-metadata-hydration-failed");
              }),
            {
              gid: a,
              participants: C(n.participants),
              invitedOutContacts: n.invitedOutContacts,
            }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(t) {
      var a = t.createGroupArgs,
        i = t.groupCreateEntryPoint,
        l = t.outContacts,
        u = t.participants,
        c = t.toastId,
        m = c === void 0 ? o("WAWebActionToast.react").genId() : c,
        _ = a.full,
        f = a.parentGroupId,
        g = a.thumb,
        h = a.title,
        v;
      try {
        v = u.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, !0, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          (d || (d = n("Promise"))).resolve(void 0)
        );
      }
      var S = l.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        R = o("WAWebGroupCreateJob")
          .createGroup(a, v, S)
          .then(function (e) {
            var t = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            return (
              o("WAWebCoreActionsODS").logGroupCreate(),
              i != null &&
                new (o("WAWebGroupCreateWamEvent").GroupCreateWamEvent)({
                  ephemeralityDuration: a.ephemeralDuration,
                  groupCreateEntryPoint: i,
                  hasGroupName: h.trim().length > 0,
                }).commit(),
              {
                gid: t,
                participants: C(e.participants),
                invitedOutContacts: e.invitedOutContacts,
              }
            );
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
                  return y({
                    createGroupArgs: a,
                    groupCreateEntryPoint: i,
                    outContacts: l,
                    participants: u,
                    toastId: m,
                  });
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebActionToast.react").ActionToast, {
            id: m,
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
                        p.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
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
                          onCancel: o("WAWebModalManager").closeModalManager,
                        }),
                      );
                      return;
                    }
                    b(u);
                  };
                if (
                  (a
                    ? o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
                        e,
                        h,
                        void 0,
                        c,
                      )
                    : c(),
                  f == null &&
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
                          (h === "" ||
                            o(
                              "WAWebGroupGatingUtils",
                            ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                            o("WAWebGroupQueryBridge")
                              .sendQueryGroup(e.gid)
                              .finally(r("WAWebNoop")));
                      }),
                  g != null && _ != null)
                ) {
                  var d = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.gadd(e.gid);
                  yield o("WAWebProfilePicThumbAction")
                    .setProfilePic(d, g, _)
                    .then(function () {
                      return e.gid;
                    });
                }
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                  var m = e.participants.reduce(function (e, t) {
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
                  m.length > 0 &&
                    (yield o("WAWebSetUsernameJob").setUsernamesJob(m));
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
    function C(e) {
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
    function b(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    ((l.createGroup = f), (l.createOrgAdminGroup = g));
  },
  226,
);
