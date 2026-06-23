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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.accountName,
            a = t.amountOffset,
            i = t.amountValue,
            l = t.cardNumber,
            c = t.currency,
            d = t.daysOverdue,
            m = t.dueDateMs,
            p = t.isOverdue,
            _ = t.url,
            f = window.chat;
          if (!f) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[receivePaymentReminderMessage] no active chat",
                ])),
            );
            return;
          }
          var g = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            h = {
              cta_action_url: _,
              due_date: String(Math.floor(m / 1e3)),
              amount_due: { value: i, offset: a },
              amount_due_currency: c,
              is_overdue: p,
            };
          (d != null && (h.days_overdue = d),
            n != null && (h.account_name = n),
            l != null && (h.card_number_last_4_digits = l));
          var y = JSON.stringify(h),
            C = {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              ack: o("WAWebAck").ACK.READ,
              from: f.id,
              id: new (r("WAWebMsgKey"))({
                fromMe: !1,
                remote: f.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              local: !1,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: g,
              caption: p
                ? "Your payment is overdue! Please settle your balance."
                : "You have a payment due. Please make your payment on time.",
              footer: "If you've paid, please ignore.",
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .PAYMENT_REMINDER,
              interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
              nativeFlowInteractiveMsg: !0,
              interactivePayload: {
                buttons: [{ name: "payment_reminder", buttonParamsJson: y }],
                messageVersion: 1,
              },
            };
          try {
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(f, C)[1],
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
    c.doc =
      "Receive a payment reminder message with custom parameters in the active chat";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Date.now() + 864e5;
          yield c({
            accountName: "Electric Company",
            amountOffset: 100,
            amountValue: 12345,
            cardNumber: "4242",
            currency: "USD",
            daysOverdue: null,
            dueDateMs: e,
            isOverdue: !1,
            url: "https://example.com/pay/12345",
          });
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
          yield c({
            accountName: "Credit Card Co",
            amountOffset: 100,
            amountValue: 25e3,
            cardNumber: "1234",
            currency: "USD",
            daysOverdue: 3,
            dueDateMs: e,
            isOverdue: !0,
            url: "https://example.com/pay/67890",
          });
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
