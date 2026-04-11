__d(
  "WAWebNotificationHelpers",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationConstants",
    "WAWebOfflineHandler",
    "WAWebParticipantListUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUserPrefsNotifications",
    "gkx",
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
    function c(e, t) {
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
                  var n = d(e.id, t);
                  e.squelch = Date.now() + n;
                }
              }),
          !1)
        : !0;
    }
    function d(e, t) {
      var n = t.participants.length;
      return Math.min(120, 30 + 5 * n) * 1e3;
    }
    function m(e) {
      var t;
      return !!(
        (t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) != null &&
        t.isParentGroup
      );
    }
    function p(e) {
      return r("gkx")("26258") || !o("WAWebMsgGetters").getIsGroupMsg(e) || g(e)
        ? !1
        : !!o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg();
    }
    function _(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (t == null || !o("WAWebMuteGetters").getIsMuted(t.mute)) return !1;
      if (!o("WAWebChatGetters").getIsGroup(t)) return !0;
      if (g(e) || o("WAWebMsgGetters").getHasMentionAll(e)) {
        var n = o("WAWebMsgGetters").getSender(e);
        if (n == null) return !1;
        var r = o("WAWebChatCollection").ChatCollection.get(n);
        return r != null && o("WAWebMuteGetters").getIsMuted(r.mute) === !0;
      }
      return !0;
    }
    function f(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return t == null ||
        !o("WAWebMuteGetters").getIsMuted(t.mute) ||
        !o("WAWebChatGetters").getIsGroup(t)
        ? !1
        : o("WAWebMsgGetters").getHasMentionAll(e) &&
            o("WAWebMuteGetters").getIsMentionAllMuted(t.mute);
    }
    function g(e) {
      return (
        o("WAWebMsgGetters").getHasMentionOfMe(e) ||
        o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e)
      );
    }
    function h(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (
        !o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel")) ||
        !t.archive
      )
        return !1;
      if (!o("WAWebChatGetters").getIsGroup(t)) return !0;
      if (g(e)) {
        var n = o("WAWebChatCollection").ChatCollection.get(
          o("WAWebMsgGetters").getSender(e),
        );
        return n != null && o("WAWebMuteGetters").getIsMuted(n.mute) === !0;
      }
      return !0;
    }
    function y(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? s._(/*BTDS*/ "WhatsApp group message")
        : s._(/*BTDS*/ "WhatsApp message");
    }
    function C(e) {
      var t;
      if (e.isLocked) return r("WAWebFbtCommon")("WhatsApp").toString();
      if ((t = e.groupMetadata) != null && t.isUnnamed)
        return o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupFullParticipantsList(
          r("WANullthrows")(e.groupMetadata),
          !0,
        );
      var n = e.msgs.last();
      if ((n == null ? void 0 : n.subtype) === "sender_invite") {
        var a = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
        return n != null &&
          n.templateParams &&
          (n == null ? void 0 : n.templateParams[0]) === "true"
          ? s
              ._(/*BTDS*/ "{receiver_name} accepted your invite", [
                s._param("receiver_name", a),
              ])
              .toString()
          : s
              ._(/*BTDS*/ "{receiver_name} joined WhatsApp", [
                s._param("receiver_name", a),
              ])
              .toString();
      }
      return (
        o("WAWebFrontendContactGetters").getFormattedName(e.contact) ||
        y(e).toString()
      );
    }
    function b(t) {
      return r("WAWebEnvironment").isWindows
        ? e() && (t == null ? void 0 : t.isChatsSurfaceActive) === !0
        : e();
    }
    function v(e) {
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
    function S(e) {
      var t,
        n = o("WAWebABProps").getABPropConfigValue(
          "wa_web_enable_granular_notifications",
        );
      if (
        !r("WAWebEnvironment").isWindows &&
        ((t = window.Notification) == null ? void 0 : t.permission) !==
          o("WAWebNotificationConstants").PERMISSION_ALLOWED
      )
        return !1;
      if (!n)
        return o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
      if (e) {
        var a = o("WAWebChatGetters").getIsGroup(e);
        return a
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
      (l.shouldSquelch = c),
      (l._calculateTimeoutFromGroupMetadata = d),
      (l.isCommunityHomeAdd = m),
      (l.shouldIgnoreGroupMsg = p),
      (l.isMutedAndNotMentioned = _),
      (l.isMentionAllMutedForMsg = f),
      (l.isMeUserMentionedOrQuoted = g),
      (l.isArchivedAndNotMentioned = h),
      (l.getNotificationTitle = C),
      (l.shouldMuteDueToAppState = b),
      (l.shouldPlaySoundGranular = v),
      (l.shouldEnableNotificationGranular = S));
  },
  226,
);
