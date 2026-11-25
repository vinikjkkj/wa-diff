__d(
  "WASmaxInReceiptKeyBundleContentsMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptBotIdentityKeyAuthMixin",
    "WASmaxInReceiptDeviceIdentityMixin",
    "WASmaxInReceiptIdentityKeyMixin",
    "WASmaxInReceiptKeyTypeMixin",
    "WASmaxInReceiptNonE2EEAttestationMixin",
    "WASmaxInReceiptPQPreKeyDeprecatedOrPQKeyMixinGroup",
    "WASmaxInReceiptPreKeyMixin",
    "WASmaxInReceiptSignedPreKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "keys");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptKeyTypeMixin").parseKeyTypeMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInReceiptBotIdentityKeyAuthMixin",
        ).parseBotIdentityKeyAuthMixin(e),
        i = o("WASmaxInReceiptSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!i.success) return i;
      var l = o("WASmaxInReceiptPreKeyMixin").parsePreKeyMixin(e),
        s = o("WASmaxInReceiptDeviceIdentityMixin").parseDeviceIdentityMixin(e),
        u = o(
          "WASmaxInReceiptNonE2EEAttestationMixin",
        ).parseNonE2EEAttestationMixin(e),
        c = o(
          "WASmaxInReceiptPQPreKeyDeprecatedOrPQKeyMixinGroup",
        ).parsePQPreKeyDeprecatedOrPQKeyMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {},
          n.value,
          r.value,
          { botIdentityKeyAuthMixin: a.success ? a.value : null },
          i.value,
          {
            preKeyMixin: l.success ? l.value : null,
            deviceIdentityMixin: s.success ? s.value : null,
            nonE2EEAttestationMixin: u.success ? u.value : null,
            pQPreKeyDeprecatedOrPQKeyMixinGroup: c.success ? c.value : null,
          },
        ),
      );
    }
    l.parseKeyBundleContentsMixin = e;
  },
  98,
);
