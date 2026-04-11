__d(
  "WASmaxInNewslettersNewsletterMessageHistoryMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersAdminProfileMetaMixin",
    "WASmaxInNewslettersNewsletterMessageHistoryContent",
    "WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin",
    "WASmaxInNewslettersNewsletterMessageOriginalTimestampMixin",
    "WASmaxInNewslettersPaidPartnershipContentMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        "id",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_sender",
        "true",
      );
      if (!i.success) return i;
      var l = o(
          "WASmaxInNewslettersNewsletterMessageOriginalTimestampMixin",
        ).parseNewsletterMessageOriginalTimestampMixin(e),
        s = o(
          "WASmaxInNewslettersNewsletterMessageLastEditTimestampMixin",
        ).parseNewsletterMessageLastEditTimestampMixin(e),
        u = o(
          "WASmaxInNewslettersAdminProfileMetaMixin",
        ).parseAdminProfileMetaMixin(e),
        c = o(
          "WASmaxInNewslettersPaidPartnershipContentMixin",
        ).parsePaidPartnershipContentMixin(e),
        d = o(
          "WASmaxInNewslettersNewsletterMessageHistoryContent",
        ).parseNewsletterMessageHistoryContent(e);
      return o("WAResultOrError").makeResult({
        id: n.value,
        serverId: r.value,
        t: a.value,
        isSender: i.value,
        newsletterMessageOriginalTimestampMixin: l.success ? l.value : null,
        newsletterMessageLastEditTimestampMixin: s.success ? s.value : null,
        adminProfileMetaMixin: u.success ? u.value : null,
        hasPaidPartnershipContentMixin: c.success,
        newsletterMessageHistoryContent: d.success ? d.value : null,
      });
    }
    l.parseNewsletterMessageHistoryMixin = e;
  },
  98,
);
