__d(
  "WASmaxInPreKeysKeysHashLegacyOnlyOrPQSupportMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysKeysHashLegacyOnlyMixin",
    "WASmaxInPreKeysKeysHashPQSupportMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysKeysHashLegacyOnlyMixin",
      ).parseKeysHashLegacyOnlyMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "KeysHashLegacyOnly",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysKeysHashPQSupportMixin",
      ).parseKeysHashPQSupportMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "KeysHashPQSupport",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["KeysHashLegacyOnly", "KeysHashPQSupport"],
            [t, n],
          );
    }
    l.parseKeysHashLegacyOnlyOrPQSupportMixinGroup = e;
  },
  98,
);
