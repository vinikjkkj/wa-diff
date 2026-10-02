__d(
  "WASmaxInMessageDeliverNativeFlowMessageTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverExtensionsMetadataMixin",
    "WASmaxInMessageDeliverMixedMetadataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "interactive");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "native_flow");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "native_flow",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "name");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "v",
        1,
        void 0,
      );
      if (!i.success) return i;
      var l = o(
          "WASmaxInMessageDeliverExtensionsMetadataMixin",
        ).parseExtensionsMetadataMixin(n.value),
        s = o(
          "WASmaxInMessageDeliverMixedMetadataMixin",
        ).parseMixedMetadataMixin(n.value);
      return o("WAResultOrError").makeResult({
        type: r.value,
        nativeFlowName: a.value,
        nativeFlowV: i.value,
        nativeFlowExtensionsMetadataMixin: l.success ? l.value : null,
        nativeFlowMixedMetadataMixin: s.success ? s.value : null,
      });
    }
    l.parseNativeFlowMessageTypeMixin = e;
  },
  98,
);
