__d(
  "WASmaxOutStatusPublishStatusEncFanoutMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishSenderKeyBucketParticipantMixin",
    "WASmaxOutStatusPublishStatusTCTokenMixin",
    "WASmaxOutStatusPublishStatusToDeviceOrUserMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusTCTokenMixinArgs,
        n = e.senderKeyBucketParticipantMixinArgs,
        r = e.statusToDeviceOrUserMixinGroupArgs,
        a = o(
          "WASmaxOutStatusPublishStatusToDeviceOrUserMixinGroup",
        ).mergeStatusToDeviceOrUserMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishSenderKeyBucketParticipantMixin")
              .mergeSenderKeyBucketParticipantMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutStatusPublishStatusTCTokenMixin")
                .mergeStatusTCTokenMixin,
              o("WASmaxJsx").smax("to", null),
              t,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function s(t) {
      var n = t.toArgs,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax(
            "participants",
            null,
            o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 9990998),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeStatusEncFanoutParticipantsTo = e),
      (l.mergeStatusEncFanoutMixin = u));
  },
  98,
);
