__d(
  "WASmaxInMessageDeliverEncStateOrSessionTypeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncSessionTypeMixin",
    "WASmaxInMessageDeliverEncStateMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverEncStateMixin").parseEncStateMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncState",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncSessionTypeMixin",
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
