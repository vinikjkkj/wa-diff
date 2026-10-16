__d(
  "WASmaxInPreKeysNonE2EEAttestationMixin",
  ["WAResultOrError", "WASmaxInPreKeysEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "non_e2ee_attestation",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "signature");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        t.value,
        "account_type",
        o("WASmaxInPreKeysEnums").ENUM_HYBRIDE2EE_NONE2EE,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 32);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
      return l.success
        ? o("WAResultOrError").makeResult({
            nonE2eeAttestationAccountType: a.value,
            nonE2eeAttestationValueElementValue: i.value,
            nonE2eeAttestationSignatureElementValue: l.value,
          })
        : l;
    }
    l.parseNonE2EEAttestationMixin = e;
  },
  98,
);
