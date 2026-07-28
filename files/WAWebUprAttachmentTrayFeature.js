__d(
  "WAWebUprAttachmentTrayFeature",
  [
    "WAWebBizFrontendGatingUtils",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentMethodTypeRegistry",
    "WAWebPaymentsChatUtils",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t.uprAttachment == null ||
        !o("WAWebConnModel").Conn.isSMB ||
        !o("WAWebBizFrontendGatingUtils").isUprAttachmentTrayEnabled(
          t.country,
        ) ||
        !s(e) ||
        !o("WAWebBizFrontendGatingUtils").isUprSendEnabledForCountry(
          t.country,
        ) ||
        o("WAWebUserPrefsCustomPaymentMethods").getUprStoredKeys(t.type)
          .length === 0 ||
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id) !==
          o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? !1
        : o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            e.id,
            t.country,
          );
    }
    function s(e) {
      var t = e.contact;
      return (
        t != null && !o("WAWebContactGetters").getIsMe(t) && !t.isEnterprise
      );
    }
    function u(t) {
      for (var n of o(
        "WAWebPaymentMethodTypeRegistry",
      ).PaymentMethodTypeRegistry.values())
        if (n.uprAttachment != null && e(t, n)) return n;
      return null;
    }
    ((l.shouldShowUprMethodInAttachmentTray = e),
      (l.resolveUprMethodForChat = u));
  },
  98,
);
