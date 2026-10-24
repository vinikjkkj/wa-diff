__d(
  "WASmaxInNewslettersGetMyNewsletterResponsesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterResponsesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterResponsesClientErrors",
      ).parseGetNewsletterResponsesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterResponsesClientErrors: r.value,
          })
        : r;
    }
    l.parseGetMyNewsletterResponsesResponseClientError = e;
  },
  98,
);
