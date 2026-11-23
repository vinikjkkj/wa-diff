__d(
  "WAWebNotificationsKeepInChatNotification",
  [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsDailyUtils",
    "WAWebUserUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWidFormat",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function (t) {
        function n(n) {
          var a,
            i = n.keepInChatMessage,
            l = n.kicSender,
            s = n.onClick,
            c = n.parentMessage;
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
                r("nullthrows")(a.getChatKind()),
              ),
                a.$WAKeepInChatNotification$p_1 == null ||
                  a.$WAKeepInChatNotification$p_1());
            }),
            (a.keepInChatMessage = i),
            (a.kicSender = l),
            (a.parentMessage = c),
            (a.$WAKeepInChatNotification$p_1 = s),
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
            return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
              ? r("WAWebNotificationMuteReason").AppState
              : this.parentMessage.kicNotified
                ? r("WAWebNotificationMuteReason").AlreadyNotifiedKic
                : o("WAWebMsgGetters").getIsEphemeral(this.parentMessage)
                  ? o("WAWebUserUtils").isMeAccount(
                      o("WAWebMsgGetters").getSender(this.parentMessage),
                    )
                    ? o("WAWebUserUtils").isMeAccount(this.kicSender)
                      ? r("WAWebNotificationMuteReason").KicByMe
                      : o("WAWebMuteGetters").getIsMuted(
                            o("WAWebFrontendMsgGetters").getChat(
                              this.parentMessage,
                            ).mute,
                          )
                        ? r("WAWebNotificationMuteReason").MutedChat
                        : o("WAWebFrontendMsgGetters").getChat(
                              this.parentMessage,
                            ).archive
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
                            : o(
                                  "WAWebNotificationHelpers",
                                ).isOfflineResumeInProgress()
                              ? r("WAWebNotificationMuteReason")
                                  .OfflineResumeInProgress
                              : null
                    : r("WAWebNotificationMuteReason").KicOnNonOriginalMsg
                  : r("WAWebNotificationMuteReason").KicOnNonEphemeralChat;
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
                r("nullthrows")(this.getChatKind()),
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
                  m(this.parentMessage, this.kicSender),
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
          u,
          c = o("WAWebContactCollection").ContactCollection.gadd(t);
        r =
          (l =
            (u = c.name) != null
              ? u
              : o("WAWebFrontendContactGetters").getShownOrgMemberName(c)) !=
          null
            ? l
            : o("WAWebWidFormat").widToFormattedUser(c.id);
      }
      return i.isLocked
        ? {
            body: o("WAWebGetNotificationStrings")
              .getPluralMessageNotificationBody(i.unreadCount)
              .toString(),
          }
        : (e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          !o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(e)
            ? (n = s._(/*BTDS*/ ""))
            : ((n = o("WAWebGetNotificationStrings").getNotificationMessageBody(
                e,
              )),
              (n = s._(/*BTDS*/ "", [s._param("originalMessageBody", n)])),
              (a = s._(/*BTDS*/ "").toString())),
          { body: n.toString(), author: r, action: a });
    }
    l.WAKeepInChatNotification = d;
  },
  226,
);
