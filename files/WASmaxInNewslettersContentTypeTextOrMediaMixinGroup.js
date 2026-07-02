__d(
  "WASmaxInNewslettersContentTypeTextOrMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeMediaMixin",
    "WASmaxInNewslettersContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInNewslettersContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInNewslettersContentTypeMediaMixin",
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
