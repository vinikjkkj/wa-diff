__d(
  "WASmaxInNewslettersMyAddOnsResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersMyAddonsClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersMyAddonsClientErrors",
      ).parseMyAddonsClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({ myAddonsClientErrors: r.value })
        : r;
    }
    l.parseMyAddOnsResponseClientError = e;
  },
  98,
);
