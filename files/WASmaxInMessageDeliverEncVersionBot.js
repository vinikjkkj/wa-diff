__d(
  "WASmaxInMessageDeliverEncVersionBot",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncVersion2Mixin",
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
      var n = o(
        "WASmaxInMessageDeliverEncVersionFutureproofMixin",
      ).parseEncVersionFutureproofMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncVersionFutureproof",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncVersion2", "EncVersionFutureproof"],
            [t, n],
          );
    }
    l.parseEncVersionBot = e;
  },
  98,
);
