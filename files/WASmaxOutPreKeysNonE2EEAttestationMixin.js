__d(
  "WASmaxOutPreKeysNonE2EEAttestationMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.nonE2eeAttestationAccountType,
        r = e.valueElementValue,
        a = e.signatureElementValue,
        i = (t = o("WASmaxJsx")).smax(
          "smax$any",
          null,
          t.smax(
            "non_e2ee_attestation",
            { account_type: o("WAWap").CUSTOM_STRING(n) },
            t.smax("value", null, r),
            t.smax("signature", null, a),
          ),
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNonE2EEAttestationMixin = s;
  },
  98,
);
