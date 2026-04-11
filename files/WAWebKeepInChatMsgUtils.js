__d(
  "WAWebKeepInChatMsgUtils",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebEphemeralKeepInChatAbpropUtils",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebMsgGetters").getIsEphemeral(e) &&
        (e.star || e.isGif || o("WAWebMsgGetters").getIsStickerMsg(e))
      );
    }
    function s(e) {
      var t = o("WAWebMsgGetters").getKicSender(e),
        n = r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(
            t,
            o("WAWebMsgGetters").getSender(e),
          ),
        );
      return o("WAWebMsgGetters").getIsUnkept(e) && n && !u(e);
    }
    function u(e) {
      return o("WAWebUserPrefsMeUser").isMeAccount(
        o("WAWebMsgGetters").getKicSender(e),
      );
    }
    function c(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      if (t != null) {
        var n = Math.trunc(+new Date() / 1e3) - t;
        return (
          o("WAWebMsgGetters").getIsKept(e) &&
          n >
            o(
              "WAWebEphemeralKeepInChatAbpropUtils",
            ).getUndoKeepInChatExpiration()
        );
      }
      return !1;
    }
    function d(e) {
      var t = o("WAWebUserPrefsMeUser").getMeUser();
      return p(e, t);
    }
    function m(e, t) {
      return p(e, t);
    }
    function p(e, t) {
      var n,
        r = o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        )
          ? !(
              (n = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) !=
                null && n.userCanSetEphemeralSetting(t)
            )
          : !1;
      return r;
    }
    function _(e) {
      return o("WAWebFrontendMsgGetters").getChat(e).supportsKIC()
        ? o("WAWebMsgGetters").getIsEphemeral(e) &&
            e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
            !e.isViewOnce &&
            !o("WAWebFrontendMsgGetters").getAsAlbum(e)
        : !1;
    }
    function f(e) {
      return g(e) || h(e);
    }
    function g(e) {
      var t;
      return (
        _(e) &&
        (e.afterReadDuration == null || e.afterReadDuration === 0) &&
        (o("WAWebChatGroupUtils").canSendToGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ) ||
          ((t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) == null
            ? void 0
            : t.pastParticipants.get(o("WAWebUserPrefsMeUser").getMeUser())) !=
            null) &&
        !d(e) &&
        !e.star &&
        !e.isGif &&
        !o("WAWebMsgGetters").getIsStickerMsg(e)
      );
    }
    function h(e) {
      return (
        o("WAWebMsgGetters").getIsKept(e) &&
        _(e) &&
        (y(e) || g(e) || e.isGif || o("WAWebMsgGetters").getIsStickerMsg(e))
      );
    }
    function y(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e)) {
        var t;
        if (
          o("WAWebChatGetters").getIsGroup(
            o("WAWebFrontendMsgGetters").getChat(e),
          ) &&
          ((t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) == null
            ? void 0
            : t.participants.iAmMember()) === !0
        )
          return !0;
        if (
          o("WAWebChatGetters").getIsUser(
            o("WAWebFrontendMsgGetters").getChat(e),
          ) &&
          !o("WAWebFrontendMsgGetters").getChat(e).contact.isContactBlocked
        )
          return !0;
      }
      return !1;
    }
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
      if (t == null) return !1;
      var n = o("WAWebMsgGetters").getSender(e);
      if (n != null && t.participants.get(n) != null) return !0;
      if (!t.isCag) return !1;
      var r =
        n != null
          ? o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(n),
            )
          : null;
      return r == null ? !1 : t.participants.get(r) != null;
    }
    function b(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      return t == null ? !1 : t <= o("WATimeUtils").unixTime();
    }
    function v(e) {
      return b(e) && !o("WAWebMsgGetters").getIsKept(e);
    }
    ((l.supportsStarWithKeepInChat = e),
      (l.keepIsLockedForMeSenderSuperpower = s),
      (l.isPastUnkeepExpirationLimit = c),
      (l.keepIsLockedForMe = d),
      (l.keepIsLockedForUser = m),
      (l.canShowKeepOrUnkeepOption = f),
      (l.canShowKeepOption = g),
      (l.canShowUnkeepOption = h),
      (l.senderIsGroupParticipant = C),
      (l.isExpired = b),
      (l.isExpiredAndNotKept = v));
  },
  98,
);
