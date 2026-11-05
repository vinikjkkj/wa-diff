__d(
  "WAWebBrazilPaymentState",
  [
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPaymentStateKeys",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "additional_note";
    function s(e) {
      var t;
      return (
        ((t = R(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY]) ===
        !0
      );
    }
    function u(e) {
      var t;
      return (
        ((t = R(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_KEY]) !==
        o("WAWebBrazilPaymentStateKeys").BUBBLE_VERSION_WITHOUT_ADD_RECEIPT
      );
    }
    function c(t) {
      var n;
      return E((n = R(t)) == null ? void 0 : n[e]);
    }
    function d(e) {
      var t,
        n,
        r,
        a = L(
          (t = R(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
        );
      return a == null
        ? o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE
        : {
            status:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                E(a.status),
              )) != null
                ? n
                : null,
            actor:
              (r = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                E(a.actor),
              )) != null
                ? r
                : null,
            statusUpdatedAtMs: k(a.updated_at),
            receiptMsgId: E(a.receipt_message_id),
            receiptAddedAtMs: k(a.receipt_added_at),
          };
    }
    function m(e) {
      var t;
      return (t = e.status) != null
        ? t
        : o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED;
    }
    function p(e, t) {
      var n,
        r,
        a,
        i,
        l = R(e);
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
                  {
                    status: (n = t.status) != null ? n : null,
                    actor: (r = t.actor) != null ? r : null,
                    updated_at: t.statusUpdatedAtMs,
                    receipt_message_id: (a = t.receiptMsgId) != null ? a : null,
                    receipt_added_at: t.receiptAddedAtMs,
                  }),
                i),
              ),
            ),
          }),
        ].concat(c),
      });
    }
    function _(e, t, n, r) {
      var a = e.status,
        i =
          a != null &&
          o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(a);
      return i || r < e.statusUpdatedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            status: t,
            actor: n,
            statusUpdatedAtMs: r,
          });
    }
    function f(e, t, n) {
      return n < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, { receiptMsgId: t, receiptAddedAtMs: n });
    }
    function g(e, t) {
      return t < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            receiptMsgId: null,
            receiptAddedAtMs: t,
          });
    }
    function h(e, t) {
      return (
        e.status === t.status &&
        e.actor === t.actor &&
        e.statusUpdatedAtMs === t.statusUpdatedAtMs &&
        e.receiptMsgId === t.receiptMsgId &&
        e.receiptAddedAtMs === t.receiptAddedAtMs
      );
    }
    function y(e) {
      var t,
        n = (t = S(e)) == null ? void 0 : t.name;
      return typeof n == "string" &&
        o("WAWebBrazilPaymentStateKeys").PAYMENT_REQUEST_BUTTON_NAMES.has(n)
        ? n
        : null;
    }
    function C(e) {
      var t,
        n = y(e);
      if (n == null) return null;
      var r = E((t = S(e)) == null ? void 0 : t.buttonParamsJson);
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
    function b(e) {
      var t = R(e),
        n = t == null ? void 0 : t.payment_settings;
      return (
        y(e) ===
          o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        !v(t) &&
        Array.isArray(n) &&
        n.some(function (e) {
          var t;
          return (
            ((t = L(e)) == null ? void 0 : t.type) ===
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
          );
        })
      );
    }
    function v(e) {
      var t,
        n = (t = L(e == null ? void 0 : e.order)) == null ? void 0 : t.items;
      return Array.isArray(n) && n.length > 0;
    }
    function S(e) {
      var t,
        n = (t = L(e)) == null ? void 0 : t.buttons;
      return Array.isArray(n) ? L(n[0]) : null;
    }
    function R(e) {
      var t = C(e);
      if (t == null) return null;
      try {
        return L(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function L(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function E(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function k(e) {
      return typeof e == "number" && e > 0 ? e : 0;
    }
    ((l.isReceiptAndStateStamped = s),
      (l.hasBubbleAddReceipt = u),
      (l.getPaymentNote = c),
      (l.getBrazilPaymentState = d),
      (l.getPaymentDetailsStatus = m),
      (l.withBrazilPaymentState = p),
      (l.applyStatusUpdate = _),
      (l.applyReceiptUpdate = f),
      (l.applyReceiptRemoval = g),
      (l.isSameBrazilPaymentState = h),
      (l.getPaymentRequestButtonName = y),
      (l.getPaymentRequestParamsJson = C),
      (l.isPixCodeRequestPayload = b));
  },
  98,
);
