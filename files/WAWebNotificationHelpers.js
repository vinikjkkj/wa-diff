__d(
  "WAWebNotificationHelpers",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBotDisplayNameOverride",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebInboundMsgQueueGating",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationPermission",
    "WAWebOfflineHandler",
    "WAWebParticipantListUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUnknownUserDisplayEnricher",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return document.hasFocus();
    }
    function u() {
      return (
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress() ||
        !o("WAWebCmd").Cmd.isOfflineDeliveryEnd
      );
    }
    function c(e) {
      return o(
        "WAWebOfflineHandler",
      ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
        ? !0
        : !o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
            (e.isOffline !== !1 ||
              !o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled());
    }
    function d(e, t) {
      if (
        (t === void 0 && (t = !0),
        !o("WAWebChatGetters").getIsGroup(e) ||
          (o("WAWebChatGetters").getIsGroup(e) && e.isReadOnly))
      )
        return !1;
      var n = Date.now(),
        a = e.squelch || 0;
      return n > a
        ? (t &&
            r("WAWebGroupMetadataCollection")
              .find(e.id)
              .then(function (t) {
                if (t != null) {
                  var n = m(e.id, t);
                  e.squelch = Date.now() + n;
                }
              }),
          !1)
        : !0;
    }
    function m(e, t) {
      var n = t.participants.length;
      return Math.min(120, 30 + 5 * n) * 1e3;
    }
    function p(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      return n != null && !!((t = n.groupMetadata) != null && t.isParentGroup);
    }
    function _(e) {
      return r("gkx")("26258") || !o("WAWebMsgGetters").getIsGroupMsg(e) || h(e)
        ? !1
        : !!o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg();
    }
    function f(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (t == null || !o("WAWebMuteGetters").getIsMuted(t.mute)) return !1;
      if (!o("WAWebChatGetters").getIsGroup(t)) return !0;
      if (h(e) || o("WAWebMsgGetters").getHasMentionAll(e)) {
        var n = o("WAWebMsgGetters").getSender(e);
        if (n == null) return !1;
        var r = o("WAWebChatCollection").ChatCollection.get(n);
        return r != null && o("WAWebMuteGetters").getIsMuted(r.mute) === !0;
      }
      return !0;
    }
    function g(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return t == null ||
        !o("WAWebMuteGetters").getIsMuted(t.mute) ||
        !o("WAWebChatGetters").getIsGroup(t)
        ? !1
        : o("WAWebMsgGetters").getHasMentionAll(e) &&
            o("WAWebMuteGetters").getIsMentionAllMuted(t.mute);
    }
    function h(e) {
      return (
        o("WAWebMsgGetters").getHasMentionOfMe(e) ||
        o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e)
      );
    }
    function y(e) {
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      if (
        t == null ||
        !o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel")) ||
        !t.archive
      )
        return !1;
      if (!o("WAWebChatGetters").getIsGroup(t)) return !0;
      if (h(e)) {
        var n = o("WAWebMsgGetters").getSender(e),
          a = n != null ? o("WAWebChatCollection").ChatCollection.get(n) : null;
        return a != null && o("WAWebMuteGetters").getIsMuted(a.mute) === !0;
      }
      return !0;
    }
    function C(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    function b(e) {
      if (e.isLocked) return r("WAWebFbtCommon")("WhatsApp").toString();
      var t = o("WAWebBotDisplayNameOverride").getBotDisplayNameOverride(e.id);
      if (t != null) return t;
      var n = e.groupMetadata;
      if (n != null && o("WAWebGroupMetadataGetters").getIsUnnamed(n))
        return o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupFullParticipantsList(
          r("nullthrows")(e.groupMetadata),
          !0,
        );
      var a = e.msgs.last();
      if ((a == null ? void 0 : a.subtype) === "sender_invite") {
        var i = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
        return a != null &&
          a.templateParams &&
          (a == null ? void 0 : a.templateParams[0]) === "true"
          ? s._(/*BTDS*/ "", [s._param("receiver_name", i)]).toString()
          : s._(/*BTDS*/ "", [s._param("receiver_name", i)]).toString();
      }
      var l = o("WAWebFrontendContactGetters").getFormattedNameAndType(
          e.contact,
        ),
        u = l.displayName,
        c = l.type;
      return (
        !o("WAWebChatGetters").getIsGroup(e) &&
          e.contact != null &&
          c ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER &&
          o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed(
            "push_notification",
            e.contact.id,
          ),
        u || C(e).toString()
      );
    }
    function v(t) {
      return r("WAWebEnvironment").isWindows
        ? e() && (t == null ? void 0 : t.isChatsSurfaceActive) === !0
        : e();
    }
    function S(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      if (!t) return o("WAWebMuteCollection").MuteCollection.getGlobalSounds();
      if (e && t) {
        var n = o("WAWebChatGetters").getIsGroup(e);
        return n
          ? o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupSoundsEnabled()
          : o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled();
      }
      return !0;
    }
    function R(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      if (!o("WAWebNotificationPermission").isNotificationPermissionGranted())
        return !1;
      if (!t)
        return o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
      if (e) {
        var n = o("WAWebChatGetters").getIsGroup(e);
        return n
          ? o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationsEnabled()
          : o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationsEnabled();
      }
      return !0;
    }
    ((l.appIsActive = e),
      (l.isOfflineResumeInProgress = u),
      (l.isMsgMutedForOfflineResume = c),
      (l.shouldSquelch = d),
      (l._calculateTimeoutFromGroupMetadata = m),
      (l.isCommunityHomeAdd = p),
      (l.shouldIgnoreGroupMsg = _),
      (l.isMutedAndNotMentioned = f),
      (l.isMentionAllMutedForMsg = g),
      (l.isMeUserMentionedOrQuoted = h),
      (l.isArchivedAndNotMentioned = y),
      (l.getNotificationTitle = b),
      (l.shouldMuteDueToAppState = v),
      (l.shouldPlaySoundGranular = S),
      (l.shouldEnableNotificationGranular = R));
  },
  226,
);
