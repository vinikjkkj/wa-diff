__d(
  "WASmaxInStatusDeliverEncTypeSenderKeyMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInStatusDeliverEncPayloadMixin",
    "WASmaxInStatusDeliverEncSenderKeyBucketMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "skmsg",
      );
      if (!n.success) return n;
      var r = o(
          "WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin",
        ).parseEncHideDecryptionPlaceholderMixin(e),
        a = o(
          "WASmaxInStatusDeliverEncSenderKeyBucketMixin",
        ).parseEncSenderKeyBucketMixin(e),
        i = o("WASmaxInStatusDeliverEncPayloadMixin").parseEncPayloadMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
                encSenderKeyBucketMixin: a.success ? a.value : null,
              },
              i.value,
            ),
          )
        : i;
    }
    l.parseEncTypeSenderKeyMixin = e;
  },
  98,
);
