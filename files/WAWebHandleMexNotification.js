__d(
  "WAWebHandleMexNotification",
  [
    "Promise",
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
    "WAWebMexNewsletterAIContentNotificationHandler",
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
    "WAWebSharableEventNotificationHandler",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates",
      ]),
      m = "mexNotificationParser",
      p = new (r("WADeprecatedWapParser"))(m, function (e) {
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
            m,
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = p.parseOrThrow(t);
          try {
            var a = yield g(n);
            return a;
          } catch (t) {
            if (t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
            if (t instanceof h)
              if (d.has(t.operationName))
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
            else
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex] handleMexNotification: ",
                      " handling failed, nack",
                    ])),
                  n.OperationName,
                )
                .catching(r("getErrorSafe")(t))
                .tags("mex", "notification")
                .sendLogs(
                  "mex-notification-handling-failed-" + n.OperationName,
                  { sampling: 0.1 },
                );
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              m,
              "unexpected error: " + String(t),
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e.OperationName === "MexNotificationEvent"
        ? y(e, v)
        : e.OperationName === "NotificationNewsletterUserSettingChange"
          ? y(
              e,
              o("WAWebMexNewsletterUserSettingChangeHandler")
                .mexHandleNewsletterUserSettingChange,
            )
          : e.OperationName === "NotificationNewsletterJoin"
            ? y(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin)
            : e.OperationName === "NotificationNewsletterLeave"
              ? y(
                  e,
                  o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave,
                )
              : e.OperationName === "NotificationNewsletterStateChange"
                ? y(
                    e,
                    o("WAWebMexNewsletterStateChangeHandler")
                      .mexHandleNewsletterStateChange,
                  )
                : e.OperationName === "NotificationNewsletterAdminProfileUpdate"
                  ? y(
                      e,
                      o(
                        "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
                      ).mexHandleNewsletterAdminProfileUpdateNotification,
                    )
                  : e.OperationName ===
                      "NotificationNewsletterAdminMetadataUpdate"
                    ? y(
                        e,
                        o("WAWebMexNewsletterAdminNotificationHandler")
                          .mexHandleNewsletterAdminNotification,
                      )
                    : e.OperationName === "NotificationNewsletterOwnerUpdate"
                      ? y(
                          e,
                          o("WAWebMexNewsletterOwnerNotificationHandler")
                            .mexHandleNewsletterOwnerNotification,
                        )
                      : e.OperationName === "NotificationNewsletterUpdate"
                        ? y(
                            e,
                            o(
                              "WAWebMexNewsletterMetadataUpdateNotificationHandler",
                            ).mexHandleNewsletterMetadataUpdate,
                          )
                        : e.OperationName ===
                              "NotificationNewsletterAdminPromote" ||
                            e.OperationName ===
                              "NotificationNewsletterAdminDemote"
                          ? y(
                              e,
                              o(
                                "WAWebMexNewsletterRoleChangeNotificationHandler",
                              ).mexHandleNewsletterRoleChange,
                            )
                          : e.OperationName ===
                              "NotificationNewsletterAdminInviteRevoke"
                            ? y(
                                e,
                                o(
                                  "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
                                ).handleNewsletterAdminInviteRevoke,
                              )
                            : e.OperationName ===
                                "NotificationNewsletterWamoSubStatusChange"
                              ? y(
                                  e,
                                  o(
                                    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
                                  ).mexHandleNewsletterWamoSubStatusChange,
                                )
                              : e.OperationName ===
                                  "NewsletterResponseStateUpdate"
                                ? y(
                                    e,
                                    o(
                                      "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
                                    )
                                      .mexHandleNewsletterQuestionsResponseStateChange,
                                  )
                                : e.OperationName ===
                                    "NotificationNewsletterBlockUser"
                                  ? y(
                                      e,
                                      o(
                                        "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
                                      )
                                        .mexHandleNewsletterQuestionsResponseBlocked,
                                    )
                                  : e.OperationName ===
                                      "NotificationNewsletterPaidPartnershipUpdate"
                                    ? y(
                                        e,
                                        o(
                                          "WAWebMexNewsletterPaidPartnershipNotificationHandler",
                                        ).mexHandleNewsletterPaidPartnership,
                                      )
                                    : e.OperationName ===
                                        "NotificationNewsletterAIContentUpdate"
                                      ? y(
                                          e,
                                          o(
                                            "WAWebMexNewsletterAIContentNotificationHandler",
                                          ).mexHandleNewsletterAIContent,
                                        )
                                      : e.OperationName ===
                                          "NotificationNewsletterMilestone"
                                        ? y(
                                            e,
                                            o(
                                              "WAWebMexNewsletterMilestoneNotificationHandler",
                                            ).mexHandleNewsletterMilestone,
                                          )
                                        : e.OperationName ===
                                            "TextStatusUpdateNotification"
                                          ? y(
                                              e,
                                              o(
                                                "WAWebMexTextStatusUpdateNotificationHandler",
                                              ).mexHandleTextStatusUpdate,
                                            )
                                          : e.OperationName ===
                                              "TextStatusUpdateNotificationSideSub"
                                            ? y(
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
                                              ? y(
                                                  e,
                                                  o(
                                                    "WAWebMexGroupPropertyUpdateNotificationHandler",
                                                  )
                                                    .mexHandleGroupPropertyUpdate,
                                                )
                                              : e.OperationName ===
                                                  "NotificationCommunityOwnerUpdate"
                                                ? y(
                                                    e,
                                                    o(
                                                      "WAWebMexCommunityOwnerUpdateNotificationHandler",
                                                    )
                                                      .mexHandleCommunityOwnerUpdate,
                                                  )
                                                : e.OperationName ===
                                                    "UsernameSetNotification"
                                                  ? y(
                                                      e,
                                                      o(
                                                        "WAWebMexUsernameUpdateNotificationHandler",
                                                      ).mexHandleUsernameChange,
                                                    )
                                                  : e.OperationName ===
                                                      "UsernameDeleteNotification"
                                                    ? y(
                                                        e,
                                                        o(
                                                          "WAWebMexUsernameUpdateNotificationHandler",
                                                        )
                                                          .mexHandleUsernameDelete,
                                                      )
                                                    : e.OperationName ===
                                                        "UsernameUpdateNotification"
                                                      ? y(
                                                          e,
                                                          o(
                                                            "WAWebMexUsernameUpdateNotificationHandler",
                                                          )
                                                            .mexHandleUsernameChangeForSideSub,
                                                        )
                                                      : e.OperationName ===
                                                          "AccountSyncUsernameNotification"
                                                        ? y(
                                                            e,
                                                            o(
                                                              "WAWebMexUsernameAccountSyncNotificationHandler",
                                                            )
                                                              .mexHandleUsernameAccountSync,
                                                          )
                                                        : e.OperationName ===
                                                            "LidChangeNotification"
                                                          ? y(
                                                              e,
                                                              o(
                                                                "WAWebMexLidChangeNotificationHandler",
                                                              )
                                                                .mexHandleLidChangeNotification,
                                                            )
                                                          : e.OperationName ===
                                                              "NotificationUserBrigadingUpdate"
                                                            ? y(
                                                                e,
                                                                o(
                                                                  "WAWebHandleBrigadingUpdateNotification",
                                                                )
                                                                  .mexHandleBrigadingNotification,
                                                              )
                                                            : e.OperationName ===
                                                                "NotificationGroupLimitSharingPropertyUpdate"
                                                              ? y(
                                                                  e,
                                                                  o(
                                                                    "WAWebMexLimitSharingUpdateHandler",
                                                                  )
                                                                    .mexHandleLimitSharingUpdate,
                                                                )
                                                              : e.OperationName ===
                                                                  "NotificationUserReachoutTimelockUpdate"
                                                                ? y(
                                                                    e,
                                                                    o(
                                                                      "WAWebMexReachoutTimelockNotificationHandler",
                                                                    )
                                                                      .mexHandleReachoutTimelockNotification,
                                                                  )
                                                                : e.OperationName ===
                                                                    "NotificationIntegrityChallengeRequest"
                                                                  ? y(
                                                                      e,
                                                                      o(
                                                                        "WAWebMexIntegrityChallengeNotificationHandler",
                                                                      )
                                                                        .mexHandleIntegrityChallengeNotification,
                                                                    )
                                                                  : e.OperationName ===
                                                                      "MessageCappingInfoNotification"
                                                                    ? y(
                                                                        e,
                                                                        o(
                                                                          "WAWebNewChatMessageCappingNotificationHandler",
                                                                        )
                                                                          .mexHandleNewChatMessageCappingNotification,
                                                                      )
                                                                    : e.OperationName ===
                                                                        "NotificationScheduledMessagePost"
                                                                      ? y(
                                                                          e,
                                                                          o(
                                                                            "WAWebScheduledMsgPostNotificationHandler",
                                                                          )
                                                                            .mexHandleScheduledMsgPost,
                                                                        )
                                                                      : e.OperationName ===
                                                                          "NotificationScheduledMessageReveal"
                                                                        ? y(
                                                                            e,
                                                                            o(
                                                                              "WAWebScheduledMsgRevealNotificationHandler",
                                                                            )
                                                                              .mexHandleScheduledMsgReveal,
                                                                          )
                                                                        : e.OperationName ===
                                                                            "NotificationEventInvite"
                                                                          ? y(
                                                                              e,
                                                                              o(
                                                                                "WAWebSharableEventNotificationHandler",
                                                                              )
                                                                                .mexHandleSharableEventInviteNotification,
                                                                            )
                                                                          : e.OperationName ===
                                                                              "NotificationEventUpdate"
                                                                            ? y(
                                                                                e,
                                                                                o(
                                                                                  "WAWebSharableEventNotificationHandler",
                                                                                )
                                                                                  .mexHandleSharableEventUpdateNotification,
                                                                              )
                                                                            : e.OperationName ===
                                                                                "NotificationEventRsvp"
                                                                              ? y(
                                                                                  e,
                                                                                  o(
                                                                                    "WAWebSharableEventNotificationHandler",
                                                                                  )
                                                                                    .mexHandleSharableEventRsvpNotification,
                                                                                )
                                                                              : e.OperationName ===
                                                                                  "NotificationEventDelete"
                                                                                ? y(
                                                                                    e,
                                                                                    o(
                                                                                      "WAWebSharableEventNotificationHandler",
                                                                                    )
                                                                                      .mexHandleSharableEventDeleteNotification,
                                                                                  )
                                                                                : e.OperationName ===
                                                                                    "NotificationEventReminder"
                                                                                  ? y(
                                                                                      e,
                                                                                      o(
                                                                                        "WAWebSharableEventNotificationHandler",
                                                                                      )
                                                                                        .mexHandleSharableEventReminderNotification,
                                                                                    )
                                                                                  : e.OperationName ===
                                                                                      "NotificationEventInviteRemove"
                                                                                    ? y(
                                                                                        e,
                                                                                        o(
                                                                                          "WAWebSharableEventNotificationHandler",
                                                                                        )
                                                                                          .mexHandleSharableEventInviteRemoveNotification,
                                                                                      )
                                                                                    : (
                                                                                        c ||
                                                                                        (c =
                                                                                          n(
                                                                                            "Promise",
                                                                                          ))
                                                                                      ).reject(
                                                                                        new h(
                                                                                          e.OperationName,
                                                                                        ),
                                                                                      );
    }
    var h = (function (e) {
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
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.mexResponse,
            r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(
              n.errors,
            );
          if (r != null)
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              m,
              "errors list in parsed json has fatal error",
            );
          if (n.data != null)
            return (yield t(e, n.data), b(e.stanzaId, e.from));
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            m,
            "null data in parsed json",
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t) {},
        )),
        S.apply(this, arguments)
      );
    }
    ((l.handleMexNotification = _), (l.MissingMEXNotificationHandler = h));
  },
  98,
);
