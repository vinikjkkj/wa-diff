__d(
  "WASmaxInStatusDeliverStatusEditOrRevokeOrAdminRevokeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusAdminRevokeMixin",
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
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "StatusRevoke",
          value: n.value,
        });
      var r = o(
        "WASmaxInStatusDeliverStatusAdminRevokeMixin",
      ).parseStatusAdminRevokeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "StatusAdminRevoke",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusEdit", "StatusRevoke", "StatusAdminRevoke"],
            [t, n, r],
          );
    }
    l.parseStatusEditOrRevokeOrAdminRevokeMixinGroup = e;
  },
  98,
);
