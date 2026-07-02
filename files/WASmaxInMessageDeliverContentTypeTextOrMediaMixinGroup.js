__d(
  "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
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
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ContentTypeText", "ContentTypeMedia"],
            [t, n],
          );
    }
    l.parseContentTypeTextOrMediaMixinGroup = e;
  },
  98,
);
