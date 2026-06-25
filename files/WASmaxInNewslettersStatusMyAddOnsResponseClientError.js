__d(
  "WASmaxInNewslettersStatusMyAddOnsResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusMyAddonsClientErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersStatusMyAddonsClientErrors",
      ).parseStatusMyAddonsClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusMyAddonsClientErrors: r.value,
          })
        : r;
    }
    l.parseStatusMyAddOnsResponseClientError = e;
  },
  98,
);
