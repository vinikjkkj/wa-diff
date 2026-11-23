__d(
  "WASmaxOutMessagePublishMixedMetadataMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.paymentsMetadataVersion,
        n = o("WASmaxJsx").smax(
          "native_flow",
          null,
          o("WASmaxJsx").smax(
            "mixed_metadata",
            null,
            o("WASmaxJsx").smax("payments_metadata", {
              version: o("WAWap").INT(t),
            }),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMixedMetadataMixin = s;
  },
  98,
);
