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
    function _(e) {
      O("payment_home", void 0, { has_pix_key: e });
    }
    function f() {
      B(
        "settings",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_ROW,
      );
    }
    function g() {
      B(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_ROW,
      );
    }
    function h() {
      B(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_BANNER,
      );
    }
    function y() {
      B(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_ROW,
      );
    }
    function C(e) {
      O(F(e), void 0, { payment_method: d });
    }
    function b(e, t) {
      B(
        F(e),
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d, key_type: t },
      );
    }
    function v() {
      B(
        "edit_non_native_p2p_payment_method",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .REMOVE_CREDENTIAL,
        { payment_method: d },
      );
    }
    function S() {
      O("remove_custom_payment_method_prompt", void 0, { payment_method: d });
    }
    function R() {
      B(
        "remove_custom_payment_method_prompt",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d },
      );
    }
    function L() {
      O(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PASSKEY_BLOCKED_EDIT_DELETE_PIX,
      );
    }
    function E(e) {
      B(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_HOME_SHARE_YOUR_PIX,
        { pix_exists: e },
        "payment_home.share_your_pix",
      );
    }
    function k() {
      B("payment_home", void 0, { transactions_see_all: !0, flow_type: m });
    }
    function I(e) {
      O("payment_transactions", void 0, { num_payments: e, flow_type: m });
    }
    function T(e) {
      O("payment_transactions", void 0, { flow_type: m, date_field: e });
    }
    var D =
      ((e = {}),
      (e[(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER] =
        "other"),
      (e[u.MESSAGE_CHAT_TYPE.INDIVIDUAL] = "individual"),
      (e[u.MESSAGE_CHAT_TYPE.GROUP] = "group"),
      (e[u.MESSAGE_CHAT_TYPE.STATUS] = "status"),
      (e[u.MESSAGE_CHAT_TYPE.BROADCAST] = "broadcast"),
      (e[u.MESSAGE_CHAT_TYPE.CHANNEL] = "channel"),
      e);
    function x(e) {
      var t;
      return (t =
        D[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)]) !=
        null
        ? t
        : "other";
    }
    function $(e) {
      O("send_pix_key", void 0, { chat_type: e }, p);
    }
    function P(e, t) {
      O("send_pix_key", void 0, { chat_type: e }, p, t);
    }
    function N(e) {
      B(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .SEND_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function M(e) {
      B(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .BACK_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function w(e) {
      q({
        actionTarget: e,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.API,
        paymentsCountryCode: c,
        screen: "custom_payment_methods_sync",
      });
    }
    var A = Object.freeze({
      STORE_SENT: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_STORE_SENT,
      REMOVE_PIX: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_REMOVE_PIX,
    });
    function F(e) {
      return e
        ? "edit_non_native_p2p_payment_method"
        : "add_non_native_p2p_payment_method";
    }
    function O(e, t, n, r, a) {
      q({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: c,
        previousScreenName: a,
        queryParams: W(n),
        referral: r,
        screen: e,
      });
    }
    function B(e, t, n, r) {
      q({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsCountryCode: c,
        queryParams: W(n),
        referral: r,
        screen: e,
      });
    }
    function W(e) {
      return e != null ? JSON.stringify(e) : void 0;
    }
    function q(e) {
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
      (l.logAddOrEditPixView = C),
      (l.logSavePixClick = b),
      (l.logDeletePixClick = v),
      (l.logDeletePixPromptView = S),
      (l.logDeletePixConfirmClick = R),
      (l.logPasskeyBlockedEditDeletePixView = L),
      (l.logSharePixRowClick = E),
      (l.logSeeAllTransactionsClick = k),
      (l.logTransactionsListView = I),
      (l.logTransactionsDateFieldView = T),
      (l.getChatTypeForLogging = x),
      (l.logSendPixKeyTrayView = $),
      (l.logSendPixKeyView = P),
      (l.logSendPixKeySendClick = N),
      (l.logSendPixKeyCancelClick = M),
      (l.logSyncEvent = w),
      (l.SYNC_TARGETS = A));
  },
  98,
);
