__d(
  "WASmaxInBlocklistsBlocklistIds",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxInBlocklistsGuestNameAndDisplayNameMixin",
    "WASmaxInBlocklistsGuestNameMixin",
    "WASmaxInBlocklistsPnJidMixin",
    "WASmaxInBlocklistsUnknownIdentifierMixin",
    "WASmaxInBlocklistsUsernameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInBlocklistsUsernameMixin").parseUsernameMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = o("WASmaxInBlocklistsPnJidMixin").parsePnJidMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = o(
        "WASmaxInBlocklistsGuestNameAndDisplayNameMixin",
      ).parseGuestNameAndDisplayNameMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "GuestNameAndDisplayName",
          value: r.value,
        });
      var a = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DisplayName",
          value: a.value,
        });
      var i = o("WASmaxInBlocklistsGuestNameMixin").parseGuestNameMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "GuestName",
          value: i.value,
        });
      var l = o(
        "WASmaxInBlocklistsUnknownIdentifierMixin",
      ).parseUnknownIdentifierMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownIdentifier",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "Username",
              "PnJid",
              "GuestNameAndDisplayName",
              "DisplayName",
              "GuestName",
              "UnknownIdentifier",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseBlocklistIds = e;
  },
  98,
);
