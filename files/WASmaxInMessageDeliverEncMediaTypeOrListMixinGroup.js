__d(
  "WASmaxInMessageDeliverEncMediaTypeOrListMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncListMixin",
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
      var n = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "EncList", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncMediaType", "EncList"],
            [t, n],
          );
    }
    l.parseEncMediaTypeOrListMixinGroup = e;
  },
  98,
);
