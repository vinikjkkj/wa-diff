__d(
  "WAWebBrazilPaymentState",
  [
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPaymentAppSwitchStatus",
    "WAWebBrazilPaymentStateKeys",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "additional_note";
    function s(e) {
      var t;
      return (
        ((t = k(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY]) ===
        !0
      );
    }
    function u(e) {
      var t;
      return (
        S(e) &&
        ((t = k(e)) == null
          ? void 0
          : t[
              o("WAWebBrazilPaymentStateKeys")
                .APP_SWITCH_RECEIPT_AND_STATE_STAMP_KEY
            ]) === !0
      );
    }
    function c(e) {
      return u(e)
        ? o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH
        : o("WAWebPaymentDetailsModels").PaymentDetailsFlow.COPY_PASTE;
    }
    function d(e) {
      var t;
      return (
        ((t = k(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_KEY]) !==
        o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_WITHOUT_ADD_RECEIPT
      );
    }
    function m(t) {
      var n;
      return T((n = k(t)) == null ? void 0 : n[e]);
    }
    function p(e) {
      var t,
        n,
        r,
        a = I(
          (t = k(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
        );
      return a == null
        ? o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE
        : {
            status:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                T(a.status),
              )) != null
                ? n
                : null,
            actor:
              (r = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                T(a.actor),
              )) != null
                ? r
                : null,
            statusUpdatedAtMs: D(a.updated_at),
            receiptMsgId: T(a.receipt_message_id),
            receiptAddedAtMs: D(a.receipt_added_at),
            bankName: T(a.bank_name),
            transactionE2eId: T(a.transaction_e2e_id),
          };
    }
    function _(e, t) {
      var n;
      return (n = e.status) != null
        ? n
        : o("WAWebPaymentDetailsStatusPolicy").getDefaultPaymentStatus(t);
    }
    function f(e, t) {
      var n,
        r,
        a,
        i,
        l = k(e);
      if (l == null) return e;
      var s = e.buttons,
        u = s[0],
        c = babelHelpers.arrayLikeToArray(s).slice(1);
      return babelHelpers.extends({}, e, {
        buttons: [
          babelHelpers.extends({}, u, {
            buttonParamsJson: JSON.stringify(
              babelHelpers.extends(
                {},
                l,
                ((i = {}),
                (i[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY] =
                  babelHelpers.extends(
                    {
                      status: (n = t.status) != null ? n : null,
                      actor: (r = t.actor) != null ? r : null,
                      updated_at: t.statusUpdatedAtMs,
                      receipt_message_id:
                        (a = t.receiptMsgId) != null ? a : null,
                      receipt_added_at: t.receiptAddedAtMs,
                    },
                    R(t),
                  )),
                i),
              ),
            ),
          }),
        ].concat(c),
      });
    }
    function g(e, t, n, r, a) {
      if (a === o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH)
        return o("WAWebBrazilPaymentAppSwitchStatus").applyAppSwitchStatus(
          e,
          t,
          n,
          r,
        );
      var i = e.status,
        l =
          i != null &&
          o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(i);
      return l || r < e.statusUpdatedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            status: t,
            actor: n,
            statusUpdatedAtMs: r,
          });
    }
    function h(e, t, n) {
      return n < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, { receiptMsgId: t, receiptAddedAtMs: n });
    }
    function y(e, t) {
      return t < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            receiptMsgId: null,
            receiptAddedAtMs: t,
          });
    }
    function C(e, t) {
      return (
        e.status === t.status &&
        e.actor === t.actor &&
        e.statusUpdatedAtMs === t.statusUpdatedAtMs &&
        e.receiptMsgId === t.receiptMsgId &&
        e.receiptAddedAtMs === t.receiptAddedAtMs &&
        e.bankName === t.bankName &&
        e.transactionE2eId === t.transactionE2eId
      );
    }
    function b(e) {
      var t,
        n = (t = E(e)) == null ? void 0 : t.name;
      return typeof n == "string" &&
        o("WAWebBrazilPaymentStateKeys").PAYMENT_REQUEST_BUTTON_NAMES.has(n)
        ? n
        : null;
    }
    function v(e) {
      var t,
        n = b(e);
      if (n == null) return null;
      var r = T((t = E(e)) == null ? void 0 : t.buttonParamsJson);
      return n ===
        o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        !(
          r != null &&
          r.includes(
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
          )
        )
        ? null
        : r;
    }
    function S(e) {
      var t = k(e),
        n = t == null ? void 0 : t.payment_settings;
      return (
        b(e) ===
          o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        !L(t) &&
        Array.isArray(n) &&
        n.some(function (e) {
          var t;
          return (
            ((t = I(e)) == null ? void 0 : t.type) ===
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
          );
        })
      );
    }
    function R(e) {
      var t = {};
      return (
        e.bankName != null && (t.bank_name = e.bankName),
        e.transactionE2eId != null &&
          (t.transaction_e2e_id = e.transactionE2eId),
        t
      );
    }
    function L(e) {
      var t,
        n = (t = I(e == null ? void 0 : e.order)) == null ? void 0 : t.items;
      return Array.isArray(n) && n.length > 0;
    }
    function E(e) {
      var t,
        n = (t = I(e)) == null ? void 0 : t.buttons;
      return Array.isArray(n) ? I(n[0]) : null;
    }
    function k(e) {
      var t = v(e);
      if (t == null) return null;
      try {
        return I(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function I(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function T(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function D(e) {
      return typeof e == "number" && e > 0 ? e : 0;
    }
    ((l.isReceiptAndStateStamped = s),
      (l.isAppSwitchReceiptAndStateStamped = u),
      (l.getPaymentDetailsFlow = c),
      (l.hasBubbleAddReceipt = d),
      (l.getPaymentNote = m),
      (l.getBrazilPaymentState = p),
      (l.getPaymentDetailsStatus = _),
      (l.withBrazilPaymentState = f),
      (l.applyStatusUpdate = g),
      (l.applyReceiptUpdate = h),
      (l.applyReceiptRemoval = y),
      (l.isSameBrazilPaymentState = C),
      (l.getPaymentRequestButtonName = b),
      (l.getPaymentRequestParamsJson = v),
      (l.isPixCodeRequestPayload = S));
  },
  98,
);
