__d(
  "WASmaxOutMessagePublishNewsletterPollCreationMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypePollCreationMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
          o(
            "WASmaxOutMessagePublishContentTypePollCreationMixin",
          ).mergeContentTypePollCreationMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(
                o("WASmaxJsx").smax("plaintext", null),
                n,
              ),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterPollCreationMixin = s;
  },
  98,
);
