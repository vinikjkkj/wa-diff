__d(
  "WAWebInAppSignupConfirmation",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        var t,
          n,
          r = JSON.parse(e);
        return r.signup_id == null || r.subscription_timestamp == null
          ? null
          : {
              signupId: r.signup_id,
              subscriptionTimestamp: String(r.subscription_timestamp),
              promoCode: (t = r.promo_code) != null ? t : null,
              websiteUrl: (n = r.website_url) != null ? n : null,
            };
      } catch (e) {
        return null;
      }
    }
    function s(t) {
      var n, a;
      if (
        t.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP ||
        t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !((n = t.interactivePayload) != null && n.buttons)
      )
        return null;
      var i =
        (a = t.interactivePayload.buttons[0]) == null
          ? void 0
          : a.buttonParamsJson;
      return i == null ? null : e(i);
    }
    function u(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e),
          n = t.promo_code;
        if (!r("isStringNullOrEmpty")(n)) return n;
      } catch (e) {
        return null;
      }
      return null;
    }
    function c(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e),
          n = t.website_url;
        if (!r("isStringNullOrEmpty")(n)) return n;
      } catch (e) {
        return null;
      }
      return null;
    }
    function d(e, t) {
      if (t == null || t === "" || e.includes("*" + t + "*")) return e;
      var n = e.indexOf(t);
      return n < 0
        ? e
        : e.slice(0, n) + ("*" + t + "*") + e.slice(n + t.length);
    }
    ((l.getInAppSignupConfirmationInfo = s),
      (l.parseInAppSignupPromoCode = u),
      (l.parseInAppSignupWebsiteUrl = c),
      (l.applyBoldToPromoCode = d));
  },
  98,
);
