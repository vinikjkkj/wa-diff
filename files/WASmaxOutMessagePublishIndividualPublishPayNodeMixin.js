__d(
  "WASmaxOutMessagePublishIndividualPublishPayNodeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishIndividualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e.individualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroupArgs,
        n = o(
          "WASmaxOutMessagePublishIndividualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroup",
        ).mergeIndividualPublishSendPayOrIndividualRequestPayOrPayInviteNodeMixinGroup(
          o("WASmaxJsx").smax("pay", null),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualPublishPayNodeMixin = s;
  },
  98,
);
