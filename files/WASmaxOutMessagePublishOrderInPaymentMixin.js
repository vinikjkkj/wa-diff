__d(
  "WASmaxOutMessagePublishOrderInPaymentMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBeneficiariesMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessagePublishBeneficiariesMixin",
      ).mergeBeneficiariesMixin(o("WASmaxJsx").smax("beneficiaries", null), e);
      return t;
    }
    function s(t) {
      var n,
        r = t.beneficiariesArgs,
        a = t.orderId,
        i = t.orderMessageId,
        l = t.orderPaymentConfigId,
        s = t.orderType,
        u = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "order",
            {
              id: (n = o("WAWap")).CUSTOM_STRING(a),
              message_id: o("WASmaxAttrs").OPTIONAL(n.STANZA_ID, i),
              payment_config_id: o("WASmaxAttrs").OPTIONAL(n.CUSTOM_STRING, l),
              type: o("WASmaxAttrs").OPTIONAL(n.CUSTOM_STRING, s),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, r),
          ),
        );
      return u;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeOrderInPaymentOrderBeneficiaries = e),
      (l.mergeOrderInPaymentMixin = u));
  },
  98,
);
