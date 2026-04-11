__d(
  "WAWebPaymentReminder",
  [
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
      return o("WAWebABProps").getABPropConfigValue(
        "utility_payment_reminder_m1_enabled",
      );
    };
    function s(e) {
      try {
        var t,
          n,
          r,
          o = JSON.parse(e);
        if (
          o.cta_action_url == null ||
          o.due_date == null ||
          o.amount_due == null ||
          o.amount_due_currency == null
        )
          return null;
        var a = parseInt(o.due_date, 10) * 1e3;
        return {
          url: o.cta_action_url,
          dueDateMs: a,
          amountDue: { value: o.amount_due.value, offset: o.amount_due.offset },
          amountDueCurrency: o.amount_due_currency,
          isOverdue: o.is_overdue === !0,
          daysOverdue: (t = o.days_overdue) != null ? t : null,
          accountName: (n = o.account_name) != null ? n : null,
          cardNumber: (r = o.card_number_last_4_digits) != null ? r : null,
        };
      } catch (e) {
        return null;
      }
    }
    var u = function (t) {
        var e, n;
        if (
          t.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER ||
          t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
          !((e = t.interactivePayload) != null && e.buttons)
        )
          return null;
        var a =
          (n = t.interactivePayload.buttons[0]) == null
            ? void 0
            : n.buttonParamsJson;
        return a == null ? null : s(a);
      },
      c = function (t) {
        if (
          (t == null ? void 0 : t.name) !==
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
        )
          return null;
        var e = t.buttonParamsJson;
        return e == null ? null : s(e);
      };
    ((l.isPaymentReminderEnabled = e),
      (l.getPaymentReminderInfo = u),
      (l.parsePaymentReminderButton = c));
  },
  98,
);
