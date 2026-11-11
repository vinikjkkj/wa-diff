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
    var e = "additional_note",
      s = "APPSWITCH";
    function u(e) {
      var t;
      return (
        ((t = $(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY]) ===
        !0
      );
    }
    function c(e) {
      var t;
      return (
        I(e) &&
        ((t = $(e)) == null
          ? void 0
          : t[
              o("WAWebBrazilPaymentStateKeys")
                .APP_SWITCH_RECEIPT_AND_STATE_STAMP_KEY
            ]) === !0
      );
    }
    function d(e) {
      return c(e)
        ? o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH
        : o("WAWebPaymentDetailsModels").PaymentDetailsFlow.COPY_PASTE;
    }
    function m(e) {
      var t;
      return (
        ((t = $(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_KEY]) !==
        o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_WITHOUT_ADD_RECEIPT
      );
    }
    function p(e) {
      var t,
        n =
          (t = $(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_KEY];
      return typeof n == "number" && Number.isInteger(n) ? n : null;
    }
    function _(e) {
      var t,
        n = (t = $(e)) == null ? void 0 : t.payment_settings;
      return (
        Array.isArray(n) &&
        n.some(function (e) {
          var t,
            n,
            r =
              (t = P((n = P(e)) == null ? void 0 : n.pix_static_code)) == null
                ? void 0
                : t.flow_type;
          return typeof r == "string" && r.toUpperCase() === s;
        })
      );
    }
    function f(e) {
      var t;
      return (
        ((t = $(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VIEW_LOGGED_KEY]) === !0
      );
    }
    function g(e) {
      var t,
        n = $(e);
      if (n == null) return e;
      var r = e.buttons,
        a = r[0],
        i = babelHelpers.arrayLikeToArray(r).slice(1);
      return babelHelpers.extends({}, e, {
        buttons: [
          babelHelpers.extends({}, a, {
            buttonParamsJson: JSON.stringify(
              babelHelpers.extends(
                {},
                n,
                ((t = {}),
                (t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VIEW_LOGGED_KEY] =
                  !0),
                t),
              ),
            ),
          }),
        ].concat(i),
      });
    }
    function h(t) {
      var n;
      return N((n = $(t)) == null ? void 0 : n[e]);
    }
    function y(e) {
      var t,
        n,
        r,
        a = P(
          (t = $(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
        );
      return a == null
        ? o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE
        : {
            status:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                N(a.status),
              )) != null
                ? n
                : null,
            actor:
              (r = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                N(a.actor),
              )) != null
                ? r
                : null,
            statusUpdatedAtMs: M(a.updated_at),
            receiptMsgId: N(a.receipt_message_id),
            receiptAddedAtMs: M(a.receipt_added_at),
            bankName: N(a.bank_name),
            transactionE2eId: N(a.transaction_e2e_id),
          };
    }
    function C(e, t) {
      var n;
      return (n = e.status) != null
        ? n
        : o("WAWebPaymentDetailsStatusPolicy").getDefaultPaymentStatus(t);
    }
    function b(e, t) {
      var n,
        r,
        a,
        i,
        l = $(e);
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
                    T(t),
                  )),
                i),
              ),
            ),
          }),
        ].concat(c),
      });
    }
    function v(e, t, n, r, a) {
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
    function S(e, t, n) {
      return n < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, { receiptMsgId: t, receiptAddedAtMs: n });
    }
    function R(e, t) {
      return t < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            receiptMsgId: null,
            receiptAddedAtMs: t,
          });
    }
    function L(e, t) {
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
    function E(e) {
      var t,
        n = (t = x(e)) == null ? void 0 : t.name;
      return typeof n == "string" &&
        o("WAWebBrazilPaymentStateKeys").PAYMENT_REQUEST_BUTTON_NAMES.has(n)
        ? n
        : null;
    }
    function k(e) {
      var t,
        n = E(e);
      if (n == null) return null;
      var r = N((t = x(e)) == null ? void 0 : t.buttonParamsJson);
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
    function I(e) {
      var t = $(e),
        n = t == null ? void 0 : t.payment_settings;
      return (
        E(e) ===
          o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        !D(t) &&
        Array.isArray(n) &&
        n.some(function (e) {
          var t;
          return (
            ((t = P(e)) == null ? void 0 : t.type) ===
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
          );
        })
      );
    }
    function T(e) {
      var t = {};
      return (
        e.bankName != null && (t.bank_name = e.bankName),
        e.transactionE2eId != null &&
          (t.transaction_e2e_id = e.transactionE2eId),
        t
      );
    }
    function D(e) {
      var t,
        n = (t = P(e == null ? void 0 : e.order)) == null ? void 0 : t.items;
      return Array.isArray(n) && n.length > 0;
    }
    function x(e) {
      var t,
        n = (t = P(e)) == null ? void 0 : t.buttons;
      return Array.isArray(n) ? P(n[0]) : null;
    }
    function $(e) {
      var t = k(e);
      if (t == null) return null;
      try {
        return P(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function P(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function N(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function M(e) {
      return typeof e == "number" && e > 0 ? e : 0;
    }
    ((l.isReceiptAndStateStamped = u),
      (l.isAppSwitchReceiptAndStateStamped = c),
      (l.getPaymentDetailsFlow = d),
      (l.hasBubbleAddReceipt = m),
      (l.getReceiptAndStateBubbleVersion = p),
      (l.isAppSwitchPaymentRequest = _),
      (l.isBubbleViewLogged = f),
      (l.withBubbleViewLogged = g),
      (l.getPaymentNote = h),
      (l.getBrazilPaymentState = y),
      (l.getPaymentDetailsStatus = C),
      (l.withBrazilPaymentState = b),
      (l.applyStatusUpdate = v),
      (l.applyReceiptUpdate = S),
      (l.applyReceiptRemoval = R),
      (l.isSameBrazilPaymentState = L),
      (l.getPaymentRequestButtonName = E),
      (l.getPaymentRequestParamsJson = k),
      (l.isPixCodeRequestPayload = I));
  },
  98,
);
