__d(
  "WASmaxInStatusDeliverEncStateOrSessionTypeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncSessionTypeMixin",
    "WASmaxInStatusDeliverEncStateMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStatusDeliverEncStateMixin").parseEncStateMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncState",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverEncSessionTypeMixin",
      ).parseEncSessionTypeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncSessionType",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncState", "EncSessionType"],
            [t, n],
          );
    }
    l.parseEncStateOrSessionTypeMixinGroup = e;
  },
  98,
);
