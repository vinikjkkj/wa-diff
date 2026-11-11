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
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.accountCard,
            a = t.amountDue,
            i = t.amountDueLabel,
            l = t.dueDate,
            c = t.dueDateLabel,
            d = t.isOverdue,
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
          var h = o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE(),
            y = m({
              accountCard: n,
              amountDue: a,
              amountDueLabel: i,
              dueDate: l,
              dueDateLabel: c,
              isOverdue: d,
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
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              local: !1,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: h,
              caption: d
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
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(g, b)[1],
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("vulture")("0Z8PqgHOzuI-5qMrzf-hak8lgKw="),
            yield c({
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
        })),
        _.apply(this, arguments)
      );
    }
    ((p.doc = "Receive a payment due example message in the active chat"),
      (p.paramsToExecute = []));
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("vulture")("yl7dkwQ2lVbh1npRBvKO-z2TBxE="),
            yield c({
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
        })),
        g.apply(this, arguments)
      );
    }
    ((f.doc = "Receive a payment overdue example message in the active chat"),
      (f.paramsToExecute = []));
    var h = {
      receivePaymentReminderMessage: c,
      receivePaymentDueExample: p,
      receivePaymentOverdueExample: f,
    };
    l.default = h;
  },
  98,
);
