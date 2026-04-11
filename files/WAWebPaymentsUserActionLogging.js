__d(
  "WAWebPaymentsUserActionLogging",
  [
    "WALogger",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumPaymentActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "BR";
    function c(t) {
      var n = {
          actionTarget: t.actionTarget,
          paymentActionType: o("WAWebWamEnumPaymentActionTypes")
            .PAYMENT_ACTION_TYPES.CLICK,
          paymentsCountryCode: u,
          queryParams: JSON.stringify({ payment_method: "pix" }),
          screen: t.screen,
        },
        r = new (o(
          "WAWebPaymentsUserActionWamEvent",
        ).PaymentsUserActionWamEvent)(n);
      (o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["Payments Log"])),
      ),
        r.commit());
    }
    function d(e) {
      var t,
        n = {
          actionTarget: e.actionTarget,
          paymentActionType: e.paymentActionType,
          paymentsCountryCode: u,
          paymentsEventId: e.paymentsEventId,
          queryParams: e.queryParams,
          referral: e.referral,
          screen: (t = e.screen) != null ? t : "payment_home",
        },
        r = new (o(
          "WAWebPaymentsUserActionWamEvent",
        ).PaymentsUserActionWamEvent)(n);
      (o("WALogger").LOG(
        s || (s = babelHelpers.taggedTemplateLiteralLoose(["Payments Log"])),
      ),
        r.commit());
    }
    ((l.logAddOrUpdatePixEntryPointEvent = c), (l.logPaymentsHomeEvent = d));
  },
  98,
);
