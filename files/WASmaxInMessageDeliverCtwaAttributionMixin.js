__d(
  "WASmaxInMessageDeliverCtwaAttributionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverClickToWhatsAppAttributionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa_attribution");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverClickToWhatsAppAttributionMixin",
      ).parseClickToWhatsAppAttributionMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "ctwa_attribution",
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ ctwaAttribution: r.value })
        : r;
    }
    ((l.parseCtwaAttributionCtwaAttribution = e),
      (l.parseCtwaAttributionMixin = s));
  },
  98,
);
