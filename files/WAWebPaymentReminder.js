__d(
  "WAWebPaymentReminder",
  [
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "payment_reminder",
      s = [
        "url",
        "pay_now_button_text",
        "due_date",
        "due_date_label",
        "amount_due",
        "amount_due_label",
        "title",
        "account_card",
      ];
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "utility_payment_reminder_m1_enabled",
      );
    }
    function c(e, t) {
      return Object.getOwnPropertyDescriptor(e, t) != null;
    }
    function d(e, t) {
      var n = e[t];
      return typeof n == "string" && n.trim() !== "" ? n : null;
    }
    function m(e) {
      try {
        var t = JSON.parse(e);
        if (t == null || typeof t != "object" || Array.isArray(t)) return null;
        var n = t;
        return s.some(function (e) {
          return c(n, e) && n[e] != null && typeof n[e] != "string";
        }) ||
          (c(n, "is_overdue") && typeof n.is_overdue != "boolean")
          ? null
          : {
              url: d(n, "url"),
              payNowButtonText: d(n, "pay_now_button_text"),
              dueDate: d(n, "due_date"),
              dueDateLabel: d(n, "due_date_label"),
              amountDue: d(n, "amount_due"),
              amountDueLabel: d(n, "amount_due_label"),
              isOverdue: n.is_overdue === !0,
              title: d(n, "title"),
              accountCard: d(n, "account_card"),
            };
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? _({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowButtons: null,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          })
        : _({
            interactivePayload: null,
            interactiveType: null,
            nativeFlowButtons: e.nativeFlowButtons,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function _(t) {
      var n = t.interactivePayload,
        a = t.interactiveType,
        i = t.nativeFlowButtons,
        l = t.nativeFlowName,
        s = t.type;
      if (l !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER)
        return null;
      var u;
      if (
        s === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        a === r("WAWebInteractiveMessageType").NATIVE_FLOW
      ) {
        var c;
        u =
          n == null ||
          (c = n.buttons) == null ||
          (c = c.find(function (t) {
            return t.name === e;
          })) == null
            ? void 0
            : c.buttonParamsJson;
      } else if (s === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
        var d;
        u =
          i == null ||
          (d = i.find(function (t) {
            var n;
            return ((n = t.nativeFlowInfo) == null ? void 0 : n.name) === e;
          })) == null ||
          (d = d.nativeFlowInfo) == null
            ? void 0
            : d.paramsJson;
      }
      return u == null ? null : m(u);
    }
    function f(t) {
      if ((t == null ? void 0 : t.name) !== e) return null;
      var n = t.buttonParamsJson;
      return n == null ? null : m(n);
    }
    function g(e) {
      try {
        var t,
          n,
          r,
          o = JSON.parse(e);
        return o.cta_action_url == null ||
          o.due_date == null ||
          o.amount_due == null ||
          o.amount_due_currency == null
          ? null
          : {
              url: o.cta_action_url,
              dueDateMs: parseInt(o.due_date, 10) * 1e3,
              amountDue: {
                value: o.amount_due.value,
                offset: o.amount_due.offset,
              },
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
    function h(e) {
      var t,
        n = e.interactivePayload,
        a = e.interactiveType,
        i = e.nativeFlowName,
        l = e.type;
      if (
        i !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER ||
        l !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        a !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        !(n != null && n.buttons)
      )
        return null;
      var s = (t = n.buttons[0]) == null ? void 0 : t.buttonParamsJson;
      return s == null ? null : g(s);
    }
    function y(e) {
      if (
        (e == null ? void 0 : e.name) !==
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
      )
        return null;
      var t = e.buttonParamsJson;
      return t == null ? null : g(t);
    }
    ((l.isPaymentReminderEnabled = u),
      (l.getSmartHydratedPaymentReminderInfo = p),
      (l.getSmartHydratedPaymentReminderInfoFor = _),
      (l.parseSmartHydratedPaymentReminderButton = f),
      (l.getPaymentReminderInfoFor = h),
      (l.parsePaymentReminderButton = y));
  },
  98,
);
