__d(
  "WASmaxInMessageDeliverEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncMediaTypeFutureproofMixin",
    "WASmaxInMessageDeliverEncMediaTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncMediaTypeMixin",
      ).parseEncMediaTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncMediaType",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncMediaTypeFutureproofMixin",
      ).parseEncMediaTypeFutureproofMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncMediaTypeFutureproof",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncMediaType", "EncMediaTypeFutureproof"],
            [t, n],
          );
    }
    l.parseEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup = e;
  },
  98,
);
