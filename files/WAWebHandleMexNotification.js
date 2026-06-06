__d(
  "WAWebHandleMexNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebHandleBrigadingUpdateNotification",
    "WAWebMexCommunityOwnerUpdateNotificationHandler",
    "WAWebMexGroupPropertyUpdateNotificationHandler",
    "WAWebMexIntegrityChallengeNotificationHandler",
    "WAWebMexLidChangeNotificationHandler",
    "WAWebMexLimitSharingUpdateHandler",
    "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
    "WAWebMexNewsletterAdminNotificationHandler",
    "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
    "WAWebMexNewsletterJoinHandler",
    "WAWebMexNewsletterLeaveHandler",
    "WAWebMexNewsletterMetadataUpdateNotificationHandler",
    "WAWebMexNewsletterMilestoneNotificationHandler",
    "WAWebMexNewsletterOwnerNotificationHandler",
    "WAWebMexNewsletterPaidPartnershipNotificationHandler",
    "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
    "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
    "WAWebMexNewsletterRoleChangeNotificationHandler",
    "WAWebMexNewsletterStateChangeHandler",
    "WAWebMexNewsletterUserSettingChangeHandler",
    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
    "WAWebMexReachoutTimelockNotificationHandler",
    "WAWebMexRelayEnvironment",
    "WAWebMexTextStatusUpdateNotificationHandler",
    "WAWebMexUsernameAccountSyncNotificationHandler",
    "WAWebMexUsernameUpdateNotificationHandler",
    "WAWebNewChatMessageCappingNotificationHandler",
    "WAWebScheduledMsgPostNotificationHandler",
    "WAWebScheduledMsgRevealNotificationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates",
      ]),
      c = "mexNotificationParser",
      d = new (r("WADeprecatedWapParser"))(c, function (e) {
        (e.assertTag("notification"), e.assertAttr("type", "mex"));
        var t = e.child("update"),
          n = e.attrString("id"),
          r = e.attrWapJid("from"),
          a = e.maybeAttrString("offline"),
          i = t.attrString("op_name"),
          l = t.contentString(),
          s;
        try {
          s = JSON.parse(l);
        } catch (e) {
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            c,
            "JSON parsing error: " + String(e),
          );
        }
        return {
          stanzaId: n,
          from: r,
          offline: a,
          OperationName: i,
          mexResponse: s,
        };
      });
    async function m(t) {
      var n = d.parseOrThrow(t);
      try {
        var r = await p(n);
        return r;
      } catch (t) {
        if (t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
        if (t instanceof _)
          if (u.has(t.operationName))
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex] handleMexNotification: ",
                    " unsupported, nack",
                  ])),
                t.operationName,
              )
              .tags("mex", "notification");
          else
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex] handleMexNotification: ",
                      " unknown op, nack",
                    ])),
                  t.operationName,
                )
                .tags("mex", "notification")
                .sendLogs("mex-notification-error-" + t.operationName, {
                  sampling: 0.01,
                }),
              t
            );
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          c,
          "unexpected error: " + String(t),
        );
      }
    }
    function p(e) {
      return e.OperationName === "MexNotificationEvent"
        ? f(e, h)
        : e.OperationName === "NotificationNewsletterUserSettingChange"
          ? f(
              e,
              o("WAWebMexNewsletterUserSettingChangeHandler")
                .mexHandleNewsletterUserSettingChange,
            )
          : e.OperationName === "NotificationNewsletterJoin"
            ? f(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin)
            : e.OperationName === "NotificationNewsletterLeave"
              ? f(
                  e,
                  o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave,
                )
              : e.OperationName === "NotificationNewsletterStateChange"
                ? f(
                    e,
                    o("WAWebMexNewsletterStateChangeHandler")
                      .mexHandleNewsletterStateChange,
                  )
                : e.OperationName === "NotificationNewsletterAdminProfileUpdate"
                  ? f(
                      e,
                      o(
                        "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
                      ).mexHandleNewsletterAdminProfileUpdateNotification,
                    )
                  : e.OperationName ===
                      "NotificationNewsletterAdminMetadataUpdate"
                    ? f(
                        e,
                        o("WAWebMexNewsletterAdminNotificationHandler")
                          .mexHandleNewsletterAdminNotification,
                      )
                    : e.OperationName === "NotificationNewsletterOwnerUpdate"
                      ? f(
                          e,
                          o("WAWebMexNewsletterOwnerNotificationHandler")
                            .mexHandleNewsletterOwnerNotification,
                        )
                      : e.OperationName === "NotificationNewsletterUpdate"
                        ? f(
                            e,
                            o(
                              "WAWebMexNewsletterMetadataUpdateNotificationHandler",
                            ).mexHandleNewsletterMetadataUpdate,
                          )
                        : e.OperationName ===
                              "NotificationNewsletterAdminPromote" ||
                            e.OperationName ===
                              "NotificationNewsletterAdminDemote"
                          ? f(
                              e,
                              o(
                                "WAWebMexNewsletterRoleChangeNotificationHandler",
                              ).mexHandleNewsletterRoleChange,
                            )
                          : e.OperationName ===
                              "NotificationNewsletterAdminInviteRevoke"
                            ? f(
                                e,
                                o(
                                  "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
                                ).handleNewsletterAdminInviteRevoke,
                              )
                            : e.OperationName ===
                                "NotificationNewsletterWamoSubStatusChange"
                              ? f(
                                  e,
                                  o(
                                    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
                                  ).mexHandleNewsletterWamoSubStatusChange,
                                )
                              : e.OperationName ===
                                  "NewsletterResponseStateUpdate"
                                ? f(
                                    e,
                                    o(
                                      "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
                                    )
                                      .mexHandleNewsletterQuestionsResponseStateChange,
                                  )
                                : e.OperationName ===
                                    "NotificationNewsletterBlockUser"
                                  ? f(
                                      e,
                                      o(
                                        "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
                                      )
                                        .mexHandleNewsletterQuestionsResponseBlocked,
                                    )
                                  : e.OperationName ===
                                      "NotificationNewsletterPaidPartnershipUpdate"
                                    ? f(
                                        e,
                                        o(
                                          "WAWebMexNewsletterPaidPartnershipNotificationHandler",
                                        ).mexHandleNewsletterPaidPartnership,
                                      )
                                    : e.OperationName ===
                                        "NotificationNewsletterMilestone"
                                      ? f(
                                          e,
                                          o(
                                            "WAWebMexNewsletterMilestoneNotificationHandler",
                                          ).mexHandleNewsletterMilestone,
                                        )
                                      : e.OperationName ===
                                          "TextStatusUpdateNotification"
                                        ? f(
                                            e,
                                            o(
                                              "WAWebMexTextStatusUpdateNotificationHandler",
                                            ).mexHandleTextStatusUpdate,
                                          )
                                        : e.OperationName ===
                                            "TextStatusUpdateNotificationSideSub"
                                          ? f(
                                              e,
                                              o(
                                                "WAWebMexTextStatusUpdateNotificationHandler",
                                              )
                                                .mexHandleTextStatusUpdateSideSub,
                                            )
                                          : e.OperationName ===
                                                "NotificationGroupPropertyUpdate" ||
                                              e.OperationName ===
                                                "NotificationGroupHiddenPropertyUpdate" ||
                                              e.OperationName ===
                                                "NotificationGroupSafetyCheckPropertyUpdate" ||
                                              e.OperationName ===
                                                "NotificationGroupMemberLinkPropertyUpdate" ||
                                              e.OperationName ===
                                                "NotificationGroupMemberShareGroupHistoryModePropertyUpdate" ||
                                              e.OperationName ===
                                                "NotificationGroupAppealStatusUpdate"
                                            ? f(
                                                e,
                                                o(
                                                  "WAWebMexGroupPropertyUpdateNotificationHandler",
                                                ).mexHandleGroupPropertyUpdate,
                                              )
                                            : e.OperationName ===
                                                "NotificationCommunityOwnerUpdate"
                                              ? f(
                                                  e,
                                                  o(
                                                    "WAWebMexCommunityOwnerUpdateNotificationHandler",
                                                  )
                                                    .mexHandleCommunityOwnerUpdate,
                                                )
                                              : e.OperationName ===
                                                  "UsernameSetNotification"
                                                ? f(
                                                    e,
                                                    o(
                                                      "WAWebMexUsernameUpdateNotificationHandler",
                                                    ).mexHandleUsernameChange,
                                                  )
                                                : e.OperationName ===
                                                    "UsernameDeleteNotification"
                                                  ? f(
                                                      e,
                                                      o(
                                                        "WAWebMexUsernameUpdateNotificationHandler",
                                                      ).mexHandleUsernameDelete,
                                                    )
                                                  : e.OperationName ===
                                                      "UsernameUpdateNotification"
                                                    ? f(
                                                        e,
                                                        o(
                                                          "WAWebMexUsernameUpdateNotificationHandler",
                                                        )
                                                          .mexHandleUsernameChangeForSideSub,
                                                      )
                                                    : e.OperationName ===
                                                        "AccountSyncUsernameNotification"
                                                      ? f(
                                                          e,
                                                          o(
                                                            "WAWebMexUsernameAccountSyncNotificationHandler",
                                                          )
                                                            .mexHandleUsernameAccountSync,
                                                        )
                                                      : e.OperationName ===
                                                          "LidChangeNotification"
                                                        ? f(
                                                            e,
                                                            o(
                                                              "WAWebMexLidChangeNotificationHandler",
                                                            )
                                                              .mexHandleLidChangeNotification,
                                                          )
                                                        : e.OperationName ===
                                                            "NotificationUserBrigadingUpdate"
                                                          ? f(
                                                              e,
                                                              o(
                                                                "WAWebHandleBrigadingUpdateNotification",
                                                              )
                                                                .mexHandleBrigadingNotification,
                                                            )
                                                          : e.OperationName ===
                                                              "NotificationGroupLimitSharingPropertyUpdate"
                                                            ? f(
                                                                e,
                                                                o(
                                                                  "WAWebMexLimitSharingUpdateHandler",
                                                                )
                                                                  .mexHandleLimitSharingUpdate,
                                                              )
                                                            : e.OperationName ===
                                                                "NotificationUserReachoutTimelockUpdate"
                                                              ? f(
                                                                  e,
                                                                  o(
                                                                    "WAWebMexReachoutTimelockNotificationHandler",
                                                                  )
                                                                    .mexHandleReachoutTimelockNotification,
                                                                )
                                                              : e.OperationName ===
                                                                  "NotificationIntegrityChallengeRequest"
                                                                ? f(
                                                                    e,
                                                                    o(
                                                                      "WAWebMexIntegrityChallengeNotificationHandler",
                                                                    )
                                                                      .mexHandleIntegrityChallengeNotification,
                                                                  )
                                                                : e.OperationName ===
                                                                    "MessageCappingInfoNotification"
                                                                  ? f(
                                                                      e,
                                                                      o(
                                                                        "WAWebNewChatMessageCappingNotificationHandler",
                                                                      )
                                                                        .mexHandleNewChatMessageCappingNotification,
                                                                    )
                                                                  : e.OperationName ===
                                                                      "NotificationScheduledMessagePost"
                                                                    ? f(
                                                                        e,
                                                                        o(
                                                                          "WAWebScheduledMsgPostNotificationHandler",
                                                                        )
                                                                          .mexHandleScheduledMsgPost,
                                                                      )
                                                                    : e.OperationName ===
                                                                        "NotificationScheduledMessageReveal"
                                                                      ? f(
                                                                          e,
                                                                          o(
                                                                            "WAWebScheduledMsgRevealNotificationHandler",
                                                                          )
                                                                            .mexHandleScheduledMsgReveal,
                                                                        )
                                                                      : Promise.reject(
                                                                          new _(
                                                                            e.OperationName,
                                                                          ),
                                                                        );
    }
    var _ = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, t.name + ": " + n) || this),
          (r.name = "MissingMEXNotificationHandler"),
          (r.operationName = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toString = function () {
          return t.name + ": " + this.operationName;
        }),
        t
      );
    })(babelHelpers.wrapNativeSuper(Error));
    async function f(e, t) {
      var n = e.mexResponse,
        r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(n.errors);
      if (r != null)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          c,
          "errors list in parsed json has fatal error",
        );
      if (n.data != null) return (await t(e, n.data), g(e.stanzaId, e.from));
      throw new (o("WAParsableWapNode").XmppParsingFailure)(
        c,
        "null data in parsed json",
      );
    }
    function g(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    async function h(e, t) {}
    ((l.handleMexNotification = m), (l.MissingMEXNotificationHandler = _));
  },
  98,
);
