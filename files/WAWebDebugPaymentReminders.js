__d(
  "WAWebDebugPaymentReminders",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUserPrefsMeUser",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = t.accountCard,
        a = t.amountDue,
        i = t.amountDueLabel,
        l = t.dueDate,
        c = t.dueDateLabel,
        m = t.isOverdue,
        p = t.payNowButtonText,
        _ = t.title,
        f = t.url;
      r("vulture")("iqZTfO_pEJWlmMwTXSiQxgTFOHk=");
      var g = window.chat;
      if (!g) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[receivePaymentReminderMessage] no active chat",
            ])),
        );
        return;
      }
      var h = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        y = d({
          accountCard: n,
          amountDue: a,
          amountDueLabel: i,
          dueDate: l,
          dueDateLabel: c,
          isOverdue: m,
          payNowButtonText: p,
          title: _,
          url: f,
        }),
        C = JSON.stringify(y),
        b = {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          ack: o("WAWebAck").ACK.READ,
          from: g.id,
          id: new (r("WAWebMsgKey"))({
            fromMe: !1,
            remote: g.id,
            id: await r("WAWebMsgKey").newId(),
            participant: void 0,
          }),
          local: !1,
          isNewMsg: !0,
          t: o("WATimeUtils").unixTime(),
          to: h,
          caption: m
            ? "Your payment is overdue! Please settle your balance."
            : "You have a payment due. Please make your payment on time.",
          footer: "If you've paid, please ignore.",
          nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
            .PAYMENT_REMINDER,
          interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
          nativeFlowInteractiveMsg: !0,
          interactivePayload: {
            buttons: [{ name: "payment_reminder", buttonParamsJson: C }],
            messageVersion: 1,
          },
        };
      try {
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(g, b)[1],
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[receivePaymentReminderMessage] reminder received \u2713",
              ])),
          ));
      } catch (e) {
        throw (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "receivePaymentReminderMessage: error ",
                "",
              ])),
            e,
          ),
          e
        );
      }
    }
    function d(e) {
      var t = e.accountCard,
        n = e.amountDue,
        r = e.amountDueLabel,
        o = e.dueDate,
        a = e.dueDateLabel,
        i = e.isOverdue,
        l = e.payNowButtonText,
        s = e.title,
        u = e.url,
        c = { is_overdue: i };
      return (
        t != null && (c.account_card = t),
        n != null && (c.amount_due = n),
        r != null && (c.amount_due_label = r),
        o != null && (c.due_date = o),
        a != null && (c.due_date_label = a),
        l != null && (c.pay_now_button_text = l),
        s != null && (c.title = s),
        u != null && (c.url = u),
        c
      );
    }
    c.doc =
      "Receive a payment reminder message with custom parameters in the active chat";
    async function m() {
      (r("vulture")("0Z8PqgHOzuI-5qMrzf-hak8lgKw="),
        await c({
          accountCard: "Electric Company \xB7 Account 4242",
          amountDue: "$123.45",
          amountDueLabel: "Amount due",
          dueDate: "November 30, 2026",
          dueDateLabel: "Due date",
          isOverdue: !1,
          payNowButtonText: "Pay electricity bill",
          title: "Electricity bill due",
          url: "https://example.com/pay/12345",
        }));
    }
    ((m.doc = "Receive a payment due example message in the active chat"),
      (m.paramsToExecute = []));
    async function p() {
      (r("vulture")("yl7dkwQ2lVbh1npRBvKO-z2TBxE="),
        await c({
          accountCard: "Credit Card Co \xB7 Card 1234",
          amountDue: "$250.00",
          amountDueLabel: "Balance due",
          dueDate: "November 20, 2026",
          dueDateLabel: "Due date",
          isOverdue: !0,
          payNowButtonText: "Pay card balance",
          title: "Credit card payment overdue",
          url: "https://example.com/pay/67890",
        }));
    }
    ((p.doc = "Receive a payment overdue example message in the active chat"),
      (p.paramsToExecute = []));
    var _ = {
      receivePaymentReminderMessage: c,
      receivePaymentDueExample: m,
      receivePaymentOverdueExample: p,
    };
    l.default = _;
  },
  98,
);
