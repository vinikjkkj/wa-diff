__d(
  "WASmaxInWaffleGenerateAccessTokensResponseSuccess",
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
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping_interval");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentInt(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(r.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pingIntervalElementValue: i.value,
                encryptionMetadataRSAEncryptionMetadataMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseGenerateAccessTokensResponseSuccess = e;
  },
  98,
);
