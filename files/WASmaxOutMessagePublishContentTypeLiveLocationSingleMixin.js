__d(
  "WASmaxOutMessagePublishContentTypeLiveLocationSingleMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
    "WASmaxOutMessagePublishLiveLocationModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.liveLocationModeMixinArgs,
        n =
          e.encLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroupArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishLiveLocationModeMixin")
            .mergeLiveLocationModeMixin,
          o(
            "WASmaxOutMessagePublishContentTypeMediaMixin",
          ).mergeContentTypeMediaMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o(
                "WASmaxOutMessagePublishEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
              ).mergeEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup(
                o("WASmaxJsx").smax("enc", null),
                n,
              ),
            ),
          ),
          t,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypeLiveLocationSingleMixin = s;
  },
  98,
);
