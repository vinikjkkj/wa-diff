__d(
  "WASmaxInMessageDeliverContentTypePayIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypePayMixin",
    "WASmaxInMessageDeliverIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup",
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
        "WASmaxInMessageDeliverIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup",
      ).parseIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          individualDeliverPayNodeOrPayTransactionMessageMixinGroup: r.success
            ? r.value
            : null,
        }),
      );
    }
    l.parseContentTypePayIndividualMixin = e;
  },
  98,
);
