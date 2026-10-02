__d(
  "WASmaxInMessageDeliverCtwaConversionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverClickToWhatsAppTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverClickToWhatsAppTypeMixin",
      ).parseClickToWhatsAppTypeMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "ctwa", e);
      return r.success ? o("WAResultOrError").makeResult({ ctwa: r.value }) : r;
    }
    ((l.parseCtwaConversionCtwa = e), (l.parseCtwaConversionMixin = s));
  },
  98,
);
