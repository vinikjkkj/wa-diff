__d(
  "WASmaxOutMessagePublishNewsletterMediaMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishMediaMetaMixin",
    "WASmaxOutMessagePublishMessageAssociationTypeMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.messageAssociationTypeMixinArgs,
        r = e.mediaMetaMixinArgs,
        a = e.plaintextMediatype,
        i = e.payloadMixinArgs,
        l = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishMediaMetaMixin").mergeMediaMetaMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishMessageAssociationTypeMixin")
              .mergeMessageAssociationTypeMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
              o(
                "WASmaxOutMessagePublishContentTypeMediaMixin",
              ).mergeContentTypeMediaMixin(
                o("WASmaxJsx").smax(
                  "message",
                  null,
                  o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(
                    o("WASmaxJsx").smax("plaintext", {
                      mediatype: o("WAWap").CUSTOM_STRING(a),
                    }),
                    i,
                  ),
                ),
              ),
              t,
            ),
            n,
          ),
          r,
        );
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMediaMixin = s;
  },
  98,
);
