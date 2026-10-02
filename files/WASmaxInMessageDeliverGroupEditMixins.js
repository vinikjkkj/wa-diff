__d(
  "WASmaxInMessageDeliverGroupEditMixins",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminRevokeMixin",
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
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Revoke",
          value: r.value,
        });
      var a = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "AdminRevoke",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "MessagePin", "Revoke", "AdminRevoke"],
            [t, n, r, a],
          );
    }
    l.parseGroupEditMixins = e;
  },
  98,
);
