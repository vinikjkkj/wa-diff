__d(
  "WASmaxInPrivacyContactListIds",
  [
    "WAResultOrError",
    "WASmaxInPrivacyEmptyContactListIdentifierMixin",
    "WASmaxInPrivacyPnJidMixin",
    "WASmaxInPrivacyUsernameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPrivacyUsernameMixin").parseUsernameMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = o("WASmaxInPrivacyPnJidMixin").parsePnJidMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = o(
        "WASmaxInPrivacyEmptyContactListIdentifierMixin",
      ).parseEmptyContactListIdentifierMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EmptyContactListIdentifier",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Username", "PnJid", "EmptyContactListIdentifier"],
            [t, n, r],
          );
    }
    l.parseContactListIds = e;
  },
  98,
);
