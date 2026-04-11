__d(
  "WASmaxInNewslettersNewsletterViewsCountViewsOrDeprecatedMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin",
    "WASmaxInNewslettersNewsletterViewsCountViewsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInNewslettersNewsletterViewsCountViewsMixin",
      ).parseNewsletterViewsCountViewsMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterViewsCountViews",
          value: t.value,
        });
      var n = o(
        "WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin",
      ).parseNewsletterViewsCountDeprecatedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterViewsCountDeprecated",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NewsletterViewsCountViews", "NewsletterViewsCountDeprecated"],
            [t, n],
          );
    }
    l.parseNewsletterViewsCountViewsOrDeprecatedMixinGroup = e;
  },
  98,
);
