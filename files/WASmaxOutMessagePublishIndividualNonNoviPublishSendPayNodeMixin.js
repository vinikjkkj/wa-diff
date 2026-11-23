__d(
  "WASmaxOutMessagePublishIndividualNonNoviPublishSendPayNodeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBaseIndividualPublishSendPayNodeMixin",
    "WASmaxOutMessagePublishIntegrationPublishPayNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessagePublishIntegrationPublishPayNodeMixin",
      ).mergeIntegrationPublishPayNodeMixin(
        o(
          "WASmaxOutMessagePublishBaseIndividualPublishSendPayNodeMixin",
        ).mergeBaseIndividualPublishSendPayNodeMixin(
          o("WASmaxJsx").smax("pay", null),
          e,
        ),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualNonNoviPublishSendPayNodeMixin = s;
  },
  98,
);
