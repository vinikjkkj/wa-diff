__d(
  "WASmaxInKeyTransparencySingleSerializedProofSuccessOrLookupErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencySingleSerializedLookupErrorMixin",
    "WASmaxInKeyTransparencySingleSerializedProofSuccessMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInKeyTransparencySingleSerializedProofSuccessMixin",
      ).parseSingleSerializedProofSuccessMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSerializedProofSuccess",
          value: t.value,
        });
      var n = o(
        "WASmaxInKeyTransparencySingleSerializedLookupErrorMixin",
      ).parseSingleSerializedLookupErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "SingleSerializedLookupError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSerializedProofSuccess", "SingleSerializedLookupError"],
            [t, n],
          );
    }
    l.parseSingleSerializedProofSuccessOrLookupErrorMixinGroup = e;
  },
  98,
);
