__d(
  "WAWebUprAttachmentTrayFeature",
  [
    "WAWebBizFrontendGatingUtils",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s({ chatId: e.id, contact: e.contact }, t);
    }
    function s(e, t) {
      var n = e.chatId,
        r = e.contact;
      return !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ||
        !o("WAWebBizFrontendGatingUtils").isUprAttachmentTrayEnabled(t) ||
        !u(r) ||
        !o("WAWebBizFrontendGatingUtils").isUprSendEnabledForCountry(t) ||
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(n) !==
          o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? !1
        : o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(n, t);
    }
    function u(e) {
      return (
        e != null && !o("WAWebContactGetters").getIsMe(e) && !e.isEnterprise
      );
    }
    function c(e) {
      return d({ chatId: e.id, contact: e.contact });
    }
    function d(e) {
      var t = new Map();
      for (var n of o(
        "WAWebUserPrefsCustomPaymentMethods",
      ).getAllUprStoredKeys()) {
        var r,
          a = (r = t.get(n.country)) != null ? r : [];
        (a.push(n), t.set(n.country, a));
      }
      for (var i of t) {
        var l = i[0],
          u = i[1];
        if (s(e, l)) return { country: l, currency: u[0].currency, keys: u };
      }
      return null;
    }
    ((l.isChatEligibleForUprCountry = e),
      (l.resolveUprMethodForChat = c),
      (l.resolveUprMethodForChatFor = d));
  },
  98,
);
