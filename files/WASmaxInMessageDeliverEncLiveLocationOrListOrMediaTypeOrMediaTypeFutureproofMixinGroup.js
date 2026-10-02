__d(
  "WASmaxInMessageDeliverEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncListMixin",
    "WASmaxInMessageDeliverEncLiveLocationMixin",
    "WASmaxInMessageDeliverEncMediaTypeFutureproofMixin",
    "WASmaxInMessageDeliverEncMediaTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncLiveLocationMixin",
      ).parseEncLiveLocationMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncLiveLocation",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncList",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncMediaTypeMixin",
      ).parseEncMediaTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "EncMediaType",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverEncMediaTypeFutureproofMixin",
      ).parseEncMediaTypeFutureproofMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "EncMediaTypeFutureproof",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "EncLiveLocation",
              "EncList",
              "EncMediaType",
              "EncMediaTypeFutureproof",
            ],
            [t, n, r, a],
          );
    }
    l.parseEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup = e;
  },
  98,
);
