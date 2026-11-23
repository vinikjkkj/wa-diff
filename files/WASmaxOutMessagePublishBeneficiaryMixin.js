__d(
  "WASmaxOutMessagePublishBeneficiaryMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.beneficiaryName,
        a = e.beneficiaryAddressLine1,
        i = e.beneficiaryAddressLine2,
        l = e.beneficiaryCity,
        s = e.beneficiaryState,
        u = e.beneficiaryPhoneNumber,
        c = e.beneficiaryCountry,
        d = e.beneficiaryPostalCode,
        m = o("WASmaxJsx").smax("beneficiary", {
          name: (t = o("WAWap")).CUSTOM_STRING(r),
          address_line1: t.CUSTOM_STRING(a),
          address_line2: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, i),
          city: n.OPTIONAL(t.CUSTOM_STRING, l),
          state: n.OPTIONAL(t.CUSTOM_STRING, s),
          phone_number: n.OPTIONAL(t.CUSTOM_STRING, u),
          country: t.CUSTOM_STRING(c),
          postal_code: t.CUSTOM_STRING(d),
        });
      return m;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBeneficiaryMixin = s;
  },
  98,
);
