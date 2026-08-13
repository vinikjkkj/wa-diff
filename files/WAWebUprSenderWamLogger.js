__d(
  "WAWebUprSenderWamLogger",
  [
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "chat",
      s = "upr_attachment_tray";
    function u(e, t) {
      new (o("WAWebPaymentsUserActionWamEvent").PaymentsUserActionWamEvent)(
        babelHelpers.extends({}, t, {
          paymentsCountryCode: e.toUpperCase(),
          queryParams: JSON.stringify({ platform: "upr" }),
        }),
      ).commit();
    }
    function c(t) {
      u(t, {
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        referral: e,
        screen: s,
      });
    }
    function d(t) {
      u(t, {
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.PAYMENT_KEY_BUTTON,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        referral: e,
        screen: s,
      });
    }
    ((l.logUprAttachmentTrayView = c), (l.logUprAttachmentTrayClick = d));
  },
  98,
);
