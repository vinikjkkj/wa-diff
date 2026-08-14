__d(
  "WASmaxInStatusDeliverEncVersion",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncVersion2Mixin",
    "WASmaxInStatusDeliverEncVersion3Mixin",
    "WASmaxInStatusDeliverEncVersionFutureproofMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStatusDeliverEncVersion2Mixin").parseEncVersion2Mixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncVersion2",
          value: t.value,
        });
      var n = o("WASmaxInStatusDeliverEncVersion3Mixin").parseEncVersion3Mixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncVersion3",
          value: n.value,
        });
      var r = o(
        "WASmaxInStatusDeliverEncVersionFutureproofMixin",
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
