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
      d = "pix",
      m = "P2P",
      p = "chat_attachment";
    function _(e, t) {
      M("payment_home", void 0, { has_pix_key: e }, void 0, t);
    }
    function f() {
      w(
        "settings",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_ROW,
      );
    }
    function g() {
      w(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_ROW,
      );
    }
    function h() {
      w(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_BANNER,
      );
    }
    function y() {
      w(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_ROW,
      );
    }
    function C() {
      w(
        "edit_non_native_p2p_payment_method",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .REMOVE_CREDENTIAL,
        { payment_method: d },
      );
    }
    function b() {
      M("remove_custom_payment_method_prompt", void 0, { payment_method: d });
    }
    function v() {
      w(
        "remove_custom_payment_method_prompt",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d },
      );
    }
    function S() {
      M(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PASSKEY_BLOCKED_EDIT_DELETE_PIX,
      );
    }
    function R(e) {
      w(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_HOME_SHARE_YOUR_PIX,
        { pix_exists: e },
        "payment_home.share_your_pix",
      );
    }
    function L() {
      w("payment_home", void 0, { transactions_see_all: !0, flow_type: m });
    }
    function E(e) {
      M("payment_transactions", void 0, { num_payments: e, flow_type: m });
    }
    function k(e) {
      M("payment_transactions", void 0, { flow_type: m, date_field: e });
    }
    function I(e) {
      w("payment_transactions", e, { flow_type: m });
    }
    var T =
      ((e = {}),
      (e[(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER] =
        "other"),
      (e[u.MESSAGE_CHAT_TYPE.INDIVIDUAL] = "individual"),
      (e[u.MESSAGE_CHAT_TYPE.GROUP] = "group"),
      (e[u.MESSAGE_CHAT_TYPE.STATUS] = "status"),
      (e[u.MESSAGE_CHAT_TYPE.BROADCAST] = "broadcast"),
      (e[u.MESSAGE_CHAT_TYPE.CHANNEL] = "channel"),
      e);
    function D(e) {
      var t;
      return (t =
        T[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)]) !=
        null
        ? t
        : "other";
    }
    function x(e) {
      M("send_pix_key", void 0, { chat_type: e }, p);
    }
    function $(e, t) {
      M("send_pix_key", void 0, { chat_type: e }, p, t);
    }
    function P(e) {
      w(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .SEND_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function N(e) {
      w(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .BACK_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function M(e, t, n, r, a) {
      F({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: c,
        previousScreenName: a,
        queryParams: A(n),
        referral: r,
        screen: e,
      });
    }
    function w(e, t, n, r) {
      F({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsCountryCode: c,
        queryParams: A(n),
        referral: r,
        screen: e,
      });
    }
    function A(e) {
      return e != null ? JSON.stringify(e) : void 0;
    }
    function F(e) {
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
    ((l.logPaymentsHomeView = _),
      (l.logPaymentsRowClick = f),
      (l.logPixRowClick = g),
      (l.logAddPixBannerClick = h),
      (l.logAddPixRowClick = y),
      (l.logDeletePixClick = C),
      (l.logDeletePixPromptView = b),
      (l.logDeletePixConfirmClick = v),
      (l.logPasskeyBlockedEditDeletePixView = S),
      (l.logSharePixRowClick = R),
      (l.logSeeAllTransactionsClick = L),
      (l.logTransactionsListView = E),
      (l.logTransactionsDateFieldView = k),
      (l.logTransactionsTabClick = I),
      (l.getChatTypeForLogging = D),
      (l.logSendPixKeyTrayView = x),
      (l.logSendPixKeyView = $),
      (l.logSendPixKeySendClick = P),
      (l.logSendPixKeyCancelClick = N));
  },
  98,
);
