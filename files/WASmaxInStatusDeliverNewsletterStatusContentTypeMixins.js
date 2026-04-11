__d(
  "WASmaxInStatusDeliverNewsletterStatusContentTypeMixins",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusNewsletterMediaMixin",
    "WASmaxInStatusDeliverStatusNewsletterReactionMixin",
    "WASmaxInStatusDeliverStatusNewsletterReactionRevokeMixin",
    "WASmaxInStatusDeliverStatusNewsletterRevokeMixin",
    "WASmaxInStatusDeliverStatusNewsletterTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverStatusNewsletterRevokeMixin",
      ).parseStatusNewsletterRevokeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusNewsletterRevoke",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverStatusNewsletterTextMixin",
      ).parseStatusNewsletterTextMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "StatusNewsletterText",
          value: n.value,
        });
      var r = o(
        "WASmaxInStatusDeliverStatusNewsletterMediaMixin",
      ).parseStatusNewsletterMediaMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "StatusNewsletterMedia",
          value: r.value,
        });
      var a = o(
        "WASmaxInStatusDeliverStatusNewsletterReactionMixin",
      ).parseStatusNewsletterReactionMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "StatusNewsletterReaction",
          value: a.value,
        });
      var i = o(
        "WASmaxInStatusDeliverStatusNewsletterReactionRevokeMixin",
      ).parseStatusNewsletterReactionRevokeMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "StatusNewsletterReactionRevoke",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "StatusNewsletterRevoke",
              "StatusNewsletterText",
              "StatusNewsletterMedia",
              "StatusNewsletterReaction",
              "StatusNewsletterReactionRevoke",
            ],
            [t, n, r, a, i],
          );
    }
    l.parseNewsletterStatusContentTypeMixins = e;
  },
  98,
);
