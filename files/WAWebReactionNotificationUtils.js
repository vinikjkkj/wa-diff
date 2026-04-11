__d(
  "WAWebReactionNotificationUtils",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmoji",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupMetadataCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebReactionsBEUtils",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return o("WAWebWidFactory").asUserWidOrThrow(
        r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
      );
    }
    function u(t) {
      var n = t.reactionText,
        r = t.read,
        a = e(t).toString();
      return !!(
        r === !0 ||
        o("WAWebUserPrefsMeUser").isSerializedWidMe(a) ||
        !t.reactionParentKey.fromMe ||
        n === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT ||
        o("WAWebNotificationHelpers").isOfflineResumeInProgress()
      );
    }
    function c(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      if (t) {
        var n = o("WAWebFrontendMsgGetters").getChat(e),
          r = o("WAWebChatGetters").getIsGroup(n);
        return r
          ? o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationReactionsEnabled()
          : o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationReactionsEnabled();
      }
      return !o("WAWebMuteGetters").getIsMuted(
        o("WAWebMuteCollection").MuteCollection.globalReactionsMute(),
      );
    }
    function d(e, t) {
      if (!o("WAWebChatGetters").getIsGroup(e)) return !1;
      var n = Date.now(),
        a = t.squelch || 0;
      return n > a
        ? (r("WAWebGroupMetadataCollection")
            .find(e.id)
            .then(function (n) {
              if (n != null) {
                var a = o(
                    "WAWebNotificationHelpers",
                  )._calculateTimeoutFromGroupMetadata(e.id, n),
                  i = Date.now() + a;
                ((t.squelch = i),
                  e.reactionSquelch ===
                    r("WAWebConstantsDeprecated").SQUELCH_RESET_VALUE &&
                    (e.reactionSquelch = i));
              }
            }),
          !1)
        : !0;
    }
    function m(t, n) {
      var r,
        a = e(n),
        i = o("WAWebContactCollection").ContactCollection.gadd(a),
        l = o("WAWebFrontendMsgGetters").getChat(t),
        s = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(l);
      if (a.isLid() && i.phoneNumber) {
        var u,
          c = o("WAWebContactCollection").ContactCollection.get(i.phoneNumber),
          d = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(c) && s,
          m = c != null ? o("WAWebContactGetters").getNotifyName(c) : null;
        r =
          (u = c == null ? void 0 : c.name) != null
            ? u
            : d && m != null
              ? o("WAWebChatContactUtils").getFormattedNotifyName(m).toString()
              : o("WAWebWidFormat").widToFormattedUser(i.phoneNumber);
      } else {
        var p,
          _ = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(i) && s;
        r =
          (p = i.name) != null
            ? p
            : _ && o("WAWebContactGetters").getNotifyName(i) != null
              ? o("WAWebChatContactUtils")
                  .getFormattedNotifyName(
                    o("WAWebContactGetters").getNotifyName(i),
                  )
                  .toString()
              : o("WAWebWidFormat").widToFormattedUser(i.id);
      }
      return r;
    }
    function p(e, t) {
      var n, r, a;
      o("WAWebMsgGetters").getIsGroupMsg(e) && (a = m(e, t));
      var i =
          (n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
            t.reactionText,
          )) != null
            ? n
            : o("WAWebEmoji").OPEN_BOX_CHAR,
        l = s._(/*BTDS*/ "Reacted {emoji} to", [s._param("emoji", i)]);
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        !e.shouldShowNotificationPreview()
          ? (r = s._(/*BTDS*/ "a message"))
          : ((r = o("WAWebGetNotificationStrings").getNotificationMessageBody(
              e,
            )),
            (r = s._(/*BTDS*/ '"{originalMessageBody}"', [
              s._param("originalMessageBody", r),
            ]))),
        { body: r.toString(), author: a, action: l.toString() }
      );
    }
    function _(e, t) {
      return {
        body: s._(/*BTDS*/ "Liked your status").toString(),
        author: m(e, t),
      };
    }
    function f(e) {
      return !(
        !o("WAWebSettingsGetters").getShowArchiveV2(r("WAWebSettingsModel")) ||
        !e.archive
      );
    }
    ((l.getReactionSenderJid = e),
      (l.nonHydratedShouldMuteReactionNotification = u),
      (l.shouldEnableReactionsNotificationGranular = c),
      (l.shouldSquelchReactionMessage = d),
      (l.getNotificationPartsForChatReaction = p),
      (l.getNotificationPartsForStatusReaction = _),
      (l.isArchivedChat = f));
  },
  226,
);
