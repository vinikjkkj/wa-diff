__d(
  "WAWebPaymentDetailsModels",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        NOT_CONFIRMED: "not_confirmed",
        MARKED_AS_PAID: "marked_as_paid",
      }),
      l = n("$InternalEnum")({ PAYER: "payer", REQUESTER: "requester" }),
      s = n("$InternalEnum")({ PAYER: "payer", REQUESTER: "requester" }),
      u = {
        status: null,
        actor: null,
        statusUpdatedAtMs: 0,
        receiptMsgId: null,
        receiptAddedAtMs: 0,
      };
    function c(e) {
      return e ? s.REQUESTER : s.PAYER;
    }
    ((i.PaymentDetailsStatus = e),
      (i.PaymentDetailsActor = l),
      (i.PaymentDetailsPov = s),
      (i.EMPTY_BRAZIL_PAYMENT_STATE = u),
      (i.getPaymentDetailsPov = c));
  },
  66,
);
