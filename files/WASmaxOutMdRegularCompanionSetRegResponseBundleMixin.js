__d(
  "WASmaxOutMdRegularCompanionSetRegResponseBundleMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keyAttestationKeyId,
        n = e.keyAttestationElementValue,
        r = o("WASmaxJsx").smax(
          "key_attestation",
          { key_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t) },
          n,
        );
      return r;
    }
    function s(e) {
      var t = e.gpiaElementValue,
        n = o("WASmaxJsx").smax("gpia", null, t);
      return n;
    }
    function u(t) {
      var n = t.keyAttestationArgs,
        r = t.gpiaArgs,
        a = t.deviceIdentityKeyIndex,
        i = t.deviceIdentityElementValue,
        l = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "pair-device-sign",
            null,
            o("WASmaxJsx").smax(
              "device-identity",
              { "key-index": o("WAWap").INT(a) },
              i,
            ),
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
            o("WASmaxChildren").OPTIONAL_CHILD(s, r),
          ),
        );
      return l;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeRegularCompanionSetRegResponseBundlePairDeviceSignKeyAttestation =
      e),
      (l.makeRegularCompanionSetRegResponseBundlePairDeviceSignGpia = s),
      (l.mergeRegularCompanionSetRegResponseBundleMixin = c));
  },
  98,
);
