__d(
  "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors",
      ).parseGetNewsletterMessageUpdatesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterMessageUpdatesClientErrors: r.value,
          })
        : r;
    }
    l.parseGetNewsletterMessageUpdatesResponseClientError = e;
  },
  98,
);
