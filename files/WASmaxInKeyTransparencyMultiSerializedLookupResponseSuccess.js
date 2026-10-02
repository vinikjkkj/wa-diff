__d(
  "WASmaxInKeyTransparencyMultiSerializedLookupResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyIQResultResponseMixin",
    "WASmaxInKeyTransparencySingleSerializedProofSuccessOrLookupErrorMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = o(
        "WASmaxInKeyTransparencySingleSerializedProofSuccessOrLookupErrorMixinGroup",
      ).parseSingleSerializedProofSuccessOrLookupErrorMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            singleSerializedProofSuccessOrLookupErrorMixinGroup: n.value,
          })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o(
        "WASmaxInKeyTransparencyIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "single_serialized_proof",
        1,
        2,
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              singleSerializedProof: i.value,
            }),
          )
        : i;
    }
    ((l.parseMultiSerializedLookupResponseSuccessSingleSerializedProof = e),
      (l.parseMultiSerializedLookupResponseSuccess = s));
  },
  98,
);
