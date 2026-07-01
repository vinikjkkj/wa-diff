__d(
  "WASmaxOutPreKeysPQKeyBundleMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyTypeMixin",
    "WASmaxOutPreKeysPQLastResortKeyMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasKeyType,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutPreKeysKeyTypeMixin").mergeKeyTypeMixin,
          o("WASmaxOutPreKeysPQLastResortKeyMixin").mergePQLastResortKeyMixin(
            o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin(
              o("WASmaxJsx").smax("iq", null),
              e,
            ),
            e,
          ),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePQKeyBundleMixin = s;
  },
  98,
);
