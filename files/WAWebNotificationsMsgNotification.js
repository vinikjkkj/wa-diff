__d(
  "WAWebNotificationsMsgNotification",
  [
    "fbt",
    "Promise",
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
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterTabPulseState",
    "WAWebNotificationController",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationIcon",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotifyForUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebUA",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "cr:3133",
    "cr:4404",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (e = n("cr:3133")) != null ? e : {},
      m = d.getContextMenuItems,
      p = d.isReplyable,
      _ = d.shouldIgnoreSquelchForGroupMention,
      f = (u = n("cr:4404")) != null ? u : {},
      g = f.getMessageNotificationFooter,
      h = f.getNotificationBodyForPreviewOff,
      y = new Set([o("WAWebMsgType").MSG_TYPE.ALBUM]),
      C = (function (e) {
        function t(t) {
          var n,
            r = t.msg;
          return ((n = e.call(this) || this), (n.msg = r), n);
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.shouldPlaySound = function () {
            if (!e.prototype.shouldPlaySound.call(this)) return !1;
            var t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return (
              o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) &&
              !o("WAWebMsgGetters").getIsEdited(this.msg)
            );
          }),
          (a.shouldShowBanner = function () {
            if (!e.prototype.shouldShowBanner.call(this)) return !1;
            var t = o("WAWebFrontendMsgGetters").getChat(this.msg);
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular(t);
          }),
          (a.shouldMute = function (t) {
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
                                    : v(this.msg)
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
          (a.shouldSquelch = function () {
            var e = o(
              "WAWebNotificationController",
            ).WANotificationController.notificationExists(this.buildKey());
            return (e &&
              (o("WAWebMsgGetters").getIsEdited(this.msg) ||
                y.has(this.msg.type))) ||
              (_ != null && _(this.msg))
              ? null
              : o("WAWebNotificationHelpers").shouldSquelch(
                    o("WAWebFrontendMsgGetters").getChat(this.msg),
                  )
                ? r("WAWebNotificationMuteReason").GroupFlood
                : null;
          }),
          (a.buildKey = function () {
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
          (a.matchesChat = function (t) {
            return t.equals(
              o("WAWebFrontendMsgGetters").getMaybeChat(this.msg),
            );
          }),
          (a.getChatKind = function () {
            return o("WAWebFrontendChatGetters").getKind(
              o("WAWebFrontendMsgGetters").getChat(this.msg),
            );
          }),
          (a.getDefaultIcon = function () {
            return o("WAWebMsgGetters").getIsProductListMessage(this.msg)
              ? o("WAWebMediaUtils").convertToDataURI(
                  o("WAWebMsgGetters").getProductListHeaderImage(this.msg),
                )
              : o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(
                  o("WAWebFrontendMsgGetters").getChat(this.msg),
                );
          }),
          (a.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                var t = yield (c || (c = n("Promise"))).all([
                    o("WAWebNotificationIconUtils").getChatNotificationIcon(
                      e,
                      this.abortController.signal,
                      this.getDefaultIcon(),
                    ),
                    e.promises.integritySignals,
                  ]),
                  r = t[0];
                return (
                  (e.promises.integritySignals = null),
                  e.isSenderSuspicious === !0
                    ? o(
                        "WAWebNotificationIconUtils",
                      ).getDefaultChatNotificationIcon(e)
                    : r
                );
              }
              return o("WAWebNotificationIconUtils").getChatNotificationIcon(
                e,
                this.abortController.signal,
                this.getDefaultIcon(),
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getBannerOptions = function () {
            var e = this.msg,
              t = R(e),
              a = o("WAWebGetNotificationStrings").getNotificationBody(
                babelHelpers.extends({}, t, {
                  msgDir: o("WAWebFrontendMsgGetters").getDir(e),
                }),
              ),
              i = o("WAWebFrontendMsgGetters").getChat(this.msg),
              l = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = yield o("WAWebChatThreadLogging").getChatThreadID(
                      i.id.toJid(),
                    );
                    new (o(
                      "WAWebNotificationEngagementWamEvent",
                    ).NotificationEngagementWamEvent)({ threadId: e }).commit();
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return {
              wid: i.id,
              msgId: this.msg.id.toString(),
              tag: L() ? this.msg.id.toString() : i.id.toString(),
              title: o("WAWebNotificationHelpers").getNotificationTitle(i),
              body: a,
              onClick: function () {
                r("gkx")("26258") || l();
              },
              renotify: !o("WAWebMsgGetters").getIsEdited(this.msg),
              footer: t.footer,
              contextMenuItems: this.getContextMenuItems(),
            };
          }),
          (a.isReplyable = function () {
            var e;
            return (e = p == null ? void 0 : p(this.msg)) != null ? e : !1;
          }),
          (a.getContextMenuItems = function () {
            var e;
            return (e = m == null ? void 0 : m(this.msg)) != null ? e : [];
          }),
          (a.beforeBannerShown = function () {
            return (
              o("WAWebNotificationIcon").notifyBackgroundActivity(),
              e.prototype.beforeBannerShown.call(this)
            );
          }),
          (a.playSound = function () {
            (o("WAWebNotificationIcon").notifyBackgroundActivity(),
              e.prototype.playSound.call(this),
              this.$WAMsgNotification$p_1());
          }),
          (a.$WAMsgNotification$p_1 = function () {
            var e = o("WAWebFrontendMsgGetters").getChat(this.msg);
            o("WAWebChatGetters").getIsNewsletter(e) &&
              o("WAWebNewsletterGatingUtils").isNewsletterTabPulseEnabled() &&
              r("WAWebNewsletterTabPulseState").triggerPulse();
          }),
          (a.getNotificationDeliveryWamEventData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                uiNotificationType: b(this.msg),
                triggeredByOfflineMessage: this.msg.isOffline === !0,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function b(e) {
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
    function v(e) {
      var t;
      return (
        !r("gkx")("26258") &&
        ((t = e.body) == null || (t = t.toLowerCase()) == null
          ? void 0
          : t.includes("@silent")) === !0
      );
    }
    function S(e) {
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
    function R(e) {
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
        !e.shouldShowNotificationPreview()
      ) {
        var u,
          c = (u = h == null ? void 0 : h()) != null ? u : null;
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
      var d = (t = g == null ? void 0 : g(r.unreadCount)) != null ? t : null,
        m = S(e);
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
    function L() {
      return (
        o("WAWebUA").UA.isBlink &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    ((l.eligibleMessagesForNotificationRetriggering = y),
      (l.WAMsgNotification = C),
      (l.getNotificationParts = R),
      (l.shouldReplaceMsgNotificationManually = L));
  },
  226,
);
