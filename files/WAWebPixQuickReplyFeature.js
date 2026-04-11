__d(
  "WAWebPixQuickReplyFeature",
  [
    "WAWebABProps",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebPaymentsConstants",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_br_pix_quick_reply_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_pix_groups_enabled",
      );
    }
    function u(e) {
      return (
        o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() &&
        d(e.groupMetadata) &&
        s()
      );
    }
    function c(t) {
      return e() && u(t);
    }
    function d(e) {
      if (e == null) return !1;
      var t = e.participants;
      return t.every(function (e) {
        return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
          e.id,
          o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
        );
      });
    }
    function m(t) {
      if (!e() || t == null) return !1;
      var n = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
        t.id,
      );
      switch (n) {
        case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL:
          return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            t.id,
            o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
          );
        case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP:
          return u(t);
        default:
          return !1;
      }
    }
    ((l.showPixQuickReplyInAttachmentTrayForGroups = c),
      (l.shouldShowPixQuickReplyForChat = m));
  },
  98,
);
