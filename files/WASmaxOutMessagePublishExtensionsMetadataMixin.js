__d(
  "WASmaxOutMessagePublishExtensionsMetadataMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.capabilityArgs,
        n = o("WASmaxJsx").smax(
          "capabilities",
          null,
          o("WASmaxChildren").REPEATED_CHILD(s, t, 1, 50),
        );
      return n;
    }
    function s(e) {
      var t = e.capabilityName,
        n = o("WASmaxJsx").smax("capability", {
          name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function u(t) {
      var n = t.capabilitiesArgs,
        r = t.extensionsMetadataWellVersion,
        a = t.extensionsMetadataDataApiVersion,
        i = t.extensionsMetadataFlowMessageVersion,
        l = o("WASmaxJsx").smax(
          "native_flow",
          null,
          o("WASmaxJsx").smax(
            "extensions_metadata",
            {
              well_version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, r),
              data_api_version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, a),
              flow_message_version: o("WAWap").INT(i),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
        );
      return l;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeExtensionsMetadataExtensionsMetadataCapabilities = e),
      (l.makeExtensionsMetadataExtensionsMetadataCapabilitiesCapability = s),
      (l.mergeExtensionsMetadataMixin = c));
  },
  98,
);
