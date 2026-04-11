__d(
  "WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.plaintextContentId,
        n = o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax("plaintext", {
              mediatype: "url",
              content_id: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
            }),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSenderContentTypeMediaRCATMixin = s;
  },
  98,
);
