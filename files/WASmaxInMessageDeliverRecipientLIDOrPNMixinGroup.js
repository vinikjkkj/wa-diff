__d(
  "WASmaxInMessageDeliverRecipientLIDOrPNMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverRecipientLIDMixin",
    "WASmaxInMessageDeliverRecipientPNMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverRecipientLIDMixin",
      ).parseRecipientLIDMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RecipientLID",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverRecipientPNMixin").parseRecipientPNMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "RecipientPN",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RecipientLID", "RecipientPN"],
            [t, n],
          );
    }
    l.parseRecipientLIDOrPNMixinGroup = e;
  },
  98,
);
