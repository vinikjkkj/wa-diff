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
    "WAWebMsgModelUtils",
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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function (t) {
        function n(n) {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.shouldPlaySound = function () {
            if (!t.prototype.shouldPlaySound.call(this)) return !1;
            var e = o("WAWebFrontendMsgGetters").getChat(
              this.keepInChatMessage,
            );
            return o("WAWebNotificationHelpers").shouldPlaySoundGranular(e);
          }),
          (a.shouldShowBanner = function () {
            if (!t.prototype.shouldShowBanner.call(this)) return !1;
            var e = o("WAWebFrontendMsgGetters").getChat(
              this.keepInChatMessage,
            );
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular(e);
          }),
          (a.shouldMute = function (t) {
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
          (a.buildKey = function () {
            return "kic:" + this.parentMessage.id.toString();
          }),
          (a.matchesChat = function (t) {
            return o("WAWebFrontendMsgGetters")
              .getChat(this.parentMessage)
              .equals(t);
          }),
          (a.getChatKind = function () {
            return o("WAWebFrontendChatGetters").getKind(
              o("WAWebFrontendMsgGetters").getChat(this.parentMessage),
            );
          }),
          (a.performLogging = async function (n) {
            (await t.prototype.performLogging.call(this, n),
              o("WAWebNotificationsDailyUtils").incrementNotificationDailyCount(
                o("WAWebNotificationsDailyUtils").NotificationDailyCountKind
                  .KIC_NOTIFICATION,
                r("WANullthrows")(this.getChatKind()),
              ));
          }),
          (a.getNotificationDeliveryWamEventData = async function () {
            return {
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.KEEP_IN_CHAT,
              triggeredByOfflineMessage:
                this.keepInChatMessage.isOffline === !0,
            };
          }),
          (a.getIcon = async function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.parentMessage);
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              e,
              this.abortController.signal,
            );
          }),
          (a.getBannerOptions = function () {
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
          (a.afterBannerShown = function (t) {
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
          n
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
          !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
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
