__d(
  "WASmaxInNewslettersStatusNewsletterMyAddOnsMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusNewsletterMyReactionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersStatusNewsletterMyReactionMixin",
      ).parseStatusNewsletterMyReactionMixin(e);
      return o("WAResultOrError").makeResult({
        serverId: n.value,
        statusNewsletterMyReactionMixin: r.success ? r.value : null,
      });
    }
    l.parseStatusNewsletterMyAddOnsMixin = e;
  },
  98,
);
