__d(
  "WASmaxInMessageDeliverNewsletterTextOrMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterMediaMixin",
    "WASmaxInMessageDeliverNewsletterTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverNewsletterTextMixin",
      ).parseNewsletterTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverNewsletterMediaMixin",
      ).parseNewsletterMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NewsletterText", "NewsletterMedia"],
            [t, n],
          );
    }
    l.parseNewsletterTextOrMediaMixinGroup = e;
  },
  98,
);
