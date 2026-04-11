__d(
  "WASmaxInMessageDeliverNewsletterMessageFanoutMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminProfileMetaMixin",
    "WASmaxInMessageDeliverNewsletterMessageFanoutContent",
    "WASmaxInMessageDeliverNewsletterMessageLastEditTimestampMixin",
    "WASmaxInMessageDeliverNewsletterMessageOriginalTimestampMixin",
    "WASmaxInMessageDeliverPaidPartnershipContentMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_sender",
        "true",
      );
      if (!i.success) return i;
      var l = o(
          "WASmaxInMessageDeliverNewsletterMessageOriginalTimestampMixin",
        ).parseNewsletterMessageOriginalTimestampMixin(e),
        s = o(
          "WASmaxInMessageDeliverNewsletterMessageLastEditTimestampMixin",
        ).parseNewsletterMessageLastEditTimestampMixin(e),
        u = o(
          "WASmaxInMessageDeliverAdminProfileMetaMixin",
        ).parseAdminProfileMetaMixin(e),
        c = o(
          "WASmaxInMessageDeliverPaidPartnershipContentMixin",
        ).parsePaidPartnershipContentMixin(e),
        d = o(
          "WASmaxInMessageDeliverNewsletterMessageFanoutContent",
        ).parseNewsletterMessageFanoutContent(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            serverId: r.value,
            t: a.value,
            isSender: i.value,
            newsletterMessageOriginalTimestampMixin: l.success ? l.value : null,
            newsletterMessageLastEditTimestampMixin: s.success ? s.value : null,
            adminProfileMetaMixin: u.success ? u.value : null,
            hasPaidPartnershipContentMixin: c.success,
            newsletterMessageFanoutContent: d.value,
          })
        : d;
    }
    l.parseNewsletterMessageFanoutMixin = e;
  },
  98,
);
