__d(
  "WASmaxInStatusDeliverStatusEditOrRevokeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEditMixin",
    "WASmaxInStatusDeliverStatusRevokeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStatusDeliverStatusEditMixin").parseStatusEditMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusEdit",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverStatusRevokeMixin",
      ).parseStatusRevokeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusRevoke",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusEdit", "StatusRevoke"],
            [t, n],
          );
    }
    l.parseStatusEditOrRevokeMixinGroup = e;
  },
  98,
);
