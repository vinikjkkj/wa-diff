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
        "instant_image",
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
        "music",
        "payment",
        "poll_creation",
        "poll_result_snapshot",
        "groups_v4_invite",
        "newsletter_admin_invite",
        "product",
        "order",
        "event_creation",
        "sharable_event_invite",
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
      return m(e, function (e) {
        return e.isTrusted();
      });
    }
    function d(e) {
      return m(e, function (e) {
        return e.isTrustedForAutoDownload();
      });
    }
    function m(e, t) {
      var n = o("WAWebStateUtils").unproxy(e);
      if (
        o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebMsgGetters").getSender(n),
        ) ||
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
    function p(e) {
      var t = e.chatContactVerifiedLevel,
        n = e.chatNotSpam,
        r = e.chatTrusted,
        a = e.isCAPISupport,
        i = e.isChatGroup,
        l = e.isChatNewsletter,
        s = e.isFromTemplate,
        u = e.isPSA,
        c = e.isSenderMe,
        d = e.isSenderMyContact;
      return c || d || l
        ? !0
        : i
          ? r === !0
          : u ||
              a ||
              s === !0 ||
              t === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
            ? !0
            : n === !0;
    }
    function _(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (
        ((t = o("WAWebFrontendMsgGetters").getChat(n).groupMetadata) == null
          ? void 0
          : t.participants.iAmMember()) === !0
      );
    }
    ((l.hasSymbol = u),
      (l.isTrusted = c),
      (l.isTrustedForAutoDownload = d),
      (l.isTrustedFor = p),
      (l.iAmGroupParticipant = _));
  },
  98,
);
