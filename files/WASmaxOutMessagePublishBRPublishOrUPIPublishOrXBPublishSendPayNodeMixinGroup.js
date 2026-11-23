__d(
  "WASmaxOutMessagePublishBRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishBRPublishSendPayNodeMixin",
    "WASmaxOutMessagePublishUPIPublishSendPayNodeMixin",
    "WASmaxOutMessagePublishXBPublishSendPayNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.bRPublishSendPayNode)
        return o(
          "WASmaxOutMessagePublishBRPublishSendPayNodeMixin",
        ).mergeBRPublishSendPayNodeMixin(e, t.bRPublishSendPayNode);
      if (t.uPIPublishSendPayNode)
        return o(
          "WASmaxOutMessagePublishUPIPublishSendPayNodeMixin",
        ).mergeUPIPublishSendPayNodeMixin(e, t.uPIPublishSendPayNode);
      if (t.xBPublishSendPayNode)
        return o(
          "WASmaxOutMessagePublishXBPublishSendPayNodeMixin",
        ).mergeXBPublishSendPayNodeMixin(e, t.xBPublishSendPayNode);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeBRPublishOrUPIPublishOrXBPublishSendPayNodeMixinGroup = e;
  },
  98,
);
