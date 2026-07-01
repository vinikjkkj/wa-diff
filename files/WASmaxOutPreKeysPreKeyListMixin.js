__d(
  "WASmaxOutPreKeysPreKeyListMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyDataMixin",
    "WASmaxOutPreKeysKeyIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keyIDMixinArgs,
        n = e.keyDataMixinArgs,
        r = o("WASmaxJsx").smax(
          "key",
          null,
          o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(
            o("WASmaxJsx").smax("id", null),
            t,
          ),
          o("WASmaxOutPreKeysKeyDataMixin").mergeKeyDataMixin(
            o("WASmaxJsx").smax("value", null),
            n,
          ),
        );
      return r;
    }
    function s(t) {
      var n = t.keyArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "list",
            null,
            o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 2e4),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makePreKeyListListKey = e), (l.mergePreKeyListMixin = u));
  },
  98,
);
