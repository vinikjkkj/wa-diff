__d(
  "WAWebConsumerPaymentsHomeLogger",
  [
    "WALogger",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "BR",
      d = "P2P",
      m = "chat_attachment";
    function p(e, t) {
      k("payment_home", void 0, { has_pix_key: e }, void 0, t);
    }
    function _() {
      I(
        "settings",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_ROW,
      );
    }
    function f() {
      k(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PASSKEY_BLOCKED_EDIT_DELETE_PIX,
      );
    }
    function g() {
      I("payment_home", void 0, { transactions_see_all: !0, flow_type: d });
    }
    function h(e) {
      k("payment_transactions", void 0, { num_payments: e, flow_type: d });
    }
    function y(e) {
      k("payment_transactions", void 0, { flow_type: d, date_field: e });
    }
    function C(e) {
      I("payment_transactions", e, { flow_type: d });
    }
    var b =
      ((e = {}),
      (e[(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER] =
        "other"),
      (e[u.MESSAGE_CHAT_TYPE.INDIVIDUAL] = "individual"),
      (e[u.MESSAGE_CHAT_TYPE.GROUP] = "group"),
      (e[u.MESSAGE_CHAT_TYPE.STATUS] = "status"),
      (e[u.MESSAGE_CHAT_TYPE.BROADCAST] = "broadcast"),
      (e[u.MESSAGE_CHAT_TYPE.CHANNEL] = "channel"),
      e);
    function v(e) {
      var t;
      return (t =
        b[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)]) !=
        null
        ? t
        : "other";
    }
    function S(e) {
      k("send_pix_key", void 0, { chat_type: e }, m);
    }
    function R(e, t) {
      k("send_pix_key", void 0, { chat_type: e }, m, t);
    }
    function L(e) {
      I(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .SEND_BUTTON,
        { chat_type: e },
        m,
      );
    }
    function E(e) {
      I(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .BACK_BUTTON,
        { chat_type: e },
        m,
      );
    }
    function k(e, t, n, r, a) {
      D({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: c,
        previousScreenName: a,
        queryParams: T(n),
        referral: r,
        screen: e,
      });
    }
    function I(e, t, n, r) {
      D({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsCountryCode: c,
        queryParams: T(n),
        referral: r,
        screen: e,
      });
    }
    function T(e) {
      return e != null ? JSON.stringify(e) : void 0;
    }
    function D(e) {
      var t = new (o(
        "WAWebPaymentsUserActionWamEvent",
      ).PaymentsUserActionWamEvent)(e);
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "ConsumerPaymentsHome Log",
          ])),
      ),
        t.commit());
    }
    ((l.logPaymentsHomeView = p),
      (l.logPaymentsRowClick = _),
      (l.logPasskeyBlockedEditDeletePixView = f),
      (l.logSeeAllTransactionsClick = g),
      (l.logTransactionsListView = h),
      (l.logTransactionsDateFieldView = y),
      (l.logTransactionsTabClick = C),
      (l.getChatTypeForLogging = v),
      (l.logSendPixKeyTrayView = S),
      (l.logSendPixKeyView = R),
      (l.logSendPixKeySendClick = L),
      (l.logSendPixKeyCancelClick = E));
  },
  98,
);
