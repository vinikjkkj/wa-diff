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
      m = new Set([
        "UsernameSetNotification",
        "UsernameDeleteNotification",
        "UsernameUpdateNotification",
        "AccountSyncUsernameNotification",
      ]),
      p = "mexNotificationParser",
      _ = new (r("WADeprecatedWapParser"))(p, function (e) {
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
            p,
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = _.parseOrThrow(t);
          try {
            var a = yield h(n);
            return a;
          } catch (t) {
            var i = n.OperationName;
            if (
              (m.has(i) &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] notification handling failed op=",
                        "",
                      ])),
                    i,
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("mex", "notification", "username")
                  .sendLogs("mex-username-notification-failed-" + i),
              t instanceof o("WAParsableWapNode").XmppParsingFailure)
            )
              throw t;
            if (t instanceof y)
              if (d.has(t.operationName))
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
              p,
              "unexpected error: " + String(t),
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e.OperationName === "MexNotificationEvent"
        ? C(e, S)
        : e.OperationName === "NotificationNewsletterUserSettingChange"
          ? C(
              e,
              o("WAWebMexNewsletterUserSettingChangeHandler")
                .mexHandleNewsletterUserSettingChange,
            )
          : e.OperationName === "NotificationNewsletterJoin"
            ? C(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin)
            : e.OperationName === "NotificationNewsletterLeave"
              ? C(
                  e,
                  o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave,
                )
              : e.OperationName === "NotificationNewsletterStateChange"
                ? C(
                    e,
                    o("WAWebMexNewsletterStateChangeHandler")
                      .mexHandleNewsletterStateChange,
                  )
                : e.OperationName === "NotificationNewsletterAdminProfileUpdate"
                  ? C(
                      e,
                      o(
                        "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
                      ).mexHandleNewsletterAdminProfileUpdateNotification,
                    )
                  : e.OperationName ===
                      "NotificationNewsletterAdminMetadataUpdate"
                    ? C(
                        e,
                        o("WAWebMexNewsletterAdminNotificationHandler")
                          .mexHandleNewsletterAdminNotification,
                      )
                    : e.OperationName === "NotificationNewsletterOwnerUpdate"
                      ? C(
                          e,
                          o("WAWebMexNewsletterOwnerNotificationHandler")
                            .mexHandleNewsletterOwnerNotification,
                        )
                      : e.OperationName === "NotificationNewsletterUpdate"
                        ? C(
                            e,
                            o(
                              "WAWebMexNewsletterMetadataUpdateNotificationHandler",
                            ).mexHandleNewsletterMetadataUpdate,
                          )
                        : e.OperationName ===
                              "NotificationNewsletterAdminPromote" ||
                            e.OperationName ===
                              "NotificationNewsletterAdminDemote"
                          ? C(
                              e,
                              o(
                                "WAWebMexNewsletterRoleChangeNotificationHandler",
                              ).mexHandleNewsletterRoleChange,
                            )
                          : e.OperationName ===
                              "NotificationNewsletterAdminInviteRevoke"
                            ? C(
                                e,
                                o(
                                  "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
                                ).handleNewsletterAdminInviteRevoke,
                              )
                            : e.OperationName ===
                                "NotificationNewsletterWamoSubStatusChange"
                              ? C(
                                  e,
                                  o(
                                    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
                                  ).mexHandleNewsletterWamoSubStatusChange,
                                )
                              : e.OperationName ===
                                  "NewsletterResponseStateUpdate"
                                ? C(
                                    e,
                                    o(
                                      "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
                                    )
                                      .mexHandleNewsletterQuestionsResponseStateChange,
                                  )
                                : e.OperationName ===
                                    "NotificationNewsletterBlockUser"
                                  ? C(
                                      e,
                                      o(
                                        "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
                                      )
                                        .mexHandleNewsletterQuestionsResponseBlocked,
                                    )
                                  : e.OperationName ===
                                      "NotificationNewsletterPaidPartnershipUpdate"
                                    ? C(
                                        e,
                                        o(
                                          "WAWebMexNewsletterPaidPartnershipNotificationHandler",
                                        ).mexHandleNewsletterPaidPartnership,
                                      )
                                    : e.OperationName ===
                                        "NotificationNewsletterMilestone"
                                      ? C(
                                          e,
                                          o(
                                            "WAWebMexNewsletterMilestoneNotificationHandler",
                                          ).mexHandleNewsletterMilestone,
                                        )
                                      : e.OperationName ===
                                          "TextStatusUpdateNotification"
                                        ? C(
                                            e,
                                            o(
                                              "WAWebMexTextStatusUpdateNotificationHandler",
                                            ).mexHandleTextStatusUpdate,
                                          )
                                        : e.OperationName ===
                                            "TextStatusUpdateNotificationSideSub"
                                          ? C(
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
                                            ? C(
                                                e,
                                                o(
                                                  "WAWebMexGroupPropertyUpdateNotificationHandler",
                                                ).mexHandleGroupPropertyUpdate,
                                              )
                                            : e.OperationName ===
                                                "NotificationCommunityOwnerUpdate"
                                              ? C(
                                                  e,
                                                  o(
                                                    "WAWebMexCommunityOwnerUpdateNotificationHandler",
                                                  )
                                                    .mexHandleCommunityOwnerUpdate,
                                                )
                                              : e.OperationName ===
                                                  "UsernameSetNotification"
                                                ? C(
                                                    e,
                                                    o(
                                                      "WAWebMexUsernameUpdateNotificationHandler",
                                                    ).mexHandleUsernameChange,
                                                  )
                                                : e.OperationName ===
                                                    "UsernameDeleteNotification"
                                                  ? C(
                                                      e,
                                                      o(
                                                        "WAWebMexUsernameUpdateNotificationHandler",
                                                      ).mexHandleUsernameDelete,
                                                    )
                                                  : e.OperationName ===
                                                      "UsernameUpdateNotification"
                                                    ? C(
                                                        e,
                                                        o(
                                                          "WAWebMexUsernameUpdateNotificationHandler",
                                                        )
                                                          .mexHandleUsernameChangeForSideSub,
                                                      )
                                                    : e.OperationName ===
                                                        "AccountSyncUsernameNotification"
                                                      ? C(
                                                          e,
                                                          o(
                                                            "WAWebMexUsernameAccountSyncNotificationHandler",
                                                          )
                                                            .mexHandleUsernameAccountSync,
                                                        )
                                                      : e.OperationName ===
                                                          "LidChangeNotification"
                                                        ? C(
                                                            e,
                                                            o(
                                                              "WAWebMexLidChangeNotificationHandler",
                                                            )
                                                              .mexHandleLidChangeNotification,
                                                          )
                                                        : e.OperationName ===
                                                            "NotificationUserBrigadingUpdate"
                                                          ? C(
                                                              e,
                                                              o(
                                                                "WAWebHandleBrigadingUpdateNotification",
                                                              )
                                                                .mexHandleBrigadingNotification,
                                                            )
                                                          : e.OperationName ===
                                                              "NotificationGroupLimitSharingPropertyUpdate"
                                                            ? C(
                                                                e,
                                                                o(
                                                                  "WAWebMexLimitSharingUpdateHandler",
                                                                )
                                                                  .mexHandleLimitSharingUpdate,
                                                              )
                                                            : e.OperationName ===
                                                                "NotificationUserReachoutTimelockUpdate"
                                                              ? C(
                                                                  e,
                                                                  o(
                                                                    "WAWebMexReachoutTimelockNotificationHandler",
                                                                  )
                                                                    .mexHandleReachoutTimelockNotification,
                                                                )
                                                              : e.OperationName ===
                                                                  "NotificationIntegrityChallengeRequest"
                                                                ? C(
                                                                    e,
                                                                    o(
                                                                      "WAWebMexIntegrityChallengeNotificationHandler",
                                                                    )
                                                                      .mexHandleIntegrityChallengeNotification,
                                                                  )
                                                                : e.OperationName ===
                                                                    "MessageCappingInfoNotification"
                                                                  ? C(
                                                                      e,
                                                                      o(
                                                                        "WAWebNewChatMessageCappingNotificationHandler",
                                                                      )
                                                                        .mexHandleNewChatMessageCappingNotification,
                                                                    )
                                                                  : e.OperationName ===
                                                                      "NotificationScheduledMessagePost"
                                                                    ? C(
                                                                        e,
                                                                        o(
                                                                          "WAWebScheduledMsgPostNotificationHandler",
                                                                        )
                                                                          .mexHandleScheduledMsgPost,
                                                                      )
                                                                    : e.OperationName ===
                                                                        "NotificationScheduledMessageReveal"
                                                                      ? C(
                                                                          e,
                                                                          o(
                                                                            "WAWebScheduledMsgRevealNotificationHandler",
                                                                          )
                                                                            .mexHandleScheduledMsgReveal,
                                                                        )
                                                                      : e.OperationName ===
                                                                          "NotificationEventInvite"
                                                                        ? C(
                                                                            e,
                                                                            o(
                                                                              "WAWebSharableEventNotificationHandler",
                                                                            )
                                                                              .mexHandleSharableEventInviteNotification,
                                                                          )
                                                                        : e.OperationName ===
                                                                            "NotificationEventUpdate"
                                                                          ? C(
                                                                              e,
                                                                              o(
                                                                                "WAWebSharableEventNotificationHandler",
                                                                              )
                                                                                .mexHandleSharableEventUpdateNotification,
                                                                            )
                                                                          : e.OperationName ===
                                                                              "NotificationEventRsvp"
                                                                            ? C(
                                                                                e,
                                                                                o(
                                                                                  "WAWebSharableEventNotificationHandler",
                                                                                )
                                                                                  .mexHandleSharableEventRsvpNotification,
                                                                              )
                                                                            : e.OperationName ===
                                                                                "NotificationEventDelete"
                                                                              ? C(
                                                                                  e,
                                                                                  o(
                                                                                    "WAWebSharableEventNotificationHandler",
                                                                                  )
                                                                                    .mexHandleSharableEventDeleteNotification,
                                                                                )
                                                                              : e.OperationName ===
                                                                                  "NotificationEventReminder"
                                                                                ? C(
                                                                                    e,
                                                                                    o(
                                                                                      "WAWebSharableEventNotificationHandler",
                                                                                    )
                                                                                      .mexHandleSharableEventReminderNotification,
                                                                                  )
                                                                                : e.OperationName ===
                                                                                    "NotificationEventInviteRemove"
                                                                                  ? C(
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
                                                                                      new y(
                                                                                        e.OperationName,
                                                                                      ),
                                                                                    );
    }
    var y = (function (e) {
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.mexResponse,
            r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(
              n.errors,
            );
          if (r != null)
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              p,
              "errors list in parsed json has fatal error",
            );
          if (n.data != null)
            return (yield t(e, n.data), v(e.stanzaId, e.from));
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            p,
            "null data in parsed json",
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t) {},
        )),
        R.apply(this, arguments)
      );
    }
    ((l.handleMexNotification = f), (l.MissingMEXNotificationHandler = y));
  },
  98,
);
