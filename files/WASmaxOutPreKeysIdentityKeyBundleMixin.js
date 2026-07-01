__d(
  "WASmaxOutPreKeysIdentityKeyBundleMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysIdentityKeyMixin",
    "WASmaxOutPreKeysKeyTypeMixin",
    "WASmaxOutPreKeysPQLastResortKeyMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin",
    "WASmaxOutPreKeysPreKeyListMixin",
    "WASmaxOutPreKeysRegistrationIDMixin",
    "WASmaxOutPreKeysRequestPaddingMixin",
    "WASmaxOutPreKeysSignedPreKeyMixin",
    "WASmaxOutPreKeysVerifiedNameMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.pQPreKeyListMixinArgs,
        r = e.pQLastResortKeyMixinArgs,
        a = e.hasKeyType,
        i = e.verifiedNameMixinArgs,
        l = e.requestPaddingMixinArgs,
        s = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutPreKeysRequestPaddingMixin").mergeRequestPaddingMixin,
          t.optionalMerge(
            o("WASmaxOutPreKeysVerifiedNameMixin").mergeVerifiedNameMixin,
            t.optionalMerge(
              o("WASmaxOutPreKeysKeyTypeMixin").mergeKeyTypeMixin,
              t.optionalMerge(
                o("WASmaxOutPreKeysPQLastResortKeyMixin")
                  .mergePQLastResortKeyMixin,
                t.optionalMerge(
                  o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin,
                  o("WASmaxOutPreKeysSignedPreKeyMixin").mergeSignedPreKeyMixin(
                    o("WASmaxOutPreKeysPreKeyListMixin").mergePreKeyListMixin(
                      o(
                        "WASmaxOutPreKeysIdentityKeyMixin",
                      ).mergeIdentityKeyMixin(
                        o(
                          "WASmaxOutPreKeysRegistrationIDMixin",
                        ).mergeRegistrationIDMixin(
                          o("WASmaxJsx").smax("iq", null),
                          e,
                        ),
                        e,
                      ),
                      e,
                    ),
                    e,
                  ),
                  n,
                ),
                r,
              ),
              a,
            ),
            i,
          ),
          l,
        );
      return s;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIdentityKeyBundleMixin = s;
  },
  98,
);
