__d(
  "WASmaxInNewslettersSubscribeToLiveUpdatesResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors",
      ).parseSubscribeToLiveUpdatesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            subscribeToLiveUpdatesClientErrors: r.value,
          })
        : r;
    }
    l.parseSubscribeToLiveUpdatesResponseClientError = e;
  },
  98,
);
