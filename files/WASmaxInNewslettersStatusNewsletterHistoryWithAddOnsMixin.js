__d(
  "WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterHistoryMixin",
    "WASmaxInNewslettersStatusNewsletterReactionsMixin",
    "WASmaxInNewslettersStatusNewsletterViewsCountsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersStatusNewsletterHistoryMixin",
      ).parseStatusNewsletterHistoryMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInNewslettersStatusNewsletterReactionsMixin",
        ).parseStatusNewsletterReactionsMixin(e),
        a = o(
          "WASmaxInNewslettersStatusNewsletterViewsCountsMixin",
        ).parseStatusNewsletterViewsCountsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          statusNewsletterReactionsMixin: r.success ? r.value : null,
          statusNewsletterViewsCountsMixin: a.success ? a.value : null,
        }),
      );
    }
    l.parseStatusNewsletterHistoryWithAddOnsMixin = e;
  },
  98,
);
