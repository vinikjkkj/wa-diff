__d(
  "WASmaxInMessageDeliverContentTypeTextOrMediaSingleMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
      ).parseContentTypeMediaSingleMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeMediaSingle",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ContentTypeText", "ContentTypeMediaSingle"],
            [t, n],
          );
    }
    l.parseContentTypeTextOrMediaSingleMixinGroup = e;
  },
  98,
);
