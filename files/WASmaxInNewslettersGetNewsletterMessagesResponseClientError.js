__d(
  "WASmaxInNewslettersGetNewsletterMessagesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterMessagesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterMessagesClientErrors",
      ).parseGetNewsletterMessagesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterMessagesClientErrors: r.value,
          })
        : r;
    }
    l.parseGetNewsletterMessagesResponseClientError = e;
  },
  98,
);
