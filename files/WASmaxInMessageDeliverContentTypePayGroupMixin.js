__d(
  "WASmaxInMessageDeliverContentTypePayGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypePayMixin",
    "WASmaxInMessageDeliverGroupDeliverPayNodeOrPayTransactionMessageMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentTypePayMixin",
      ).parseContentTypePayMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverGroupDeliverPayNodeOrPayTransactionMessageMixinGroup",
      ).parseGroupDeliverPayNodeOrPayTransactionMessageMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          groupDeliverPayNodeOrPayTransactionMessageMixinGroup: r.success
            ? r.value
            : null,
        }),
      );
    }
    l.parseContentTypePayGroupMixin = e;
  },
  98,
);
