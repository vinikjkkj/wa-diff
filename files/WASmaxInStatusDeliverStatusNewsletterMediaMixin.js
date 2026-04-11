__d(
  "WASmaxInStatusDeliverStatusNewsletterMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxInStatusDeliverNewsletterPlaintextPayloadMixin",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "mediatype",
        o("WASmaxInStatusDeliverEnums").ENUM_AUDIO_GIF_IMAGE_VIDEO,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverNewsletterPlaintextPayloadMixin",
      ).parseNewsletterPlaintextPayloadMixin(n.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
      ).parseStatusContentTypeMediaMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                plaintextMediatype: r.value,
                plaintextNewsletterPlaintextPayloadMixin: a.value,
              },
              i.value,
            ),
          )
        : i;
    }
    l.parseStatusNewsletterMediaMixin = e;
  },
  98,
);
