__d(
  "WASmaxOutMessagePublishNewsletterClientIDMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMetaPremiumTypeMixin",
    "WASmaxOutMessagePublishMsgMetaOriginMixin",
    "WASmaxOutMessagePublishNewsletterAIContentMetaMixin",
    "WASmaxOutMessagePublishNewsletterClientIdContent",
    "WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.messageId,
        r = e.msgMetaOriginMixinArgs,
        a = e.senderContentTypeMediaRCATMixinArgs,
        i = e.metaPremiumTypeMixinArgs,
        l = e.hasNewsletterAIContentMeta,
        s = e.newsletterClientIdContentArgs,
        u = o(
          "WASmaxOutMessagePublishNewsletterClientIdContent",
        ).mergeNewsletterClientIdContent(
          (t = o("WASmaxMixins")).optionalMerge(
            o("WASmaxOutMessagePublishNewsletterAIContentMetaMixin")
              .mergeNewsletterAIContentMetaMixin,
            t.optionalMerge(
              o("WASmaxOutMessagePublishMetaPremiumTypeMixin")
                .mergeMetaPremiumTypeMixin,
              t.optionalMerge(
                o("WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin")
                  .mergeSenderContentTypeMediaRCATMixin,
                t.optionalMerge(
                  o("WASmaxOutMessagePublishMsgMetaOriginMixin")
                    .mergeMsgMetaOriginMixin,
                  o("WASmaxJsx").smax("message", {
                    id: o("WAWap").STANZA_ID(n),
                  }),
                  r,
                ),
                a,
              ),
              i,
            ),
            l,
          ),
          s,
        );
      return u;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterClientIDMixin = s;
  },
  98,
);
