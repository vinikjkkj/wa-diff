__d(
  "WASmaxOutMessagePublishUPIPublishSendPayNodeP2POrMMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishUPIPublishSendPayNodeP2MMixin",
    "WASmaxOutMessagePublishUPIPublishSendPayNodeP2PMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.uPIPublishSendPayNodeP2P)
        return o(
          "WASmaxOutMessagePublishUPIPublishSendPayNodeP2PMixin",
        ).mergeUPIPublishSendPayNodeP2PMixin(e, t.uPIPublishSendPayNodeP2P);
      if (t.uPIPublishSendPayNodeP2M)
        return o(
          "WASmaxOutMessagePublishUPIPublishSendPayNodeP2MMixin",
        ).mergeUPIPublishSendPayNodeP2MMixin(e, t.uPIPublishSendPayNodeP2M);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeUPIPublishSendPayNodeP2POrMMixinGroup = e;
  },
  98,
);
