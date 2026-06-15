__d(
  "WAWebPaymentReminder",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(t) {
      var n, a;
      if (
        t.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER ||
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
    function u(t) {
      if (
        (t == null ? void 0 : t.name) !==
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
      )
        return null;
      var n = t.buttonParamsJson;
      return n == null ? null : e(n);
    }
    ((l.getPaymentReminderInfo = s), (l.parsePaymentReminderButton = u));
  },
  98,
);
