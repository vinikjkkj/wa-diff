__d(
  "WASmaxInNewslettersNewsletterMessageHistoryContent",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterEditMixin",
    "WASmaxInNewslettersNewsletterMediaMixin",
    "WASmaxInNewslettersNewsletterPollCreationMixin",
    "WASmaxInNewslettersNewsletterPollResultSnapshotMixin",
    "WASmaxInNewslettersNewsletterQuestionMixin",
    "WASmaxInNewslettersNewsletterQuestionReplyMixin",
    "WASmaxInNewslettersNewsletterQuizCreationMixin",
    "WASmaxInNewslettersNewsletterRevokeMixin",
    "WASmaxInNewslettersNewsletterTextMixin",
    "WASmaxInNewslettersNewsletterWAMOEmptyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInNewslettersNewsletterQuestionMixin",
      ).parseNewsletterQuestionMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestion",
          value: t.value,
        });
      var n = o(
        "WASmaxInNewslettersNewsletterEditMixin",
      ).parseNewsletterEditMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterEdit",
          value: n.value,
        });
      var r = o(
        "WASmaxInNewslettersNewsletterQuestionReplyMixin",
      ).parseNewsletterQuestionReplyMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReply",
          value: r.value,
        });
      var a = o(
        "WASmaxInNewslettersNewsletterRevokeMixin",
      ).parseNewsletterRevokeMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterRevoke",
          value: a.value,
        });
      var i = o(
        "WASmaxInNewslettersNewsletterTextMixin",
      ).parseNewsletterTextMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: i.value,
        });
      var l = o(
        "WASmaxInNewslettersNewsletterMediaMixin",
      ).parseNewsletterMediaMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterMedia",
          value: l.value,
        });
      var s = o(
        "WASmaxInNewslettersNewsletterPollCreationMixin",
      ).parseNewsletterPollCreationMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterPollCreation",
          value: s.value,
        });
      var u = o(
        "WASmaxInNewslettersNewsletterQuizCreationMixin",
      ).parseNewsletterQuizCreationMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuizCreation",
          value: u.value,
        });
      var c = o(
        "WASmaxInNewslettersNewsletterPollResultSnapshotMixin",
      ).parseNewsletterPollResultSnapshotMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterPollResultSnapshot",
          value: c.value,
        });
      var d = o(
        "WASmaxInNewslettersNewsletterWAMOEmptyMixin",
      ).parseNewsletterWAMOEmptyMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterWAMOEmpty",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "NewsletterQuestion",
              "NewsletterEdit",
              "NewsletterQuestionReply",
              "NewsletterRevoke",
              "NewsletterText",
              "NewsletterMedia",
              "NewsletterPollCreation",
              "NewsletterQuizCreation",
              "NewsletterPollResultSnapshot",
              "NewsletterWAMOEmpty",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    l.parseNewsletterMessageHistoryContent = e;
  },
  98,
);
