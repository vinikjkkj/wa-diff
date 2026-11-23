__d(
  "WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePayMixin",
    "WASmaxOutMessagePublishIndividualIndividualPublishPayNodeMessageMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.individualIndividualPublishPayNodeMessageMixinArgs,
        n = o("WASmaxMixins").optionalMerge(
          o(
            "WASmaxOutMessagePublishIndividualIndividualPublishPayNodeMessageMixin",
          ).mergeIndividualIndividualPublishPayNodeMessageMixin,
          o(
            "WASmaxOutMessagePublishContentTypePayMixin",
          ).mergeContentTypePayMixin(o("WASmaxJsx").smax("message", null)),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualContentTypePayIndividualMixin = s;
  },
  98,
);
