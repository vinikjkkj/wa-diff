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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o, a, i, l, s) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, c, d, m, p) {
            var _ = window.chat;
            if (!_) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[receivePaymentReminderMessage] no active chat",
                  ])),
              );
              return;
            }
            var f = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              g = {
                cta_action_url: t,
                due_date: String(Math.floor(n / 1e3)),
                amount_due: { value: a, offset: i },
                amount_due_currency: l,
                is_overdue: c,
              };
            (d != null && (g.days_overdue = d),
              m != null && (g.account_name = m),
              p != null && (g.card_number_last_4_digits = p));
            var h = JSON.stringify(g),
              y = {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                ack: o("WAWebAck").ACK.READ,
                from: _.id,
                id: new (r("WAWebMsgKey"))({
                  fromMe: !1,
                  remote: _.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                }),
                local: !1,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: f,
                caption: c
                  ? "Your payment is overdue! Please settle your balance."
                  : "You have a payment due. Please make your payment on time.",
                footer: "If you've paid, please ignore.",
                nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                  .PAYMENT_REMINDER,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowInteractiveMsg: !0,
                interactivePayload: {
                  buttons: [{ name: "payment_reminder", buttonParamsJson: h }],
                  messageVersion: 1,
                },
              };
            try {
              (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(_, y)[1],
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
          },
        )),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Receive a payment reminder message with custom parameters in the active chat";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now() + 864e5;
          yield c(
            "https://example.com/pay/12345",
            e,
            12345,
            100,
            "USD",
            !1,
            null,
            "Electric Company",
            "4242",
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((m.doc = "Receive a payment due example message in the active chat"),
      (m.paramsToExecute = []));
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now() - 2592e5;
          yield c(
            "https://example.com/pay/67890",
            e,
            25e3,
            100,
            "USD",
            !0,
            3,
            "Credit Card Co",
            "1234",
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((_.doc = "Receive a payment overdue example message in the active chat"),
      (_.paramsToExecute = []));
    var g = {
      receivePaymentReminderMessage: c,
      receivePaymentDueExample: m,
      receivePaymentOverdueExample: _,
    };
    l.default = g;
  },
  98,
);
