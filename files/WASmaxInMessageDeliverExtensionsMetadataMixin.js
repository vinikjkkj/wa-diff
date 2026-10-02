__d(
  "WASmaxInMessageDeliverExtensionsMetadataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "capability");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "capabilities");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "capability",
        1,
        50,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ capability: r.value })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_flow");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "extensions_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "capabilities",
        s,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "well_version",
        1,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "data_api_version",
        1,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "flow_message_version",
        1,
        void 0,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            extensionsMetadataWellVersion: a.value,
            extensionsMetadataDataApiVersion: i.value,
            extensionsMetadataFlowMessageVersion: l.value,
            extensionsMetadataCapabilities: r.value,
          })
        : l;
    }
    ((l.parseExtensionsMetadataExtensionsMetadataCapabilitiesCapability = e),
      (l.parseExtensionsMetadataExtensionsMetadataCapabilities = s),
      (l.parseExtensionsMetadataMixin = u));
  },
  98,
);
