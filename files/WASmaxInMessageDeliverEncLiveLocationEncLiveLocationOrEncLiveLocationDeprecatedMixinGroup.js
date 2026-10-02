__d(
  "WASmaxInMessageDeliverEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncLiveLocationDeprecatedMixin",
    "WASmaxInMessageDeliverEncLiveLocationMixin",
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
      var n = o(
        "WASmaxInMessageDeliverEncLiveLocationDeprecatedMixin",
      ).parseEncLiveLocationDeprecatedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncLiveLocationDeprecated",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncLiveLocation", "EncLiveLocationDeprecated"],
            [t, n],
          );
    }
    l.parseEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup =
      e;
  },
  98,
);
