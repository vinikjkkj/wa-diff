__d(
  "WASmaxOutStatusPublishStatusToDeviceMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishEncTypeIndividualMixin",
    "WASmaxOutStatusPublishEncVersion",
    "WASmaxOutStatusPublishStatusEncHideDecryptFailMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = e.encTypeIndividualMixinArgs,
        r = e.hasStatusEncHideDecryptFail,
        a = e.encVersionArgs,
        i = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").JID(t) },
          o("WASmaxOutStatusPublishEncVersion").mergeEncVersion(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutStatusPublishStatusEncHideDecryptFailMixin")
                .mergeStatusEncHideDecryptFailMixin,
              o(
                "WASmaxOutStatusPublishEncTypeIndividualMixin",
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
    l.mergeStatusToDeviceMixin = s;
  },
  98,
);
