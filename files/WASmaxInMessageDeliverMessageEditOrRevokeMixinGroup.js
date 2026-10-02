__d(
  "WASmaxInMessageDeliverMessageEditOrRevokeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverMessageEditMixin",
    "WASmaxInMessageDeliverRevokeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverMessageEditMixin").parseMessageEditMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MessageEdit",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Revoke", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "Revoke"],
            [t, n],
          );
    }
    l.parseMessageEditOrRevokeMixinGroup = e;
  },
  98,
);
