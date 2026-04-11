__d(
  "WAWebPixAttachmentTrayFeature",
  [
    "WAWebABProps",
    "WAWebAddEditPixFeature",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebPaymentsConstants",
    "WAWebPixFeature",
    "WAWebPixQuickReplyFeature",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_br_pix_web_attachment_tray",
      );
    }
    function s(t) {
      if (
        !o("WAWebConnModel").Conn.isSMB ||
        o("WAWebContactGetters").getIsMe(t.contact) ||
        t.contact.isEnterprise ||
        !o("WAWebPixFeature").isPixEnabled() ||
        !o("WAWebAddEditPixFeature").isAddEditPixEnabled() ||
        !e()
      )
        return !1;
      var n = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
        t.id,
      );
      return n === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            t.id,
            o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
          )
        : n === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP
          ? o(
              "WAWebPixQuickReplyFeature",
            ).showPixQuickReplyInAttachmentTrayForGroups(t)
          : !1;
    }
    l.shouldShowPixInAttachmentTray = s;
  },
  98,
);
