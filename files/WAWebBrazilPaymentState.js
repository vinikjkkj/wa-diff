__d(
  "WAWebBrazilPaymentState",
  [
    "WAWebBrazilPaymentStateKeys",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "additional_note";
    function s(e) {
      var t;
      return (
        ((t = y(e)) == null
          ? void 0
          : t[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY]) ===
        !0
      );
    }
    function u(t) {
      var n;
      return b((n = y(t)) == null ? void 0 : n[e]);
    }
    function c(e) {
      var t,
        n,
        r,
        a = C(
          (t = y(e)) == null
            ? void 0
            : t[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
        );
      return a == null
        ? o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE
        : {
            status:
              (n = o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(
                b(a.status),
              )) != null
                ? n
                : null,
            actor:
              (r = o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(
                b(a.actor),
              )) != null
                ? r
                : null,
            statusUpdatedAtMs: v(a.updated_at),
            receiptMsgId: b(a.receipt_message_id),
            receiptAddedAtMs: v(a.receipt_added_at),
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
        l = y(e);
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
        n = (t = C(e)) == null ? void 0 : t.buttons,
        r = Array.isArray(n) ? C(n[0]) : null;
      return r == null ||
        r.name !== o("WAWebBrazilPaymentStateKeys").PAYMENT_INFO_BUTTON_NAME
        ? null
        : b(r.buttonParamsJson);
    }
    function y(e) {
      var t = h(e);
      if (t == null) return null;
      try {
        return C(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function b(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function v(e) {
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
      (l.getPaymentInfoParamsJson = h));
  },
  98,
);
