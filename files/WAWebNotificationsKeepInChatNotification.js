__d(
  "WAWebNotificationsKeepInChatNotification",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebBaseNotification",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsDailyUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function (t) {
        function a(n) {
          var a,
            i = n.keepInChatMessage,
            l = n.onClick,
            s = n.parentMessage;
          return (
            (a = t.call(this) || this),
            (a.$WAKeepInChatNotification$p_3 = function (t, n, r) {
              o("WAWebEphemeralKeepInChatUtils").isKept(n) ||
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WAKeepInChatNotification: kicState changed, removing",
                    ])),
                ),
                a.closeBanner());
            }),
            (a.$WAKeepInChatNotification$p_2 = function () {
              (o(
                "WAWebNotificationsDailyUtils",
              ).incrementNotificationDailyCount(
                o("WAWebNotificationsDailyUtils").NotificationDailyCountKind
                  .KIC_NOTIFICATION_TAP,
                r("WANullthrows")(a.getChatKind()),
              ),
                a.$WAKeepInChatNotification$p_1 == null ||
                  a.$WAKeepInChatNotification$p_1());
            }),
            (a.keepInChatMessage = i),
            (a.parentMessage = s),
            (a.$WAKeepInChatNotification$p_1 = l),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "WAKeepInChatNotification: constructor",
                ])),
            ),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.shouldPlaySound = function () {
            if (!t.prototype.shouldPlaySound.call(this)) return !1;
            var e = o("WAWebFrontendMsgGetters").getChat(
              this.keepInChatMessage,
            );
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(e);
          }),
          (i.shouldShowBanner = function () {
            if (!t.prototype.shouldShowBanner.call(this)) return !1;
            var e = o("WAWebFrontendMsgGetters").getChat(
              this.keepInChatMessage,
            );
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular(e);
          }),
          (i.shouldMute = function (t) {
            var e;
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t))
              return r("WAWebNotificationMuteReason").AppState;
            if (this.parentMessage.kicNotified)
              return r("WAWebNotificationMuteReason").AlreadyNotifiedKic;
            if (!o("WAWebMsgGetters").getIsEphemeral(this.parentMessage))
              return r("WAWebNotificationMuteReason").KicOnNonEphemeralChat;
            if (
              !o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebMsgGetters").getSender(this.parentMessage),
              )
            )
              return r("WAWebNotificationMuteReason").KicOnNonOriginalMsg;
            var n = o("WAWebWidFactory").asUserWidOrThrow(
              this.keepInChatMessage.author || this.keepInChatMessage.from,
            );
            return o("WAWebUserPrefsMeUser").isMeAccount(n)
              ? r("WAWebNotificationMuteReason").KicByMe
              : o("WAWebMuteGetters").getIsMuted(
                    o("WAWebFrontendMsgGetters").getChat(this.parentMessage)
                      .mute,
                  )
                ? r("WAWebNotificationMuteReason").MutedChat
                : o("WAWebFrontendMsgGetters").getChat(this.parentMessage)
                      .archive
                  ? r("WAWebNotificationMuteReason").ArchivedChat
                  : o("WAWebChatGetters").getIsGroup(
                        o("WAWebFrontendMsgGetters").getChat(
                          this.parentMessage,
                        ),
                      ) &&
                      !(
                        (e = o("WAWebFrontendMsgGetters").getChat(
                          this.parentMessage,
                        ).groupMetadata) != null && e.hasJoined()
                      )
                    ? r("WAWebNotificationMuteReason").UserLeftGroupKic
                    : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                      ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                      : null;
          }),
          (i.buildKey = function () {
            return "kic:" + this.parentMessage.id.toString();
          }),
          (i.matchesChat = function (t) {
            return o("WAWebFrontendMsgGetters")
              .getChat(this.parentMessage)
              .equals(t);
          }),
          (i.getChatKind = function () {
            return o("WAWebFrontendChatGetters").getKind(
              o("WAWebFrontendMsgGetters").getChat(this.parentMessage),
            );
          }),
          (i.performLogging = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield t.prototype.performLogging.call(this, e),
                  o(
                    "WAWebNotificationsDailyUtils",
                  ).incrementNotificationDailyCount(
                    o("WAWebNotificationsDailyUtils").NotificationDailyCountKind
                      .KIC_NOTIFICATION,
                    r("WANullthrows")(this.getChatKind()),
                  ));
              },
            );
            function a(t) {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (i.getNotificationDeliveryWamEventData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                  .NOTIFICATION_TYPE_ENUM.KEEP_IN_CHAT,
                triggeredByOfflineMessage:
                  this.keepInChatMessage.isOffline === !0,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage);
              return o("WAWebNotificationIconUtils").getChatNotificationIcon(
                e,
                this.abortController.signal,
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getBannerOptions = function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage),
              t = o("WAWebGetNotificationStrings").getNotificationBody(
                babelHelpers.extends(
                  {},
                  m(this.parentMessage, this.keepInChatMessage),
                  {
                    msgDir: o("WAWebFrontendMsgGetters").getDir(
                      this.parentMessage,
                    ),
                  },
                ),
              );
            return {
              wid: e.id,
              msgId: this.parentMessage.id.toString(),
              title: o("WAWebNotificationHelpers").getNotificationTitle(e),
              body: t,
              onClick: this.$WAKeepInChatNotification$p_2,
            };
          }),
          (i.afterBannerShown = function (t) {
            var e = this;
            (this.parentMessage.set("kicNotified", !0),
              this.parentMessage.on(
                "change:kicState",
                this.$WAKeepInChatNotification$p_3,
              ),
              t.waitForClose().then(function () {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WAKeepInChatNotification: cleaning up kic notification",
                    ])),
                ),
                  e.parentMessage.off(
                    "change:kicState",
                    e.$WAKeepInChatNotification$p_3,
                  ));
              }));
          }),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function m(e, t) {
      var n,
        r,
        a,
        i = o("WAWebFrontendMsgGetters").getChat(e);
      if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
        var l,
          u = o("WAWebContactCollection").ContactCollection.gadd(
            o("WAWebMsgGetters").getSender(t),
          );
        r =
          (l = u.name) != null
            ? l
            : o("WAWebWidFormat").widToFormattedUser(u.id);
      }
      return i.isLocked
        ? {
            body: o("WAWebGetNotificationStrings")
              .getPluralMessageNotificationBody(i.unreadCount)
              .toString(),
          }
        : (e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          !e.shouldShowNotificationPreview()
            ? (n = s._(/*BTDS*/ "Kept your message from disappearing"))
            : ((n = o("WAWebGetNotificationStrings").getNotificationMessageBody(
                e,
              )),
              (n = s._(/*BTDS*/ '"{originalMessageBody}"', [
                s._param("originalMessageBody", n),
              ])),
              (a = s
                ._(/*BTDS*/ "Kept your message from disappearing:")
                .toString())),
          { body: n.toString(), author: r, action: a });
    }
    l.WAKeepInChatNotification = d;
  },
  226,
);
