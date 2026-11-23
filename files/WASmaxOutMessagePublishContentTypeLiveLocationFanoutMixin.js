__d(
  "WASmaxOutMessagePublishContentTypeLiveLocationFanoutMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishLiveLocationModeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encDuration,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("enc", {
            mediatype: "livelocation",
            duration: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
          }),
        );
      return n;
    }
    function s(t) {
      var n = t.toArgs,
        r = t.liveLocationModeMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishLiveLocationModeMixin")
            .mergeLiveLocationModeMixin,
          o(
            "WASmaxOutMessagePublishContentTypeMediaMixin",
          ).mergeContentTypeMediaMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxJsx").smax(
                "participants",
                null,
                o("WASmaxChildren").HOMOGENEOUS_CHILD(e, n),
              ),
            ),
          ),
          r,
        );
      return a;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeContentTypeLiveLocationFanoutParticipantsTo = e),
      (l.mergeContentTypeLiveLocationFanoutMixin = u));
  },
  98,
);
