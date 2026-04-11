__d(
  "WASmaxInStatusDeliverIncomingNewsletterStatusRequest",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromNewsletterMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverFromNewsletterMixin",
      ).parseFromNewsletterMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: n.value }, r.value),
          )
        : r;
    }
    l.parseIncomingNewsletterStatusRequest = e;
  },
  98,
);
