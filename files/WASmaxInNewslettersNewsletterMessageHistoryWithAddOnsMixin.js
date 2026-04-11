__d(
  "WASmaxInNewslettersNewsletterMessageHistoryWithAddOnsMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterForwardsCountMixin",
    "WASmaxInNewslettersNewsletterMessageHistoryMixin",
    "WASmaxInNewslettersNewsletterPollVotesMixin",
    "WASmaxInNewslettersNewsletterReactionsMixin",
    "WASmaxInNewslettersNewsletterResponsesCountMixin",
    "WASmaxInNewslettersNewsletterViewsCountViewsOrDeprecatedMixinGroup",
    "WASmaxInNewslettersReceiverContentTypeMediaRCATMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersNewsletterMessageHistoryMixin",
      ).parseNewsletterMessageHistoryMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInNewslettersNewsletterReactionsMixin",
        ).parseNewsletterReactionsMixin(e),
        a = o(
          "WASmaxInNewslettersNewsletterPollVotesMixin",
        ).parseNewsletterPollVotesMixin(e),
        i = o(
          "WASmaxInNewslettersNewsletterResponsesCountMixin",
        ).parseNewsletterResponsesCountMixin(e),
        l = o(
          "WASmaxInNewslettersReceiverContentTypeMediaRCATMixin",
        ).parseReceiverContentTypeMediaRCATMixin(e),
        s = o(
          "WASmaxInNewslettersNewsletterForwardsCountMixin",
        ).parseNewsletterForwardsCountMixin(e),
        u = o(
          "WASmaxInNewslettersNewsletterViewsCountViewsOrDeprecatedMixinGroup",
        ).parseNewsletterViewsCountViewsOrDeprecatedMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          newsletterReactionsMixin: r.success ? r.value : null,
          newsletterPollVotesMixin: a.success ? a.value : null,
          newsletterResponsesCountMixin: i.success ? i.value : null,
          receiverContentTypeMediaRCATMixin: l.success ? l.value : null,
          newsletterForwardsCountMixin: s.success ? s.value : null,
          newsletterViewsCountViewsOrDeprecatedMixinGroup: u.success
            ? u.value
            : null,
        }),
      );
    }
    l.parseNewsletterMessageHistoryWithAddOnsMixin = e;
  },
  98,
);
