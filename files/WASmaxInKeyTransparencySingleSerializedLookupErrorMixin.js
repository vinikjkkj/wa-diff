__d(
  "WASmaxInKeyTransparencySingleSerializedLookupErrorMixin",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o(
        "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
      ).parseKeyTransparencyErrorTypes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            errorKeyTransparencyErrorTypes: r.value,
          })
        : r;
    }
    l.parseSingleSerializedLookupErrorMixin = e;
  },
  98,
);
