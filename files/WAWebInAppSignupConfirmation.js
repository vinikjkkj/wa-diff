__d(
  "WAWebInAppSignupConfirmation",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        var t,
          n = JSON.parse(e);
        return n.signup_id == null || n.subscription_timestamp == null
          ? null
          : {
              signupId: n.signup_id,
              subscriptionTimestamp: String(n.subscription_timestamp),
              promoCode: (t = n.promo_code) != null ? t : null,
            };
      } catch (e) {
        return null;
      }
    }
    var s = function (n) {
      var t, a;
      if (
        n.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP ||
        n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        n.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !((t = n.interactivePayload) != null && t.buttons)
      )
        return null;
      var i =
        (a = n.interactivePayload.buttons[0]) == null
          ? void 0
          : a.buttonParamsJson;
      return i == null ? null : e(i);
    };
    function u(e, t) {
      if (t == null || t === "" || e.includes("*" + t + "*")) return e;
      var n = e.indexOf(t);
      return n < 0
        ? e
        : e.slice(0, n) + ("*" + t + "*") + e.slice(n + t.length);
    }
    ((l.getInAppSignupConfirmationInfo = s), (l.applyBoldToPromoCode = u));
  },
  98,
);
