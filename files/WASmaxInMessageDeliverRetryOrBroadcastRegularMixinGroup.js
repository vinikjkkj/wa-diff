__d(
  "WASmaxInMessageDeliverRetryOrBroadcastRegularMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastRegularMixin",
    "WASmaxInMessageDeliverRetryMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverBroadcastRegularMixin",
      ).parseBroadcastRegularMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastRegular",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "BroadcastRegular"],
            [t, n],
          );
    }
    l.parseRetryOrBroadcastRegularMixinGroup = e;
  },
  98,
);
