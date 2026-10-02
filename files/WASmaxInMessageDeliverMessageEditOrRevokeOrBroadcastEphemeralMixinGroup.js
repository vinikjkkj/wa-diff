__d(
  "WASmaxInMessageDeliverMessageEditOrRevokeOrBroadcastEphemeralMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastEphemeralMixin",
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
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Revoke",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverBroadcastEphemeralMixin",
      ).parseBroadcastEphemeralMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastEphemeral",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "Revoke", "BroadcastEphemeral"],
            [t, n, r],
          );
    }
    l.parseMessageEditOrRevokeOrBroadcastEphemeralMixinGroup = e;
  },
  98,
);
