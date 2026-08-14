__d(
  "WASmaxOutStatusPublishStatusBroadcastDirectedMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusDeprecatedParticipantHashMixin",
    "WASmaxOutStatusPublishStatusDirectedRetryParticipantMixin",
    "WASmaxOutStatusPublishStatusEditOrRevokeMixinGroup",
    "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup",
    "WASmaxOutStatusPublishStatusNoExtraFanoutMixin",
    "WASmaxOutStatusPublishStatusReportingMixin",
    "WASmaxOutStatusPublishStatusSenderKeyBucketingModeMixin",
    "WASmaxOutStatusPublishTCTokenMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.statusReportingMixinArgs,
        r = e.statusDeprecatedParticipantHashMixinArgs,
        a = e.statusSenderKeyBucketingModeMixinArgs,
        i = e.statusDirectedRetryParticipantMixinArgs,
        l = e.hasStatusNoExtraFanout,
        s = e.tCTokenMixinArgs,
        u = e.statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs,
        c = e.statusEditOrRevokeMixinGroupArgs,
        d = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutStatusPublishStatusEditOrRevokeMixinGroup")
            .mergeStatusEditOrRevokeMixinGroup,
          o(
            "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup",
          ).mergeStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup(
            t.optionalMerge(
              o("WASmaxOutStatusPublishTCTokenMixin").mergeTCTokenMixin,
              t.optionalMerge(
                o("WASmaxOutStatusPublishStatusNoExtraFanoutMixin")
                  .mergeStatusNoExtraFanoutMixin,
                t.optionalMerge(
                  o("WASmaxOutStatusPublishStatusDirectedRetryParticipantMixin")
                    .mergeStatusDirectedRetryParticipantMixin,
                  t.optionalMerge(
                    o("WASmaxOutStatusPublishStatusSenderKeyBucketingModeMixin")
                      .mergeStatusSenderKeyBucketingModeMixin,
                    t.optionalMerge(
                      o(
                        "WASmaxOutStatusPublishStatusDeprecatedParticipantHashMixin",
                      ).mergeStatusDeprecatedParticipantHashMixin,
                      t.optionalMerge(
                        o("WASmaxOutStatusPublishStatusReportingMixin")
                          .mergeStatusReportingMixin,
                        o("WASmaxJsx").smax("status", null),
                        n,
                      ),
                      r,
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
          ),
          c,
        );
      return d;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusBroadcastDirectedMixin = s;
  },
  98,
);
