__d(
  "WASmaxInMessageDeliverMessageEditOrMessagePinOrRevokeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverMessageEditMixin",
    "WASmaxInMessageDeliverMessagePinMixin",
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
      var n = o("WASmaxInMessageDeliverMessagePinMixin").parseMessagePinMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MessagePin",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({ name: "Revoke", value: r.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "MessagePin", "Revoke"],
            [t, n, r],
          );
    }
    l.parseMessageEditOrMessagePinOrRevokeMixinGroup = e;
  },
  98,
);
