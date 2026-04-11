__d(
  "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersStatusNewsletterHistoryWithAddOnsMixin",
      ).parseStatusNewsletterHistoryWithAddOnsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "statuses");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrNewsletterJid,
        t,
        "jid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t,
        "t",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "status", 0, 100, e);
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: r.value,
            t: a.value,
            status: i.value,
          })
        : i;
    }
    ((l.parseNewsletterStatusResponsePayloadStatus = e),
      (l.parseNewsletterStatusResponsePayloadMixin = s));
  },
  98,
);
