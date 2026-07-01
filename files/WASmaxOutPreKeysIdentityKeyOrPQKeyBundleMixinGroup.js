__d(
  "WASmaxOutPreKeysIdentityKeyOrPQKeyBundleMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutPreKeysIdentityKeyBundleMixin",
    "WASmaxOutPreKeysPQKeyBundleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.identityKeyBundle)
        return o(
          "WASmaxOutPreKeysIdentityKeyBundleMixin",
        ).mergeIdentityKeyBundleMixin(e, t.identityKeyBundle);
      if (t.pQKeyBundle)
        return o("WASmaxOutPreKeysPQKeyBundleMixin").mergePQKeyBundleMixin(
          e,
          t.pQKeyBundle,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeIdentityKeyOrPQKeyBundleMixinGroup = e;
  },
  98,
);
