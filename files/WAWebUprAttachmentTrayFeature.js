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
      return !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ||
        !o("WAWebBizFrontendGatingUtils").isUprAttachmentTrayEnabled(t) ||
        !s(e) ||
        !o("WAWebBizFrontendGatingUtils").isUprSendEnabledForCountry(t) ||
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id) !==
          o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? !1
        : o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(e.id, t);
    }
    function s(e) {
      var t = e.contact;
      return (
        t != null && !o("WAWebContactGetters").getIsMe(t) && !t.isEnterprise
      );
    }
    function u(t) {
      var n = new Map();
      for (var r of o(
        "WAWebUserPrefsCustomPaymentMethods",
      ).getAllUprStoredKeys()) {
        var a,
          i = (a = n.get(r.country)) != null ? a : [];
        (i.push(r), n.set(r.country, i));
      }
      for (var l of n) {
        var s = l[0],
          u = l[1];
        if (e(t, s)) return { country: s, currency: u[0].currency, keys: u };
      }
      return null;
    }
    ((l.isChatEligibleForUprCountry = e), (l.resolveUprMethodForChat = u));
  },
  98,
);
