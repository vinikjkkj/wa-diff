__d(
  "WASmaxOutMessagePublishNativeFlowMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizNativeFlowName,
        n = e.bizNativeFlowVersion,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", {
            native_flow_name: o("WAWap").CUSTOM_STRING(t),
            native_flow_version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNativeFlowMixin = s;
  },
  98,
);
