__d(
  "WASmaxInReceiptPQPreKeyDeprecatedOrPQKeyMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInReceiptPQKeyMixin",
    "WASmaxInReceiptPQPreKeyDeprecatedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptPQPreKeyDeprecatedMixin",
      ).parsePQPreKeyDeprecatedMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PQPreKeyDeprecated",
          value: t.value,
        });
      var n = o("WASmaxInReceiptPQKeyMixin").parsePQKeyMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "PQKey", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PQPreKeyDeprecated", "PQKey"],
            [t, n],
          );
    }
    l.parsePQPreKeyDeprecatedOrPQKeyMixinGroup = e;
  },
  98,
);
