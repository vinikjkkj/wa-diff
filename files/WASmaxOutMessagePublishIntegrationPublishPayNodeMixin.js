__d(
  "WASmaxOutMessagePublishIntegrationPublishPayNodeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroupArgs,
        n = o(
          "WASmaxOutMessagePublishBRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroup",
        ).mergeBRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroup(
          o("WASmaxJsx").smax("pay", null),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIntegrationPublishPayNodeMixin = s;
  },
  98,
);
