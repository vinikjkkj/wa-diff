__d(
  "WASmaxOutMessagePublishIndividualIndividualPublishPayNodeMessageMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishIndividualPublishPayNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "message",
        null,
        o(
          "WASmaxOutMessagePublishIndividualPublishPayNodeMixin",
        ).mergeIndividualPublishPayNodeMixin(
          o("WASmaxJsx").smax("pay", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualIndividualPublishPayNodeMessageMixin = s;
  },
  98,
);
