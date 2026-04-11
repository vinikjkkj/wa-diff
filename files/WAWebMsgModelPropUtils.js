__d(
  "WAWebMsgModelPropUtils",
  [
    "WAWebBusinessProfileTypes",
    "WAWebChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION,
      ],
      s = [
        "loading_media",
        "image",
        "video",
        "ptv",
        "audio",
        "ptt",
        "location",
        "vcard",
        "multi_vcard",
        "document",
        "ciphertext",
        "debug_placeholder",
        "oversized",
        "unknown",
        "call_log",
        "revoked",
        "sticker",
        "payment",
        "poll_creation",
        "poll_result_snapshot",
        "groups_v4_invite",
        "newsletter_admin_invite",
        "product",
        "order",
        "event_creation",
        "biz_content_placeholder",
        "album",
        "sticker-pack",
        "newsletter_follower_invite",
        "quarantined",
      ];
    function u(t) {
      var n = o("WAWebStateUtils").unproxy(t);
      return n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? n.interactiveType ===
            r("WAWebInteractiveMessageType").SHOPS_STOREFRONT ||
            (n.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
              n.nativeFlowName != null &&
              e.includes(n.nativeFlowName))
        : n.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
          ? n.nativeFlowName != null && e.includes(n.nativeFlowName)
          : n.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL
            ? n.subtype === "event_edit_decrypted"
            : s.includes(n.type);
    }
    function c(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      if (
        o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebMsgGetters").getSender(t),
        ) ||
        (t.senderObj != null &&
          o("WAWebFrontendContactGetters").getIsMyContact(t.senderObj))
      )
        return !0;
      var n = o("WAWebFrontendMsgGetters").getChat(t);
      if (
        o("WAWebChatGetters").getIsGroup(n) ||
        o("WAWebChatGetters").getIsNewsletter(n)
      )
        return n.isTrusted();
      if (
        o("WAWebMsgGetters").getIsPSA(t) ||
        o("WAWebMsgGetters").getIsCAPISupport(t) ||
        t.isFromTemplate
      )
        return !0;
      var r = o("WAWebChatGetters").getIsGroup(n) ? t.senderObj : n.contact;
      return (r == null ? void 0 : r.verifiedLevel) ===
        o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
        ? !0
        : n.notSpam;
    }
    function d(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = o("WAWebFrontendMsgGetters").getChat(n).groupMetadata) == null
          ? void 0
          : t.participants.iAmMember()) === !0
      );
    }
    ((l.hasSymbol = u), (l.isTrusted = c), (l.iAmGroupParticipant = d));
  },
  98,
);
