__d(
  "WASmaxInKeyTransparencySingleSerializedProofSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyRootHashMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "serialized_proof",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "root_hash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(n.value, 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxInKeyTransparencyRootHashMixin").parseRootHashMixin(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            serializedProofElementValue: a.value,
            rootHashRootHashMixin: i.value,
          })
        : i;
    }
    l.parseSingleSerializedProofSuccessMixin = e;
  },
  98,
);
