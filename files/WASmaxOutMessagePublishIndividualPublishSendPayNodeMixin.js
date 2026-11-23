__d(
  "WASmaxOutMessagePublishIndividualPublishSendPayNodeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishIndividualNonNoviPublishSendPayNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutMessagePublishIndividualNonNoviPublishSendPayNodeMixin",
      ).mergeIndividualNonNoviPublishSendPayNodeMixin(
        o("WASmaxJsx").smax("pay", null),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualPublishSendPayNodeMixin = s;
  },
  98,
);
