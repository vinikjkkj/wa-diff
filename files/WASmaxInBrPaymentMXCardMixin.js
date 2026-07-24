__d(
  "WASmaxInBrPaymentMXCardMixin",
  ["WAResultOrError", "WASmaxInBrPaymentCardBaseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "image");
      if (!n.success) return n;
      var r = o("WASmaxInBrPaymentCardBaseMixin").parseCardBaseMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ image: n.value }, r.value),
          )
        : r;
    }
    l.parseMXCardMixin = e;
  },
  98,
);
