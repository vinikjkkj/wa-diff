__d(
  "WAWebChatTrust",
  [
    "WAWebBusinessProfileTypes",
    "WAWebChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return u(e, s);
    }
    function s(e) {
      var t;
      return o("WAWebChatGetters").getIsGroup(e)
        ? e.isReadOnly ||
            e.notSpam ||
            ((t = e.groupMetadata) == null
              ? void 0
              : t.isTrustedForAutoDownload()) === !0 ||
            e.hasMaybeSentMsgToChat()
        : e.isTrusted();
    }
    function u(e, t) {
      var n = o("WAWebStateUtils").unproxy(e);
      if (
        o("WAWebUserUtils").isMeAccount(o("WAWebMsgGetters").getSender(n)) ||
        (n.senderObj != null &&
          o("WAWebFrontendContactGetters").getIsMyContact(n.senderObj))
      )
        return !0;
      var r = o("WAWebFrontendMsgGetters").getChat(n);
      if (
        o("WAWebChatGetters").getIsGroup(r) ||
        o("WAWebChatGetters").getIsNewsletter(r)
      )
        return t(r);
      if (
        o("WAWebMsgGetters").getIsPSA(n) ||
        o("WAWebMsgGetters").getIsCAPISupport(n) ||
        n.isFromTemplate
      )
        return !0;
      var a = o("WAWebChatGetters").getIsGroup(r) ? n.senderObj : r.contact;
      return (a == null ? void 0 : a.verifiedLevel) ===
        o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
        ? !0
        : r.notSpam;
    }
    ((l.canAutoDownloadMedia = e),
      (l.isChatTrustedForAutoDownload = s),
      (l.isMsgTrusted = u));
  },
  98,
);
