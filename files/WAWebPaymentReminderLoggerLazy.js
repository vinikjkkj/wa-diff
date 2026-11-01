__d(
  "WAWebPaymentReminderLoggerLazy",
  [
    "$InternalEnum",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebMsgType",
    "WAWebPaymentReminder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        MESSAGE_RECEIVE: "message_receive",
        MESSAGE_HEADER_CLICK: "message_header_click",
        MESSAGE_CTA_PAY_NOW_CLICK: "message_cta_pay_now_click",
      });
    function u(t, n) {
      var a = t.safe();
      (a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        a.type !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) ||
        (o("WAWebPaymentReminder").getSmartHydratedPaymentReminderInfo(a) !=
          null &&
          o("WAWebABProps").getABPropConfigValue(
            "utility_payment_reminder_m1_logging_enabled",
          ) &&
          r("JSResourceForInteraction")("WAWebPaymentReminderLogger")
            .__setRef("WAWebPaymentReminderLoggerLazy")
            .load()
            .then(function (e) {
              e.logPaymentReminderInteraction(t, n);
            })
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[payment-reminder] lazy logger load failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("payment-reminder-logger-load-failed");
            }));
    }
    ((l.PaymentReminderActionType = s), (l.logPaymentReminderInteraction = u));
  },
  98,
);
