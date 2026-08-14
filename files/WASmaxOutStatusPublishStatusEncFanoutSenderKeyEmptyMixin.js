__d(
  "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishEncRetryMixin",
    "WASmaxOutStatusPublishEncTypeSenderKeyEmptyMixin",
    "WASmaxOutStatusPublishEncVersion",
    "WASmaxOutStatusPublishStatusEncFanoutMixin",
    "WASmaxOutStatusPublishStatusEncHideDecryptFailMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encTypeSenderKeyEmptyMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i = o(
          "WASmaxOutStatusPublishStatusEncFanoutMixin",
        ).mergeStatusEncFanoutMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxOutStatusPublishEncVersion").mergeEncVersion(
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutStatusPublishEncRetryMixin").mergeEncRetryMixin,
                o("WASmaxMixins").optionalMerge(
                  o("WASmaxOutStatusPublishStatusEncHideDecryptFailMixin")
                    .mergeStatusEncHideDecryptFailMixin,
                  o(
                    "WASmaxOutStatusPublishEncTypeSenderKeyEmptyMixin",
                  ).mergeEncTypeSenderKeyEmptyMixin(
                    o("WASmaxJsx").smax("enc", null),
                    t,
                  ),
                  n,
                ),
                r,
              ),
              a,
            ),
          ),
          e,
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusEncFanoutSenderKeyEmptyMixin = s;
  },
  98,
);
