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
      A("payment_home", void 0, { has_pix_key: e });
    }
    function f() {
      F(
        "settings",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PAYMENTS_ROW,
      );
    }
    function g() {
      F(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.PIX_ROW,
      );
    }
    function h() {
      F(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_BANNER,
      );
    }
    function y() {
      F(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .ADD_PIX_KEY_ROW,
      );
    }
    function C(e) {
      A(w(e), void 0, { payment_method: d });
    }
    function b(e, t) {
      F(
        w(e),
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d, key_type: t },
      );
    }
    function v() {
      F(
        "edit_non_native_p2p_payment_method",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .REMOVE_CREDENTIAL,
        { payment_method: d },
      );
    }
    function S() {
      A("remove_custom_payment_method_prompt", void 0, { payment_method: d });
    }
    function R() {
      F(
        "remove_custom_payment_method_prompt",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .CONFIRM_BUTTON,
        { payment_method: d },
      );
    }
    function L() {
      A(
        "payment_home",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .PASSKEY_BLOCKED_EDIT_DELETE_PIX,
      );
    }
    function E() {
      F("payment_home", void 0, { transactions_see_all: !0, flow_type: m });
    }
    function k(e) {
      A("payment_transactions", void 0, { num_payments: e, flow_type: m });
    }
    var I =
      ((e = {}),
      (e[(u = o("WAWebWamEnumMessageChatType")).MESSAGE_CHAT_TYPE.OTHER] =
        "other"),
      (e[u.MESSAGE_CHAT_TYPE.INDIVIDUAL] = "individual"),
      (e[u.MESSAGE_CHAT_TYPE.GROUP] = "group"),
      (e[u.MESSAGE_CHAT_TYPE.STATUS] = "status"),
      (e[u.MESSAGE_CHAT_TYPE.BROADCAST] = "broadcast"),
      (e[u.MESSAGE_CHAT_TYPE.CHANNEL] = "channel"),
      e);
    function T(e) {
      var t;
      return (t =
        I[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e)]) !=
        null
        ? t
        : "other";
    }
    function D(e) {
      A("send_pix_key", void 0, { chat_type: e }, p);
    }
    function x(e, t) {
      A("send_pix_key", void 0, { chat_type: e }, p, t);
    }
    function $(e) {
      F(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .SEND_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function P(e) {
      F(
        "send_pix_key",
        o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
          .BACK_BUTTON,
        { chat_type: e },
        p,
      );
    }
    function N(e) {
      B({
        actionTarget: e,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.API,
        paymentsCountryCode: c,
        screen: "custom_payment_methods_sync",
      });
    }
    var M = Object.freeze({
      STORE_SENT: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_STORE_SENT,
      REMOVE_PIX: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
        .SYNCD_REMOVE_PIX,
    });
    function w(e) {
      return e
        ? "edit_non_native_p2p_payment_method"
        : "add_non_native_p2p_payment_method";
    }
    function A(e, t, n, r, a) {
      B({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: c,
        previousScreenName: a,
        queryParams: O(n),
        referral: r,
        screen: e,
      });
    }
    function F(e, t, n, r) {
      B({
        actionTarget: t != null ? t : void 0,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsCountryCode: c,
        queryParams: O(n),
        referral: r,
        screen: e,
      });
    }
    function O(e) {
      return e != null ? JSON.stringify(e) : void 0;
    }
    function B(e) {
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
      (l.logSeeAllTransactionsClick = E),
      (l.logTransactionsListView = k),
      (l.getChatTypeForLogging = T),
      (l.logSendPixKeyTrayView = D),
      (l.logSendPixKeyView = x),
      (l.logSendPixKeySendClick = $),
      (l.logSendPixKeyCancelClick = P),
      (l.logSyncEvent = N),
      (l.SYNC_TARGETS = M));
  },
  98,
);
