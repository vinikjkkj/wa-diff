__d(
  "WASmaxInStatusDeliverStatusEncContentTypeMixins",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
    "WASmaxInStatusDeliverStatusContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverStatusContentTypeTextMixin",
      ).parseStatusContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
      ).parseStatusContentTypeMediaMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "StatusContentTypeMedia",
          value: n.value,
        });
      var r = o(
        "WASmaxInStatusDeliverStatusContentTypeReactionMixin",
      ).parseStatusContentTypeReactionMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "StatusContentTypeReaction",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "StatusContentTypeText",
              "StatusContentTypeMedia",
              "StatusContentTypeReaction",
            ],
            [t, n, r],
          );
    }
    l.parseStatusEncContentTypeMixins = e;
  },
  98,
);
