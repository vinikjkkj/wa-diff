__d(
  "WAWebBrazilPaymentStateKeys",
  ["WAWebInteractiveMessagesNativeFlowName"],
  function (t, n, r, o, a, i, l) {
    var e = "review_and_pay",
      s = new Set([
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        e,
      ]),
      u = "br_payment_state",
      c = "br_receipt_and_state_enabled",
      d = "br_app_switch_receipt_and_state_enabled",
      m = "br_receipt_and_state_bubble_version",
      p = 1;
    ((l.PIX_CODE_REQUEST_BUTTON_NAME = e),
      (l.PAYMENT_REQUEST_BUTTON_NAMES = s),
      (l.BRAZIL_PAYMENT_STATE_KEY = u),
      (l.RECEIPT_AND_STATE_STAMP_KEY = c),
      (l.APP_SWITCH_RECEIPT_AND_STATE_STAMP_KEY = d),
      (l.BUBBLE_VERSION_KEY = m),
      (l.BUBBLE_VERSION_WITHOUT_ADD_RECEIPT = p));
  },
  98,
);
