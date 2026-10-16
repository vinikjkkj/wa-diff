__d(
  "WASmaxInPreKeysDeviceSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysBotIdentityKeyAuthMixin",
    "WASmaxInPreKeysDeviceIdentityMixin",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
    "WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup",
    "WASmaxInPreKeysPQKeyMixin",
    "WASmaxInPreKeysPreKeyMixin",
    "WASmaxInPreKeysRegistrationIDMixin",
    "WASmaxInPreKeysSignedPreKeyMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPreKeysRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!t.success) return t;
      var n = o("WASmaxInPreKeysKeyTypeMixin").parseKeyTypeMixin(e),
        r = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInPreKeysBotIdentityKeyAuthMixin",
        ).parseBotIdentityKeyAuthMixin(e),
        i = o("WASmaxInPreKeysPreKeyMixin").parsePreKeyMixin(e),
        l = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!l.success) return l;
      var s = o("WASmaxInPreKeysPQKeyMixin").parsePQKeyMixin(e),
        u = o("WASmaxInPreKeysDeviceIdentityMixin").parseDeviceIdentityMixin(e),
        c = o(
          "WASmaxInPreKeysNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup",
        ).parseNonE2EEAttestationOrForceOverrideE2EEStateMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {},
          t.value,
          { keyTypeMixin: n.success ? n.value : null },
          r.value,
          {
            botIdentityKeyAuthMixin: a.success ? a.value : null,
            preKeyMixin: i.success ? i.value : null,
          },
          l.value,
          {
            pQKeyMixin: s.success ? s.value : null,
            deviceIdentityMixin: u.success ? u.value : null,
            nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup: c.success
              ? c.value
              : null,
          },
        ),
      );
    }
    l.parseDeviceSuccessMixin = e;
  },
  98,
);
