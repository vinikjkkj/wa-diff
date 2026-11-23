__d(
  "WAWebMsgNotification",
  [
    "WAWebBaseNotification",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebEnvironment",
    "WAWebFMXGatingUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupSafetyCheckUtils",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationController",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationsMsgNotification",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "cr:3133",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:3133")) != null ? e : {},
      u = s.getContextMenuItems,
      c = s.isReplyable,
      d = s.shouldIgnoreSquelchForGroupMention,
      m = (function (e) {
        function t(t) {
          var n,
            r = t.msg;
          return ((n = e.call(this) || this), (n.msg = r), n);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.shouldPlaySound = function () {
            if (!e.prototype.shouldPlaySound.call(this)) return !1;
            var t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return (
              o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) &&
              !o("WAWebMsgGetters").getIsEdited(this.msg)
            );
          }),
          (n.shouldShowBanner = function () {
            if (!e.prototype.shouldShowBanner.call(this)) return !1;
            var t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular(t);
          }),
          (n.shouldMute = function (t) {
            if (r("WAWebEnvironment").isWindows && this.msg.viewed)
              return r("WAWebNotificationMuteReason").IgnoreViewedMsgs;
            if (this.msg.read === !0)
              return r("WAWebNotificationMuteReason").ReadByPeer;
            var e = o("WAWebFrontendMsgGetters").getChat(this.msg);
            if (o("WAWebNotificationHelpers").shouldMuteDueToAppState(t))
              return r("WAWebNotificationMuteReason").AppState;
            if (
              o(
                "WAWebGroupSafetyCheckUtils",
              ).shouldMuteMentionWhileGroupSafetyChecked(this.msg)
            )
              return r("WAWebNotificationMuteReason").GroupSafetyCheck;
            if (o("WAWebNotificationHelpers").isMutedAndNotMentioned(this.msg))
              return r("WAWebNotificationMuteReason").MutedChat;
            if (o("WAWebNotificationHelpers").isMentionAllMutedForMsg(this.msg))
              return r("WAWebNotificationMuteReason").MentionAllMuted;
            if (
              o("WAWebNotificationHelpers").isArchivedAndNotMentioned(this.msg)
            )
              return r("WAWebNotificationMuteReason").ArchivedChat;
            if (o("WAWebNotificationHelpers").isCommunityHomeAdd(this.msg))
              return r("WAWebNotificationMuteReason")
                .IgnoreAddedToCommunityHome;
            if (
              this.msg.type ===
              o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE
            )
              return r("WAWebNotificationMuteReason").IgnoreGroupHistoryNotice;
            if (
              !r("gkx")("26258") &&
              o("WAWebNotificationHelpers").shouldIgnoreGroupMsg(this.msg)
            )
              return r("WAWebNotificationMuteReason").IgnoreGroupMsg;
            if (o("WAWebMsgGetters").getIsFutureproof(this.msg))
              return r("WAWebNotificationMuteReason").IgnoreFutureProof;
            if (
              o("WAWebNotificationHelpers").isMsgMutedForOfflineResume(this.msg)
            )
              return r("WAWebNotificationMuteReason").OfflineResumeInProgress;
            if (o("WAWebMsgGetters").getIsBizContentPlaceholder(this.msg))
              return r("WAWebNotificationMuteReason")
                .IgnoreBizContentPlaceholder;
            if (
              o("WAWebMsgGetters").getIsCallSilenced(this.msg) ||
              (o("WAWebVoipGatingUtils").isCallingEnabled() &&
                this.msg.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                this.msg.subtype == null &&
                !o("WAWebMsgGetters").getIsMissedCall(this.msg))
            )
              return r("WAWebNotificationMuteReason").IgnoreCallMsgs;
            if (o("WAWebBotUtils").isHiddenBotWid(e.id))
              return r("WAWebNotificationMuteReason").IgnoreBotMsgs;
            if (e.id.isBot()) {
              if (
                (!o("WAWebBotBaseGating").isBotEnabled() &&
                  !e.id.isSupportAgentBot()) ||
                this.msg.botMsgBodyType ===
                  o("WAWebBotTypes").BotMsgBodyType.VOICE
              )
                return r("WAWebNotificationMuteReason").IgnoreBotMsgs;
              if (this.msg.activeBotMsgStreamingInProgress === !0)
                return r("WAWebNotificationMuteReason").BotResponseStreaming;
            }
            return _(this.msg)
              ? r("WAWebNotificationMuteReason").IgnoreInternalSilentTag
              : o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                    o("WAWebViewMode.flow").ViewModeSurface.NOTIFICATION,
                    this.msg.viewMode,
                  )
                ? o("WAWebBizAiAgentStatusUtils").shouldMuteNotification(e)
                  ? r("WAWebNotificationMuteReason").AIRepliesOn
                  : null
                : r("WAWebNotificationMuteReason").IgnoreHiddenViewModeMsgs;
          }),
          (n.shouldSquelch = function () {
            var e = o(
              "WAWebNotificationController",
            ).WANotificationController.notificationExists(this.buildKey());
            return (e &&
              (o("WAWebMsgGetters").getIsEdited(this.msg) ||
                o(
                  "WAWebNotificationsMsgNotification",
                ).eligibleMessagesForNotificationRetriggering.has(
                  this.msg.type,
                ))) ||
              (d != null && d(this.msg))
              ? null
              : o("WAWebNotificationHelpers").shouldSquelch(
                    o("WAWebFrontendMsgGetters").getChat(this.msg),
                  )
                ? r("WAWebNotificationMuteReason").GroupFlood
                : null;
          }),
          (n.buildKey = function () {
            var e, t;
            return (
              "msg:" +
              ((e =
                (t = this.msg.latestEditMsgKey) == null
                  ? void 0
                  : t.toString()) != null
                ? e
                : this.msg.id.toString())
            );
          }),
          (n.matchesChat = function (t) {
            return t.equals(
              o("WAWebFrontendMsgGetters").getMaybeChat(this.msg),
            );
          }),
          (n.getChatKind = function () {
            return o("WAWebFrontendChatGetters").getKind(
              o("WAWebFrontendMsgGetters").getChat(this.msg),
            );
          }),
          (n.getDefaultIcon = function () {
            return o("WAWebMsgGetters").getIsProductListMessage(this.msg)
              ? o("WAWebMediaUtils").convertToDataURI(
                  o("WAWebMsgGetters").getProductListHeaderImage(this.msg),
                )
              : o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(
                  o("WAWebFrontendMsgGetters").getChat(this.msg),
                );
          }),
          (n.getIcon = async function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.msg);
            if (
              e.isSenderSuspicious === !0 &&
              o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled()
            )
              return o(
                "WAWebNotificationIconUtils",
              ).getDefaultChatNotificationIcon(e);
            if (
              !e.trusted &&
              e.promises.integritySignals != null &&
              o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled()
            ) {
              var t = await Promise.all([
                  o("WAWebNotificationIconUtils").getChatNotificationIcon(
                    e,
                    this.abortController.signal,
                    this.getDefaultIcon(),
                  ),
                  e.promises.integritySignals,
                ]),
                n = t[0];
              return (
                (e.promises.integritySignals = null),
                e.isSenderSuspicious === !0
                  ? o(
                      "WAWebNotificationIconUtils",
                    ).getDefaultChatNotificationIcon(e)
                  : n
              );
            }
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              e,
              this.abortController.signal,
              this.getDefaultIcon(),
            );
          }),
          (n.getBannerOptions = function () {
            var e = this.msg,
              t = o("WAWebNotificationsMsgNotification").getNotificationParts(
                e,
              ),
              n = o("WAWebGetNotificationStrings").getNotificationBody(
                babelHelpers.extends({}, t, {
                  msgDir: o("WAWebFrontendMsgGetters").getDir(e),
                }),
              ),
              a = o("WAWebFrontendMsgGetters").getChat(this.msg),
              i = async function () {
                var e = await o("WAWebChatThreadLogging").getChatThreadID(
                  a.id.toJid(),
                );
                new (o(
                  "WAWebNotificationEngagementWamEvent",
                ).NotificationEngagementWamEvent)({ threadId: e }).commit();
              };
            return {
              wid: a.id,
              msgId: this.msg.id.toString(),
              tag: o(
                "WAWebNotificationsMsgNotification",
              ).shouldReplaceMsgNotificationManually()
                ? this.msg.id.toString()
                : a.id.toString(),
              title: o("WAWebNotificationHelpers").getNotificationTitle(a),
              body: n,
              onClick: function () {
                r("gkx")("26258") || i();
              },
              renotify: !o("WAWebMsgGetters").getIsEdited(this.msg),
              footer: t.footer,
              contextMenuItems: this.getContextMenuItems(),
            };
          }),
          (n.isReplyable = function () {
            var e;
            return (e = c == null ? void 0 : c(this.msg)) != null ? e : !1;
          }),
          (n.getContextMenuItems = function () {
            var e;
            return (e = u == null ? void 0 : u(this.msg)) != null ? e : [];
          }),
          (n.getNotificationDeliveryWamEventData = async function () {
            return {
              uiNotificationType: p(this.msg),
              triggeredByOfflineMessage: this.msg.isOffline === !0,
            };
          }),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function p(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .TEXT_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .PHOTO_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .VIDEO_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.PTT:
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .VOICE_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .FILE_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .STICKER_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.LOCATION:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .LOCATION_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.VCARD:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .CONTACT_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .POLL_MESSAGE;
        case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
          return e.subtype === "miss" || e.subtype === "miss_group"
            ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                .MISSED_VOICE_CALL
            : e.subtype === "miss_video" || e.subtype === "miss_group_video"
              ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .MISSED_VIDEO_CALL
              : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .OTHER;
        default:
          return o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
            .OTHER;
      }
    }
    function _(e) {
      var t;
      return (
        !r("gkx")("26258") &&
        ((t = e.body) == null || (t = t.toLowerCase()) == null
          ? void 0
          : t.includes("@silent")) === !0
      );
    }
    l.WAMsgNotification = m;
  },
  98,
);
