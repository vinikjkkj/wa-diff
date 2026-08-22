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
      B("payment_home", void 0, { has_pix_key: e });
    }
    function f() {
      W(
        "settings",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_ROW,
      );
    }
    function g() {
      W(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_ROW,
      );
    }
    function h() {
      W(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_BANNER,
      );
    }
    function y() {
      W(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_ROW,
      );
    }
    function C(e) {
      B(O(e), void 0, { payment_method: d });
    }
    function b(e, t) {
      W(
        O(e),
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d, key_type: t },
      );
    }
    function v() {
      W(
        "edit_non_native_p2p_payment_method",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .REMOVE_CREDENTIAL,
        { payment_method: d },
      );
    }
    function S() {
      B("remove_custom_payment_method_prompt", void 0, { payment_method: d });
    }
    function R() {
      W(
        "remove_custom_payment_method_prompt",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d },
      );
    }
    function L() {
      B(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PASSKEY_BLOCKED_EDIT_DELETE_PIX,
      );
    }
    function E(e) {
      W(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_HOME_SHARE_YOUR_PIX,
        { pix_exists: e },
        "payment_home.share_your_pix",
      );
    }
    function k() {
      W("payment_home", void 0, { transactions_see_all: !0, flow_type: m });
    }
    function I(e) {
      B("payment_transactions", void 0, { num_payments: e, flow_type: m });
    }
    function T(e) {
      B("payment_transactions", void 0, { flow_type: m, date_field: e });
    }
    function D(e) {
      W("payment_transactions", e, { flow_type: m });
    }
    var x =
      ((e = {}),
      (e[(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER] =
        "other"),
      (e[u.MESSAGE_CHAT_TYPE.INDIVIDUAL] = "individual"),
      (e[u.MESSAGE_CHAT_TYPE.GROUP] = "group"),
      (e[u.MESSAGE_CHAT_TYPE.STATUS] = "status"),
      (e[u.MESSAGE_CHAT_TYPE.BROADCAST] = "broadcast"),
      (e[u.MESSAGE_CHAT_TYPE.CHANNEL] = "channel"),
      e);
    function $(e) {
      var t;
      return (t =
        x[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)]) !=
        null
        ? t
        : "other";
    }
    function P(e) {
      B("send_pix_key", void 0, { chat_type: e }, p);
    }
    function N(e, t) {
      B("send_pix_key", void 0, { chat_type: e }, p, t);
    }
    function M(e) {
      W(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .SEND_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function w(e) {
      W(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .BACK_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function A(e) {
      U({
        actionTarget: e,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.API,
        paymentsCountryCode: c,
        screen: "custom_payment_methods_sync",
      });
    }
    var F = Object.freeze({
      STORE_SENT: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_STORE_SENT,
      REMOVE_PIX: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_REMOVE_PIX,
    });
    function O(e) {
      return e
        ? "edit_non_native_p2p_payment_method"
        : "add_non_native_p2p_payment_method";
    }
    function B(e, t, n, r, a) {
      U({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: c,
        previousScreenName: a,
        queryParams: q(n),
        referral: r,
        screen: e,
      });
    }
    function W(e, t, n, r) {
      U({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsCountryCode: c,
        queryParams: q(n),
        referral: r,
        screen: e,
      });
    }
    function q(e) {
      return e != null ? JSON.stringify(e) : void 0;
    }
    function U(e) {
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
      (l.logTransactionsTabClick = D),
      (l.getChatTypeForLogging = $),
      (l.logSendPixKeyTrayView = P),
      (l.logSendPixKeyView = N),
      (l.logSendPixKeySendClick = M),
      (l.logSendPixKeyCancelClick = w),
      (l.logSyncEvent = A),
      (l.SYNC_TARGETS = F));
  },
  98,
);
