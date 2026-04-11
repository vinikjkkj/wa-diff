__d(
  "WASmaxOutMessagePublishNewsletterClientIDMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMsgMetaOriginMixin",
    "WASmaxOutMessagePublishNewsletterClientIdContent",
    "WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageId,
        n = e.msgMetaOriginMixinArgs,
        r = e.senderContentTypeMediaRCATMixinArgs,
        a = e.newsletterClientIdContentArgs,
        i = o(
          "WASmaxOutMessagePublishNewsletterClientIdContent",
        ).mergeNewsletterClientIdContent(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin")
              .mergeSenderContentTypeMediaRCATMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishMsgMetaOriginMixin")
                .mergeMsgMetaOriginMixin,
              o("WASmaxJsx").smax("message", { id: o("WAWap").STANZA_ID(t) }),
              n,
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterClientIDMixin = s;
  },
  98,
);
