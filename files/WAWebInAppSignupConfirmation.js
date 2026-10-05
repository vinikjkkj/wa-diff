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
    function s(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function u(t) {
      var n,
        a = t.interactivePayload,
        i = t.interactiveType,
        l = t.nativeFlowName,
        s = t.type;
      if (
        l !== r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP ||
        s !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        i !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !(a != null && a.buttons)
      )
        return null;
      var u = (n = a.buttons[0]) == null ? void 0 : n.buttonParamsJson;
      return u == null ? null : e(u);
    }
    function c(e) {
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
    function d(e) {
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
    function m(e, t) {
      if (t == null || t === "" || e.includes("*" + t + "*")) return e;
      var n = e.indexOf(t);
      return n < 0
        ? e
        : e.slice(0, n) + ("*" + t + "*") + e.slice(n + t.length);
    }
    ((l.getInAppSignupConfirmationInfo = s),
      (l.getInAppSignupConfirmationInfoFor = u),
      (l.parseInAppSignupPromoCode = c),
      (l.parseInAppSignupWebsiteUrl = d),
      (l.applyBoldToPromoCode = m));
  },
  98,
);
