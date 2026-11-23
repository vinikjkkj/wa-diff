__d(
  "WASmaxInPreKeysKeysHashMixin",
  ["WAResultOrError", "WASmaxInPreKeysKeysHashLegacyOnlyOrPQSupportMixinGroup"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysKeysHashLegacyOnlyOrPQSupportMixinGroup",
      ).parseKeysHashLegacyOnlyOrPQSupportMixinGroup(e);
      return t.success
        ? o("WAResultOrError").makeResult({
            keysHashLegacyOnlyOrPQSupportMixinGroup: t.value,
          })
        : t;
    }
    l.parseKeysHashMixin = e;
  },
  98,
);
