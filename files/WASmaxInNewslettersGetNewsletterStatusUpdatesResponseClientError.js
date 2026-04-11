__d(
  "WASmaxInNewslettersGetNewsletterStatusUpdatesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterStatusUpdatesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterStatusUpdatesClientErrors",
      ).parseGetNewsletterStatusUpdatesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterStatusUpdatesClientErrors: r.value,
          })
        : r;
    }
    l.parseGetNewsletterStatusUpdatesResponseClientError = e;
  },
  98,
);
