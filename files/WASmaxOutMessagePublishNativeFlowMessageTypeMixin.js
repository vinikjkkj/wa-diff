__d(
  "WASmaxOutMessagePublishNativeFlowMessageTypeMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishExtensionsMetadataMixin",
    "WASmaxOutMessagePublishMixedMetadataMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.nativeFlowName,
        n = e.nativeFlowV,
        r = e.extensionsMetadataMixinArgs,
        a = e.mixedMetadataMixinArgs,
        i = o("WASmaxJsx").smax(
          "interactive",
          { type: "native_flow" },
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishMixedMetadataMixin")
              .mergeMixedMetadataMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishExtensionsMetadataMixin")
                .mergeExtensionsMetadataMixin,
              o("WASmaxJsx").smax("native_flow", {
                name: o("WAWap").CUSTOM_STRING(t),
                v: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
              }),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNativeFlowMessageTypeMixin = s;
  },
  98,
);
