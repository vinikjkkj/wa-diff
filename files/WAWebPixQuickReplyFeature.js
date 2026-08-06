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
    var e = 10;
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_br_pix_quick_reply_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_payments_pix_groups_enabled",
      );
    }
    function c(e) {
      return (
        o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() &&
        p(e.groupMetadata) &&
        u()
      );
    }
    function d(e) {
      return s() && c(e);
    }
    function m(t) {
      var n = t.groupMetadata;
      return n == null ||
        n.participants.length === 0 ||
        n.participants.length > e
        ? !1
        : p(n);
    }
    function p(e) {
      if (e == null) return !1;
      var t = e.participants;
      return t.every(function (e) {
        return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
          e.id,
          o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
        );
      });
    }
    function _(e) {
      if (!s() || e == null) return !1;
      var t = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
        e.id,
      );
      switch (t) {
        case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL:
          return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            e.id,
            o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
          );
        case o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP:
          return c(e);
        default:
          return !1;
      }
    }
    ((l.showPixQuickReplyInAttachmentTrayForGroups = d),
      (l.isEligiblePixGroupChat = m),
      (l.shouldShowPixQuickReplyForChat = _));
  },
  98,
);
