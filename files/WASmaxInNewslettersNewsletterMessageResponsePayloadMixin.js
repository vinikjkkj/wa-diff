__d(
  "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMessageHistoryWithAddOnsMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersNewsletterMessageHistoryWithAddOnsMixin",
      ).parseNewsletterMessageHistoryWithAddOnsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "messages");
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
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "message", 0, 300, e);
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: r.value,
            t: a.value,
            message: i.value,
          })
        : i;
    }
    ((l.parseNewsletterMessageResponsePayloadMessage = e),
      (l.parseNewsletterMessageResponsePayloadMixin = s));
  },
  98,
);
