__d(
  "WAWebNotificationsBaseReactionNotification",
  [
    "WALogger",
    "WANullthrows",
    "WAWebBaseNotification",
    "WAWebConstantsDeprecated",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationMuteReason",
    "WAWebReactionNotificationUtils",
    "WAWebReactionsCollection",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function a(n) {
          var a,
            i = n.reactionMsg;
          ((a = t.call(this) || this),
            (a.$WABaseReactionNotification$p_1 = function () {
              o("WAWebFrontendMsgGetters").getChat(a.parentMsg) != null &&
                a.parentMsg != null &&
                o("WAWebFrontendMsgGetters").getChat(a.parentMsg)
                  .reactionSquelch ===
                  r("WAWebConstantsDeprecated").SQUELCH_RESET_VALUE &&
                (a.parentMsg.squelch = r(
                  "WAWebConstantsDeprecated",
                ).SQUELCH_RESET_VALUE);
            }),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAReactionNotification: constructor",
                ])),
            ),
            (a.reactionMsg = i));
          var l = r("WANullthrows")(a.reactionMsg.reactionParentKey),
            u = o("WAWebMsgCollection").MsgCollection.get(l.toString());
          if (u == null) {
            var c = o("WAWebLidMigrationUtils").getAlternateMsgKey(l);
            c != null &&
              (u = o("WAWebMsgCollection").MsgCollection.get(c.toString()));
          }
          return u == null
            ? (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAReactionNotification: parentMsg missing, needs hydration",
                  ])),
              ),
              babelHelpers.assertThisInitialized(a))
            : ((a.parentMsg = u), a);
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.beforeBannerShown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.parentMsg != null) {
                var e = yield o(
                  "WAWebReactionsCollection",
                ).ReactionsCollection.findAddressingModeInsensitive(
                  this.parentMsg.id.toString(),
                );
                if (e) {
                  var t = o(
                      "WAWebReactionsCollection",
                    ).ReactionsCollection.getAggregateEmojiAndSender(
                      e,
                      o("WAWebReactionNotificationUtils")
                        .getReactionSenderJid(this.reactionMsg)
                        .toString(),
                    ),
                    n = t.reactionSenderModel;
                  this.reactionSender = n;
                } else
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WAReactionNotification: Reaction model not found",
                      ])),
                  );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.afterBannerShown = function (t) {
            var e = this;
            if (this.reactionSender != null) {
              var n = this.reactionSender,
                r = o("WAWebFrontendMsgGetters").getMaybeChat(this.parentMsg);
              (n.on("revoked change:read", this.closeBanner),
                r == null ||
                  r.on(
                    "change:reactionSquelch",
                    this.$WABaseReactionNotification$p_1,
                  ),
                t.waitForClose().then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "WAReactionNotification: cleaning up reaction notification",
                      ])),
                  ),
                    n.off("revoked change:read", e.closeBanner),
                    r == null ||
                      r.off(
                        "change:reactionSquelch",
                        e.$WABaseReactionNotification$p_1,
                      ));
                }));
            }
          }),
          (i.shouldMute = function (t) {
            if (
              r("WAWebEnvironment").isWindows &&
              this.reactionMsg.viewed === !0
            )
              return r("WAWebNotificationMuteReason").IgnoreViewedMsgs;
            if (
              o(
                "WAWebReactionNotificationUtils",
              ).nonHydratedShouldMuteReactionNotification(this.reactionMsg)
            )
              return r("WAWebNotificationMuteReason").NonHydratedReaction;
            if (this.parentMsg == null)
              return r("WAWebNotificationMuteReason").ParentMsgMissing;
            if (this.shouldMuteDueToAppState(t))
              return r("WAWebNotificationMuteReason").AppState;
          }),
          (i.shouldSquelch = function () {
            var e = o(
              "WAWebNotificationController",
            ).WANotificationController.notificationExists(this.buildKey());
            if (e) return null;
          }),
          (i.buildKey = function () {
            return (
              "reaction:" +
              this.parentMsg.id.toString() +
              "-" +
              o("WAWebReactionNotificationUtils")
                .getReactionSenderJid(this.reactionMsg)
                .toString()
            );
          }),
          (i.shouldMuteDueToAppState = function (t) {
            return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t);
          }),
          (i.getNotificationDeliveryWamEventData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                  .NOTIFICATION_TYPE_ENUM.REACTION_MESSAGE,
                triggeredByOfflineMessage: this.reactionMsg.isOffline === !0,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WABaseReactionNotification = d;
  },
  98,
);
