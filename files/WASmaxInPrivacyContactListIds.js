__d(
  "WASmaxInPrivacyContactListIds",
  [
    "WAResultOrError",
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
      return n.success
        ? o("WAResultOrError").makeResult({ name: "PnJid", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Username", "PnJid"],
            [t, n],
          );
    }
    l.parseContactListIds = e;
  },
  98,
);
