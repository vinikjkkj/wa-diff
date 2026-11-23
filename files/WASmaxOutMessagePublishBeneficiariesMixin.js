__d(
  "WASmaxOutMessagePublishBeneficiariesMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBeneficiaryMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessagePublishBeneficiaryMixin",
      ).mergeBeneficiaryMixin(o("WASmaxJsx").smax("beneficiary", null), e);
      return t;
    }
    function s(t) {
      var n = t.beneficiaryArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 5),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeBeneficiariesBeneficiary = e), (l.mergeBeneficiariesMixin = u));
  },
  98,
);
