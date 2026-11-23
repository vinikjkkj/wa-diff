__d(
  "WASmaxOutMessagePublishInteractiveMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNativeFlowMessageTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasInteractiveV1,
        n = e.nativeFlowMessageTypeMixinArgs,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o(
              "WASmaxOutMessagePublishNativeFlowMessageTypeMixin",
            ).mergeNativeFlowMessageTypeMixin(
              o("WASmaxJsx").smax("interactive", {
                v: o("WASmaxAttrs").OPTIONAL_LITERAL("1", t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeInteractiveMixin = s;
  },
  98,
);
