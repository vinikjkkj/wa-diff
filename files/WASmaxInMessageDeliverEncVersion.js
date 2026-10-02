__d(
  "WASmaxInMessageDeliverEncVersion",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncVersion2Mixin",
    "WASmaxInMessageDeliverEncVersion3Mixin",
    "WASmaxInMessageDeliverEncVersionFutureproofMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverEncVersion2Mixin").parseEncVersion2Mixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncVersion2",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverEncVersion3Mixin").parseEncVersion3Mixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncVersion3",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncVersionFutureproofMixin",
      ).parseEncVersionFutureproofMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EncVersionFutureproof",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncVersion2", "EncVersion3", "EncVersionFutureproof"],
            [t, n, r],
          );
    }
    l.parseEncVersion = e;
  },
  98,
);
