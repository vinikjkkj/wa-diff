__d(
  "WASmaxOutMessagePublishIndividualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishIndividualPublishSendPayNodeMixin",
    "WASmaxOutMessagePublishIndividualRequestPayNodeMixin",
    "WASmaxOutMessagePublishPayInviteNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.individualPublishSendPayNode)
        return o(
          "WASmaxOutMessagePublishIndividualPublishSendPayNodeMixin",
        ).mergeIndividualPublishSendPayNodeMixin(
          e,
          t.individualPublishSendPayNode,
        );
      if (t.individualRequestPayNode)
        return o(
          "WASmaxOutMessagePublishIndividualRequestPayNodeMixin",
        ).mergeIndividualRequestPayNodeMixin(e, t.individualRequestPayNode);
      if (t.payInviteNode)
        return o(
          "WASmaxOutMessagePublishPayInviteNodeMixin",
        ).mergePayInviteNodeMixin(e, t.payInviteNode);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeIndividualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroup =
      e;
  },
  98,
);
