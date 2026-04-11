__d(
  "WASmaxInNewslettersStatusNewsletterContentMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterStatusContentTypeMixins",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersNewsletterStatusContentTypeMixins",
      ).parseNewsletterStatusContentTypeMixins(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            newsletterStatusContentTypeMixins: n.value,
          })
        : n;
    }
    l.parseStatusNewsletterContentMixin = e;
  },
  98,
);
