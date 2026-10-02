__d(
  "WASmaxInMessageDeliverEncTypeSenderKeyWithoutMediatypeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
      ).parseEncTypeSenderKeyMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
      ).parseEncHideDecryptionPlaceholderMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseEncTypeSenderKeyWithoutMediatypeMixin = e;
  },
  98,
);
