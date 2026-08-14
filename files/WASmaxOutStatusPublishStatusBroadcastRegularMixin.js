__d(
  "WASmaxOutStatusPublishStatusBroadcastRegularMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishEncMediaTypeMixin",
    "WASmaxOutStatusPublishEncRetryMixin",
    "WASmaxOutStatusPublishEncTypeSenderKeyMixin",
    "WASmaxOutStatusPublishEncVersion",
    "WASmaxOutStatusPublishStatusEditOrRevokeMixinGroup",
    "WASmaxOutStatusPublishStatusEncFanoutMixin",
    "WASmaxOutStatusPublishStatusEncHideDecryptFailMixin",
    "WASmaxOutStatusPublishStatusParticipantHashMixin",
    "WASmaxOutStatusPublishStatusReportingMixin",
    "WASmaxOutStatusPublishStatusSenderKeyBucketingModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encMediaTypeMixinArgs,
        n = e.hasStatusEncHideDecryptFail,
        r = e.encRetryMixinArgs,
        a = e.encVersionArgs,
        i = o("WASmaxOutStatusPublishEncVersion").mergeEncVersion(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishEncRetryMixin").mergeEncRetryMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutStatusPublishStatusEncHideDecryptFailMixin")
                .mergeStatusEncHideDecryptFailMixin,
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutStatusPublishEncMediaTypeMixin")
                  .mergeEncMediaTypeMixin,
                o(
                  "WASmaxOutStatusPublishEncTypeSenderKeyMixin",
                ).mergeEncTypeSenderKeyMixin(
                  o("WASmaxJsx").smax("enc", null),
                  e,
                ),
                t,
              ),
              n,
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function s(t) {
      var n,
        r = t.encArgs,
        a = t.statusParticipantHashMixinArgs,
        i = t.statusEncFanoutMixinArgs,
        l = t.statusReportingMixinArgs,
        s = t.statusSenderKeyBucketingModeMixinArgs,
        u = t.statusEditOrRevokeMixinGroupArgs,
        c = (n = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutStatusPublishStatusEditOrRevokeMixinGroup")
            .mergeStatusEditOrRevokeMixinGroup,
          n.optionalMerge(
            o("WASmaxOutStatusPublishStatusSenderKeyBucketingModeMixin")
              .mergeStatusSenderKeyBucketingModeMixin,
            n.optionalMerge(
              o("WASmaxOutStatusPublishStatusReportingMixin")
                .mergeStatusReportingMixin,
              n.optionalMerge(
                o("WASmaxOutStatusPublishStatusEncFanoutMixin")
                  .mergeStatusEncFanoutMixin,
                n.optionalMerge(
                  o("WASmaxOutStatusPublishStatusParticipantHashMixin")
                    .mergeStatusParticipantHashMixin,
                  o("WASmaxJsx").smax(
                    "status",
                    null,
                    o("WASmaxChildren").REPEATED_CHILD(e, r, 1, 5),
                  ),
                  a,
                ),
                i,
              ),
              l,
            ),
            s,
          ),
          u,
        );
      return c;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeStatusBroadcastRegularEnc = e),
      (l.mergeStatusBroadcastRegularMixin = u));
  },
  98,
);
