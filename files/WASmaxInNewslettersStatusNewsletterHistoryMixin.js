__d(
  "WASmaxInNewslettersStatusNewsletterHistoryMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusLastEditTimestampMixin",
    "WASmaxInNewslettersStatusNewsletterContentMixin",
    "WASmaxInNewslettersStatusOriginalTimestampMixin",
    "WASmaxInNewslettersStatusPaidPartnershipContentMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
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
        1577865600,
        4102473600,
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
          "WASmaxInNewslettersStatusNewsletterContentMixin",
        ).parseStatusNewsletterContentMixin(e),
        s = o(
          "WASmaxInNewslettersStatusOriginalTimestampMixin",
        ).parseStatusOriginalTimestampMixin(e),
        u = o(
          "WASmaxInNewslettersStatusLastEditTimestampMixin",
        ).parseStatusLastEditTimestampMixin(e),
        c = o(
          "WASmaxInNewslettersStatusPaidPartnershipContentMixin",
        ).parseStatusPaidPartnershipContentMixin(e);
      return o("WAResultOrError").makeResult({
        id: n.value,
        serverId: r.value,
        t: a.value,
        isSender: i.value,
        statusNewsletterContentMixin: l.success ? l.value : null,
        statusOriginalTimestampMixin: s.success ? s.value : null,
        statusLastEditTimestampMixin: u.success ? u.value : null,
        hasStatusPaidPartnershipContentMixin: c.success,
      });
    }
    l.parseStatusNewsletterHistoryMixin = e;
  },
  98,
);
