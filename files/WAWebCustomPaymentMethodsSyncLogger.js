__d(
  "WAWebCustomPaymentMethodsSyncLogger",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumCustomPaymentMethodsSyncStatus",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "custom_payment_methods_sync",
      c = "BR",
      d = Object.freeze({
        APPLY_REMOVE: (s = o("WAWebWamEnumPaymentActionTargets"))
          .PAYMENT_ACTION_TARGETS.SYNCD_APPLY_REMOVE,
        APPLY_STORE: s.PAYMENT_ACTION_TARGETS.SYNCD_APPLY_STORE,
        SEND_REMOVE: s.PAYMENT_ACTION_TARGETS.SYNCD_SEND_REMOVE,
        SEND_STORE: s.PAYMENT_ACTION_TARGETS.SYNCD_SEND_STORE,
      }),
      m = n("$InternalEnum")({
        MALFORMED_MUTATION: "malformed_mutation",
        TRANSPORT_FLUSH_FAILED: "transport_flush_failed",
        UNSUPPORTED_OPERATION: "unsupported_operation",
      });
    function p(t, n, r) {
      var a = {
        actionTarget: t,
        customPaymentMethodsSyncStatus: n,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.API,
        paymentsCountryCode: c,
        screen: u,
      };
      r != null && (a.paymentsErrorCode = r);
      var i = new (o(
        "WAWebPaymentsUserActionWamEvent",
      ).PaymentsUserActionWamEvent)(a);
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "CustomPaymentMethodsSync Log",
          ])),
      ),
        i.commit());
    }
    ((l.SYNC_ACTION_TARGETS = d),
      (l.SYNC_STATUS = o(
        "WAWebWamEnumCustomPaymentMethodsSyncStatus",
      ).CUSTOM_PAYMENT_METHODS_SYNC_STATUS),
      (l.SyncErrorCode = m),
      (l.logCustomPaymentMethodsSyncEvent = p));
  },
  98,
);
