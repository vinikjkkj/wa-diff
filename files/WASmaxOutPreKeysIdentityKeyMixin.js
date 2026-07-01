__d(
  "WASmaxOutPreKeysIdentityKeyMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutPreKeysKeyDataMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o("WASmaxOutPreKeysKeyDataMixin").mergeKeyDataMixin(
          o("WASmaxJsx").smax("identity", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIdentityKeyMixin = s;
  },
  98,
);
