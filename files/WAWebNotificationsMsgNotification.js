__d(
  "WAWebNotificationsMsgNotification",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBaseNotification",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFMXGatingUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupSafetyCheckUtils",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterTabPulseState",
    "WAWebNotificationController",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotifyForUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebUA",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "cr:3133",
    "cr:4404",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = (e = n("cr:3133")) != null ? e : {},
      d = c.getContextMenuItems,
      m = c.isReplyable,
      p = c.shouldIgnoreSquelchForGroupMention,
      _ = (u = n("cr:4404")) != null ? u : {},
      f = _.getMessageNotificationFooter,
      g = _.getNotificationBodyForPreviewOff,
      h = new Set([o("WAWebMsgType").MSG_TYPE.ALBUM]),
      y = (function (e) {
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
            return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
              ? r("WAWebNotificationMuteReason").AppState
              : o(
                    "WAWebGroupSafetyCheckUtils",
                  ).shouldMuteMentionWhileGroupSafetyChecked(this.msg)
                ? r("WAWebNotificationMuteReason").GroupSafetyCheck
                : o("WAWebNotificationHelpers").isMutedAndNotMentioned(this.msg)
                  ? r("WAWebNotificationMuteReason").MutedChat
                  : o("WAWebNotificationHelpers").isMentionAllMutedForMsg(
                        this.msg,
                      )
                    ? r("WAWebNotificationMuteReason").MentionAllMuted
                    : o("WAWebNotificationHelpers").isArchivedAndNotMentioned(
                          this.msg,
                        )
                      ? r("WAWebNotificationMuteReason").ArchivedChat
                      : o("WAWebNotificationHelpers").isCommunityHomeAdd(
                            this.msg,
                          )
                        ? r("WAWebNotificationMuteReason")
                            .IgnoreAddedToCommunityHome
                        : !r("gkx")("26258") &&
                            o("WAWebNotificationHelpers").shouldIgnoreGroupMsg(
                              this.msg,
                            )
                          ? r("WAWebNotificationMuteReason").IgnoreGroupMsg
                          : o("WAWebMsgGetters").getIsFutureproof(this.msg)
                            ? r("WAWebNotificationMuteReason").IgnoreFutureProof
                            : o(
                                  "WAWebNotificationHelpers",
                                ).isOfflineResumeInProgress()
                              ? r("WAWebNotificationMuteReason")
                                  .OfflineResumeInProgress
                              : o("WAWebMsgGetters").getIsBizContentPlaceholder(
                                    this.msg,
                                  )
                                ? r("WAWebNotificationMuteReason")
                                    .IgnoreBizContentPlaceholder
                                : o("WAWebMsgGetters").getIsCallSilenced(
                                      this.msg,
                                    ) ||
                                    (o(
                                      "WAWebVoipGatingUtils",
                                    ).isCallingEnabled() &&
                                      this.msg.type ===
                                        o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                                      this.msg.subtype == null &&
                                      !o("WAWebMsgGetters").getIsMissedCall(
                                        this.msg,
                                      ))
                                  ? r("WAWebNotificationMuteReason")
                                      .IgnoreCallMsgs
                                  : o("WAWebBotUtils").isHiddenBotWid(e.id) ||
                                      (e.id.isBot() &&
                                        (!o(
                                          "WAWebBotBaseGating",
                                        ).isBotEnabled() ||
                                          this.msg.botMsgBodyType ===
                                            o("WAWebBotTypes").BotMsgBodyType
                                              .VOICE))
                                    ? r("WAWebNotificationMuteReason")
                                        .IgnoreBotMsgs
                                    : b(this.msg)
                                      ? r("WAWebNotificationMuteReason")
                                          .IgnoreInternalSilentTag
                                      : o(
                                            "WAWebViewModeUtils",
                                          ).isViewModeVisibleInSurface(
                                            o("WAWebViewMode.flow")
                                              .ViewModeSurface.NOTIFICATION,
                                            this.msg.viewMode,
                                          )
                                        ? o(
                                            "WAWebBizAiAgentStatusUtils",
                                          ).shouldMuteNotification(e)
                                          ? r("WAWebNotificationMuteReason")
                                              .AIRepliesOn
                                          : o(
                                                "WAWebNotifyForUtils",
                                              ).shouldMuteForNotifyForSetting(
                                                this.msg,
                                              )
                                            ? r("WAWebNotificationMuteReason")
                                                .NotifyForHighlights
                                            : null
                                        : r("WAWebNotificationMuteReason")
                                            .IgnoreHiddenViewModeMsgs;
          }),
          (n.shouldSquelch = function () {
            var e = o(
              "WAWebNotificationController",
            ).WANotificationController.notificationExists(this.buildKey());
            return (e &&
              (o("WAWebMsgGetters").getIsEdited(this.msg) ||
                h.has(this.msg.type))) ||
              (p != null && p(this.msg))
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
              t = S(e),
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
              tag: R() ? this.msg.id.toString() : a.id.toString(),
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
            return (e = m == null ? void 0 : m(this.msg)) != null ? e : !1;
          }),
          (n.getContextMenuItems = function () {
            var e;
            return (e = d == null ? void 0 : d(this.msg)) != null ? e : [];
          }),
          (n.playSound = function () {
            (e.prototype.playSound.call(this), this.$WAMsgNotification$p_1());
          }),
          (n.$WAMsgNotification$p_1 = function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.msg);
            o("WAWebChatGetters").getIsNewsletter(e) &&
              o("WAWebNewsletterGatingUtils").isNewsletterTabPulseEnabled() &&
              r("WAWebNewsletterTabPulseState").triggerPulse();
          }),
          (n.getNotificationDeliveryWamEventData = async function () {
            return {
              uiNotificationType: C(this.msg),
              triggeredByOfflineMessage: this.msg.isOffline === !0,
            };
          }),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function C(e) {
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
    function b(e) {
      var t;
      return (
        !r("gkx")("26258") &&
        ((t = e.body) == null || (t = t.toLowerCase()) == null
          ? void 0
          : t.includes("@silent")) === !0
      );
    }
    function v(e) {
      if (!o("WAWebMsgGetters").getIsGroupMsg(e)) return null;
      var t = null;
      return (
        o("WAWebMsgGetters").getHasMentionOfMe(e) &&
          (t = s._(/*BTDS*/ "Mentioned you").toString()),
        o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e) &&
          (t = s._(/*BTDS*/ "Replied to you").toString()),
        o("WAWebMsgGetters").getHasMentionAll(e) &&
          (t = s._(/*BTDS*/ "Mentioned all").toString()),
        t != null &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_important_msg_notification",
        )
          ? t
          : null
      );
    }
    function S(e) {
      var t,
        n = null,
        r = o("WAWebFrontendMsgGetters").getChat(e),
        a = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(r),
        i = o("WAWebMsgGetters").getNewsletterAdminProfile(e),
        l;
      if (
        (o("WAWebMsgGetters").getIsGroupMsg(e) ||
        o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e)
          ? (l = e.displayName({
              withPushName: a,
              withPushNameOnly: a,
              newPushNameFormatting: a,
              showVerifiedName: a,
            }))
          : i && (l = i.name),
        r.isLocked)
      )
        return {
          body: o("WAWebGetNotificationStrings")
            .getPluralMessageNotificationBody(r.unreadCount)
            .toString(),
        };
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
      ) {
        var u,
          c = (u = g == null ? void 0 : g()) != null ? u : null;
        c != null
          ? (n = c)
          : o("WAWebMsgGetters").getIsGroupMsg(e)
            ? l != null
              ? ((n = s._(/*BTDS*/ "Message from {name}", [
                  s._param("name", l),
                ])),
                (l = void 0))
              : (n = s._(/*BTDS*/ "New message"))
            : (n = o(
                "WAWebGetNotificationStrings",
              ).getPluralMessageNotificationBody(r.unreadCount));
      } else
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        e.subtype === "sender_invite"
          ? e.templateParams && e.templateParams[0] === "true"
            ? (n = s._(/*BTDS*/ "Say hello on WhatsApp!"))
            : (n = s._(/*BTDS*/ "Say hello!"))
          : (n = o("WAWebGetNotificationStrings").getNotificationMessageBody(
              e,
            ));
      var d = (t = f == null ? void 0 : f(r.unreadCount)) != null ? t : null,
        m = v(e);
      return (
        m != null &&
          (l != null
            ? (l = m + ": " + l)
            : n != null &&
              (n = s._(/*BTDS*/ "{mention-label}: {message-body}", [
                s._param("mention-label", m),
                s._param("message-body", n),
              ]))),
        babelHelpers.extends(
          { body: n.toString(), author: l },
          d != null && { footer: d.toString() },
        )
      );
    }
    function R() {
      return (
        o("WAWebUA").UA.isBlink &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    ((l.eligibleMessagesForNotificationRetriggering = h),
      (l.WAMsgNotification = y),
      (l.getNotificationParts = S),
      (l.shouldReplaceMsgNotificationManually = R));
  },
  226,
);
