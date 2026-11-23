__d(
  "WASmaxOutMessagePublishToDeviceMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
    "WASmaxOutMessagePublishEncTypeIndividualMixin",
    "WASmaxOutMessagePublishEncVersion",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = e.encTypeIndividualMixinArgs,
        r = e.encMediaTypeDeprecatedMixinArgs,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").JID(t) },
          o("WASmaxOutMessagePublishEncVersion").mergeEncVersion(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin")
                .mergeEncMediaTypeDeprecatedMixin,
              o(
                "WASmaxOutMessagePublishEncTypeIndividualMixin",
              ).mergeEncTypeIndividualMixin(
                o("WASmaxJsx").smax("enc", null),
                n,
              ),
              r,
            ),
            a,
          ),
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeToDeviceMixin = s;
  },
  98,
);
