__d(
  "WASmaxInBlocklistsBlocklistIdentifierMixin",
  ["WAResultOrError", "WASmaxInBlocklistsBlocklistIds", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country_code",
      );
      if (!t.success) return t;
      var n = o("WASmaxInBlocklistsBlocklistIds").parseBlocklistIds(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            countryCode: t.value,
            blocklistIds: n.value,
          })
        : n;
    }
    l.parseBlocklistIdentifierMixin = e;
  },
  98,
);
