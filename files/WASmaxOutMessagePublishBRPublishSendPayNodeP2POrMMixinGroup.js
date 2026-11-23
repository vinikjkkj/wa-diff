__d(
  "WASmaxOutMessagePublishBRPublishSendPayNodeP2POrMMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishBRPublishSendPayNodeP2MMixin",
    "WASmaxOutMessagePublishBRPublishSendPayNodeP2PMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isBRPublishSendPayNodeP2P)
        return o(
          "WASmaxOutMessagePublishBRPublishSendPayNodeP2PMixin",
        ).mergeBRPublishSendPayNodeP2PMixin(e);
      if (t.bRPublishSendPayNodeP2M)
        return o(
          "WASmaxOutMessagePublishBRPublishSendPayNodeP2MMixin",
        ).mergeBRPublishSendPayNodeP2MMixin(e, t.bRPublishSendPayNodeP2M);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeBRPublishSendPayNodeP2POrMMixinGroup = e;
  },
  98,
);
