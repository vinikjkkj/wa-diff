__d(
  "WASmaxInNewslettersGetNewsletterStatusesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterStatusesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterStatusesClientErrors",
      ).parseGetNewsletterStatusesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterStatusesClientErrors: r.value,
          })
        : r;
    }
    l.parseGetNewsletterStatusesResponseClientError = e;
  },
  98,
);
