__d(
  "WASmaxOutStatusPublishStatusContentTypeMediaFanoutMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encMediatype,
        n = e.hasEncStickerTypeAvatar,
        r = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("enc", {
            mediatype: o("WAWap").CUSTOM_STRING(t),
            sticker_type: o("WASmaxAttrs").OPTIONAL_LITERAL("avatar", n),
          }),
        );
      return r;
    }
    function s(t) {
      var n = t.toArgs,
        r = o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax(
              "participants",
              null,
              o("WASmaxChildren").HOMOGENEOUS_CHILD(e, n),
            ),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeStatusContentTypeMediaFanoutParticipantsTo = e),
      (l.mergeStatusContentTypeMediaFanoutMixin = u));
  },
  98,
);
