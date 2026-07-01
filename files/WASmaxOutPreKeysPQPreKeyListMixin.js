__d(
  "WASmaxOutPreKeysPQPreKeyListMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyIDMixin",
    "WASmaxOutPreKeysPQKeyDataMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.keyIDMixinArgs,
        r = e.pQKeyDataMixinArgs,
        a = e.signatureElementValue,
        i = (t = o("WASmaxJsx")).smax(
          "key",
          null,
          o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(
            t.smax("id", null),
            n,
          ),
          o("WASmaxOutPreKeysPQKeyDataMixin").mergePQKeyDataMixin(
            t.smax("value", null),
            r,
          ),
          t.smax("signature", null, a),
        );
      return i;
    }
    function s(t) {
      var n = t.keyArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "pq_list",
            null,
            o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 5e3),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makePQPreKeyListPqListKey = e), (l.mergePQPreKeyListMixin = u));
  },
  98,
);
