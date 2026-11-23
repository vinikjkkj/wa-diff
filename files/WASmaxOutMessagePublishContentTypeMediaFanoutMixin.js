__d(
  "WASmaxOutMessagePublishContentTypeMediaFanoutMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
    "WASmaxOutMessagePublishSenderContentBindingMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encMediatype,
        n = e.hasEncStickerTypeAvatar,
        r = e.encNativeFlowName,
        a = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("enc", {
            mediatype: o("WAWap").CUSTOM_STRING(t),
            sticker_type: o("WASmaxAttrs").OPTIONAL_LITERAL("avatar", n),
            native_flow_name: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              r,
            ),
          }),
        );
      return a;
    }
    function s(t) {
      var n = t.toArgs,
        r = t.senderContentBindingMixinArgs,
        a = t.contentTypeMediaOrMedianotifyMixinGroupArgs,
        i = o(
          "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
        ).mergeContentTypeMediaOrMedianotifyMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishSenderContentBindingMixin")
              .mergeSenderContentBindingMixin,
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxJsx").smax(
                "participants",
                null,
                o("WASmaxChildren").HOMOGENEOUS_CHILD(e, n),
              ),
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeContentTypeMediaFanoutParticipantsTo = e),
      (l.mergeContentTypeMediaFanoutMixin = u));
  },
  98,
);
