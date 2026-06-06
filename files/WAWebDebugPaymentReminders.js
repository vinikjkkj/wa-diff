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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, a, i, l, c, d, m, p) {
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
      var f = o("WAWebUserPrefsMeUser").getMeUser(),
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
            id: await r("WAWebMsgKey").newId(),
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
        (await o("WAWebSendMsgChatAction").addAndSendMsgToChat(_, y)[1],
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
    c.doc =
      "Receive a payment reminder message with custom parameters in the active chat";
    async function d() {
      var e = Date.now() + 864e5;
      await c(
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
    }
    ((d.doc = "Receive a payment due example message in the active chat"),
      (d.paramsToExecute = []));
    async function m() {
      var e = Date.now() - 2592e5;
      await c(
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
    }
    ((m.doc = "Receive a payment overdue example message in the active chat"),
      (m.paramsToExecute = []));
    var p = {
      receivePaymentReminderMessage: c,
      receivePaymentDueExample: d,
      receivePaymentOverdueExample: m,
    };
    l.default = p;
  },
  98,
);
