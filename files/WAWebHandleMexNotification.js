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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates",
      ]),
      d = "mexNotificationParser",
      m = new (r("WADeprecatedWapParser"))(d, function (e) {
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
            d,
            "JSON parsing error: " + e,
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = m.parseOrThrow(t);
          try {
            var r = yield f(n);
            return r;
          } catch (t) {
            if (t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
            if (t instanceof g)
              if (c.has(t.operationName))
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
              d,
              "unexpected error: " + String(t),
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e.OperationName === "MexNotificationEvent"
        ? h(e, b)
        : e.OperationName === "NotificationNewsletterUserSettingChange"
          ? h(
              e,
              o("WAWebMexNewsletterUserSettingChangeHandler")
                .mexHandleNewsletterUserSettingChange,
            )
          : e.OperationName === "NotificationNewsletterJoin"
            ? h(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin)
            : e.OperationName === "NotificationNewsletterLeave"
              ? h(
                  e,
                  o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave,
                )
              : e.OperationName === "NotificationNewsletterStateChange"
                ? h(
                    e,
                    o("WAWebMexNewsletterStateChangeHandler")
                      .mexHandleNewsletterStateChange,
                  )
                : e.OperationName ===
                    "NotificationNewsletterAdminMetadataUpdate"
                  ? h(
                      e,
                      o("WAWebMexNewsletterAdminNotificationHandler")
                        .mexHandleNewsletterAdminNotification,
                    )
                  : e.OperationName === "NotificationNewsletterOwnerUpdate"
                    ? h(
                        e,
                        o("WAWebMexNewsletterOwnerNotificationHandler")
                          .mexHandleNewsletterOwnerNotification,
                      )
                    : e.OperationName === "NotificationNewsletterUpdate"
                      ? h(
                          e,
                          o(
                            "WAWebMexNewsletterMetadataUpdateNotificationHandler",
                          ).mexHandleNewsletterMetadataUpdate,
                        )
                      : e.OperationName ===
                            "NotificationNewsletterAdminPromote" ||
                          e.OperationName ===
                            "NotificationNewsletterAdminDemote"
                        ? h(
                            e,
                            o("WAWebMexNewsletterRoleChangeNotificationHandler")
                              .mexHandleNewsletterRoleChange,
                          )
                        : e.OperationName ===
                            "NotificationNewsletterAdminInviteRevoke"
                          ? h(
                              e,
                              o(
                                "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
                              ).handleNewsletterAdminInviteRevoke,
                            )
                          : e.OperationName ===
                              "NotificationNewsletterWamoSubStatusChange"
                            ? h(
                                e,
                                o(
                                  "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
                                ).mexHandleNewsletterWamoSubStatusChange,
                              )
                            : e.OperationName ===
                                "NewsletterResponseStateUpdate"
                              ? h(
                                  e,
                                  o(
                                    "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
                                  )
                                    .mexHandleNewsletterQuestionsResponseStateChange,
                                )
                              : e.OperationName ===
                                  "NotificationNewsletterBlockUser"
                                ? h(
                                    e,
                                    o(
                                      "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
                                    )
                                      .mexHandleNewsletterQuestionsResponseBlocked,
                                  )
                                : e.OperationName ===
                                    "NotificationNewsletterPaidPartnershipUpdate"
                                  ? h(
                                      e,
                                      o(
                                        "WAWebMexNewsletterPaidPartnershipNotificationHandler",
                                      ).mexHandleNewsletterPaidPartnership,
                                    )
                                  : e.OperationName ===
                                      "NotificationNewsletterMilestone"
                                    ? h(
                                        e,
                                        o(
                                          "WAWebMexNewsletterMilestoneNotificationHandler",
                                        ).mexHandleNewsletterMilestone,
                                      )
                                    : e.OperationName ===
                                        "TextStatusUpdateNotification"
                                      ? h(
                                          e,
                                          o(
                                            "WAWebMexTextStatusUpdateNotificationHandler",
                                          ).mexHandleTextStatusUpdate,
                                        )
                                      : e.OperationName ===
                                          "TextStatusUpdateNotificationSideSub"
                                        ? h(
                                            e,
                                            o(
                                              "WAWebMexTextStatusUpdateNotificationHandler",
                                            ).mexHandleTextStatusUpdateSideSub,
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
                                              "NotificationGroupMemberShareGroupHistoryModePropertyUpdate"
                                          ? h(
                                              e,
                                              o(
                                                "WAWebMexGroupPropertyUpdateNotificationHandler",
                                              ).mexHandleGroupPropertyUpdate,
                                            )
                                          : e.OperationName ===
                                              "NotificationCommunityOwnerUpdate"
                                            ? h(
                                                e,
                                                o(
                                                  "WAWebMexCommunityOwnerUpdateNotificationHandler",
                                                ).mexHandleCommunityOwnerUpdate,
                                              )
                                            : e.OperationName ===
                                                "UsernameSetNotification"
                                              ? h(
                                                  e,
                                                  o(
                                                    "WAWebMexUsernameUpdateNotificationHandler",
                                                  ).mexHandleUsernameChange,
                                                )
                                              : e.OperationName ===
                                                  "UsernameDeleteNotification"
                                                ? h(
                                                    e,
                                                    o(
                                                      "WAWebMexUsernameUpdateNotificationHandler",
                                                    ).mexHandleUsernameDelete,
                                                  )
                                                : e.OperationName ===
                                                    "UsernameUpdateNotification"
                                                  ? h(
                                                      e,
                                                      o(
                                                        "WAWebMexUsernameUpdateNotificationHandler",
                                                      )
                                                        .mexHandleUsernameChangeForSideSub,
                                                    )
                                                  : e.OperationName ===
                                                      "AccountSyncUsernameNotification"
                                                    ? h(
                                                        e,
                                                        o(
                                                          "WAWebMexUsernameAccountSyncNotificationHandler",
                                                        )
                                                          .mexHandleUsernameAccountSync,
                                                      )
                                                    : e.OperationName ===
                                                        "LidChangeNotification"
                                                      ? h(
                                                          e,
                                                          o(
                                                            "WAWebMexLidChangeNotificationHandler",
                                                          )
                                                            .mexHandleLidChangeNotification,
                                                        )
                                                      : e.OperationName ===
                                                          "NotificationUserBrigadingUpdate"
                                                        ? h(
                                                            e,
                                                            o(
                                                              "WAWebHandleBrigadingUpdateNotification",
                                                            )
                                                              .mexHandleBrigadingNotification,
                                                          )
                                                        : e.OperationName ===
                                                            "NotificationGroupLimitSharingPropertyUpdate"
                                                          ? h(
                                                              e,
                                                              o(
                                                                "WAWebMexLimitSharingUpdateHandler",
                                                              )
                                                                .mexHandleLimitSharingUpdate,
                                                            )
                                                          : e.OperationName ===
                                                              "NotificationUserReachoutTimelockUpdate"
                                                            ? h(
                                                                e,
                                                                o(
                                                                  "WAWebMexReachoutTimelockNotificationHandler",
                                                                )
                                                                  .mexHandleReachoutTimelockNotification,
                                                              )
                                                            : e.OperationName ===
                                                                "NotificationIntegrityChallengeRequest"
                                                              ? h(
                                                                  e,
                                                                  o(
                                                                    "WAWebMexIntegrityChallengeNotificationHandler",
                                                                  )
                                                                    .mexHandleIntegrityChallengeNotification,
                                                                )
                                                              : e.OperationName ===
                                                                  "MessageCappingInfoNotification"
                                                                ? h(
                                                                    e,
                                                                    o(
                                                                      "WAWebNewChatMessageCappingNotificationHandler",
                                                                    )
                                                                      .mexHandleNewChatMessageCappingNotification,
                                                                  )
                                                                : (
                                                                    u ||
                                                                    (u =
                                                                      n(
                                                                        "Promise",
                                                                      ))
                                                                  ).reject(
                                                                    new g(
                                                                      e.OperationName,
                                                                    ),
                                                                  );
    }
    var g = (function (e) {
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.mexResponse,
            r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(
              n.errors,
            );
          if (r != null)
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              d,
              "errors list in parsed json has fatal error",
            );
          if (n.data != null)
            return (yield t(e, n.data), C(e.stanzaId, e.from));
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            d,
            "null data in parsed json",
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t) {},
        )),
        v.apply(this, arguments)
      );
    }
    ((l.handleMexNotification = p), (l.MissingMEXNotificationHandler = g));
  },
  98,
);
