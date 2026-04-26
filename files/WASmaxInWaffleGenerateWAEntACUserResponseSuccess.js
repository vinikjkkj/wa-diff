__d(
  "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxInWaffleRSAEncryptionMetadataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "encryption_metadata",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encryptionMetadataRSAEncryptionMetadataMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGenerateWAEntACUserResponseSuccess = e;
  },
  98,
);
