__d(
  "WAWebPaymentDetailsModels",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum"))({
        NOT_CONFIRMED: "not_confirmed",
        MARKED_AS_PAID: "marked_as_paid",
        NOT_PAID_YET: "not_paid_yet",
        PENDING: "pending",
        PAYMENT_SENT: "payment_sent",
        FAILED: "failed",
      }),
      s = e({ PAYER: "payer", REQUESTER: "requester", SYSTEM: "system" }),
      u = e({ COPY_PASTE: "copy_paste", APP_SWITCH: "app_switch" }),
      c = e({ PAYER: "payer", REQUESTER: "requester" }),
      d = {
        status: null,
        actor: null,
        statusUpdatedAtMs: 0,
        receiptMsgId: null,
        receiptAddedAtMs: 0,
        bankName: null,
        transactionE2eId: null,
      };
    function m(e) {
      return e ? c.REQUESTER : c.PAYER;
    }
    ((i.PaymentDetailsStatus = l),
      (i.PaymentDetailsActor = s),
      (i.PaymentDetailsFlow = u),
      (i.PaymentDetailsPov = c),
      (i.EMPTY_BRAZIL_PAYMENT_STATE = d),
      (i.getPaymentDetailsPov = m));
  },
  66,
);
