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
        o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() && f(e) && u()
      );
    }
    function d(e) {
      return m(e.groupMetadata);
    }
    function m(e) {
      return s() && c(e);
    }
    function p(e) {
      return _(e.groupMetadata);
    }
    function _(t) {
      return t == null ||
        t.participants.length === 0 ||
        t.participants.length > e
        ? !1
        : f(t);
    }
    function f(e) {
      if (e == null) return !1;
      var t = e.participants;
      return t.every(function (e) {
        return o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
          e.id,
          o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
        );
      });
    }
    function g(e) {
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
          return c(e.groupMetadata);
        default:
          return !1;
      }
    }
    ((l.showPixQuickReplyInAttachmentTrayForGroups = d),
      (l.showPixQuickReplyInAttachmentTrayForGroupMetadata = m),
      (l.isEligiblePixGroupChat = p),
      (l.isEligiblePixGroupMetadata = _),
      (l.shouldShowPixQuickReplyForChat = g));
  },
  98,
);
