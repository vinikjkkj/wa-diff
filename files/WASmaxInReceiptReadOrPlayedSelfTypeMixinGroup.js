__d(
  "WASmaxInReceiptReadOrPlayedSelfTypeMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInReceiptPlayedSelfTypeMixin",
    "WASmaxInReceiptReadSelfTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptReadSelfTypeMixin").parseReadSelfTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: t.value,
        });
      var n = o("WASmaxInReceiptPlayedSelfTypeMixin").parsePlayedSelfTypeMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PlayedSelfType",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ReadSelfType", "PlayedSelfType"],
            [t, n],
          );
    }
    l.parseReadOrPlayedSelfTypeMixinGroup = e;
  },
  98,
);
