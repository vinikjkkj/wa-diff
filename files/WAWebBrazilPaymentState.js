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
        ((t = S(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY]) ===
        !0
      );
    }
    function u(t) {
      var n;
      return L((n = S(t)) == null ? void 0 : n[e]);
    }
    function c(e) {
      var t,
        n,
        r,
        a = R(
          (t = S(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
        );
      return a == null
        ? o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE
        : {
            status:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                L(a.status),
              )) != null
                ? n
                : null,
            actor:
              (r = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                L(a.actor),
              )) != null
                ? r
                : null,
            statusUpdatedAtMs: E(a.updated_at),
            receiptMsgId: L(a.receipt_message_id),
            receiptAddedAtMs: E(a.receipt_added_at),
          };
    }
    function d(e) {
      var t;
      return (t = e.status) != null
        ? t
        : o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED;
    }
    function m(e, t) {
      var n,
        r,
        a,
        i,
        l = S(e);
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
    function p(e, t, n, r) {
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
    function _(e, t, n) {
      return n < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, { receiptMsgId: t, receiptAddedAtMs: n });
    }
    function f(e, t) {
      return t < e.receiptAddedAtMs
        ? e
        : babelHelpers.extends({}, e, {
            receiptMsgId: null,
            receiptAddedAtMs: t,
          });
    }
    function g(e, t) {
      return (
        e.status === t.status &&
        e.actor === t.actor &&
        e.statusUpdatedAtMs === t.statusUpdatedAtMs &&
        e.receiptMsgId === t.receiptMsgId &&
        e.receiptAddedAtMs === t.receiptAddedAtMs
      );
    }
    function h(e) {
      var t,
        n = (t = v(e)) == null ? void 0 : t.name;
      return typeof n == "string" &&
        o("WAWebBrazilPaymentStateKeys").PAYMENT_REQUEST_BUTTON_NAMES.has(n)
        ? n
        : null;
    }
    function y(e) {
      var t,
        n = h(e);
      if (n == null) return null;
      var r = L((t = v(e)) == null ? void 0 : t.buttonParamsJson);
      return n ===
        o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        (r == null
          ? void 0
          : r.includes(
              o("WAWebBizOrderDetailsParams").PaymentSettingType
                .PIX_STATIC_CODE,
            )) !== !0
        ? null
        : r;
    }
    function C(e) {
      var t = S(e),
        n = t == null ? void 0 : t.payment_settings;
      return (
        h(e) ===
          o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME &&
        !b(t) &&
        Array.isArray(n) &&
        n.some(function (e) {
          var t;
          return (
            ((t = R(e)) == null ? void 0 : t.type) ===
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
          );
        })
      );
    }
    function b(e) {
      var t,
        n = (t = R(e == null ? void 0 : e.order)) == null ? void 0 : t.items;
      return Array.isArray(n) && n.length > 0;
    }
    function v(e) {
      var t,
        n = (t = R(e)) == null ? void 0 : t.buttons;
      return Array.isArray(n) ? R(n[0]) : null;
    }
    function S(e) {
      var t = y(e);
      if (t == null) return null;
      try {
        return R(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function R(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function L(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function E(e) {
      return typeof e == "number" && e > 0 ? e : 0;
    }
    ((l.isReceiptAndStateStamped = s),
      (l.getPaymentNote = u),
      (l.getBrazilPaymentState = c),
      (l.getPaymentDetailsStatus = d),
      (l.withBrazilPaymentState = m),
      (l.applyStatusUpdate = p),
      (l.applyReceiptUpdate = _),
      (l.applyReceiptRemoval = f),
      (l.isSameBrazilPaymentState = g),
      (l.getPaymentRequestButtonName = h),
      (l.getPaymentRequestParamsJson = y),
      (l.isPixCodeRequestPayload = C));
  },
  98,
);
