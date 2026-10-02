__d(
  "WASmaxInMessageDeliverMixedMetadataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_flow");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mixed_metadata");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "payments_metadata",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(r.value, "version", 1, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            mixedMetadataPaymentsMetadataVersion: a.value,
          })
        : a;
    }
    l.parseMixedMetadataMixin = e;
  },
  98,
);
