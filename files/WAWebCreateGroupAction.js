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
    "WAWebGroupGatingUtils",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupQueryBridge",
    "WAWebHandleMsgCommon",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNoop",
    "WAWebProfilePicThumbAction",
    "WAWebProfilePicThumbCollection",
    "WAWebSendForNeededAddRequest",
    "WAWebSetUsernameJob",
    "WAWebToastManager",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
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
    function m(e, t, n) {
      return p(e, t, void 0, n);
    }
    function p(t, a, i, l) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var c = t.full,
        m = t.parentGroupId,
        _ = t.thumb,
        f = t.title,
        g =
          o("WAWebUsernameGatingUtils").usernameGroupMutationEnabled() ||
          t.addressingModeOverride ===
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid,
        h;
      try {
        h = a.map(function (e) {
          return o(
            "WAWebGroupMutationParticipantUtils",
          ).getGroupMutationParticipant(e, g, "createGroup");
        });
      } catch (e) {
        return (
          o("WAWebCoreActionsODS").logGroupCreateError(),
          (u || (u = n("Promise"))).resolve(void 0)
        );
      }
      var y = o("WAWebGroupCreateJob")
          .createGroup(t, h)
          .then(function (e) {
            var t = o("WAWebWidFactory").asGroupWidOrThrow(e.wid);
            o("WAWebCoreActionsODS").logGroupCreate();
            var n = e.participants.map(function (e) {
              return {
                userWid: e.wid,
                username: e.username,
                code: e.error != null ? e.error.toString() : "200",
                invite_code: e.invite_code,
                invite_code_exp: e.invite_code_exp,
              };
            });
            return { gid: t, participants: n };
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
                  return p(t, a, i, l);
                },
              },
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: C,
            pendingAction: b,
          }),
        ),
        y
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.participants.some(function (e) {
                    return e.code === "403";
                  });
                  if (
                    (t &&
                      o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
                        e,
                        f,
                        void 0,
                        l,
                      ),
                    m == null &&
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
                            (f === "" ||
                              o(
                                "WAWebGroupGatingUtils",
                              ).isAnyoneCanLinkToGroupsM2Enabled()) &&
                              o("WAWebGroupQueryBridge")
                                .sendQueryGroup(e.gid)
                                .finally(r("WAWebNoop")));
                        }),
                    _ != null && c != null)
                  ) {
                    var n = o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.gadd(e.gid);
                    yield o("WAWebProfilePicThumbAction")
                      .setProfilePic(n, _, c)
                      .then(function () {
                        return e.gid;
                      });
                  }
                  if (
                    o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
                  ) {
                    var a = e.participants.reduce(function (e, t) {
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
                    a.length > 0 &&
                      (yield o("WAWebSetUsernameJob").setUsernamesJob(a));
                  }
                  return (t || l == null || l(), e.gid);
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
    l.createGroup = m;
  },
  226,
);
