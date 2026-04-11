__d(
  "WASmaxInBlocklistsUnknownIdentifierMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "unknown_identifier",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ unknownIdentifier: t.value })
        : t;
    }
    l.parseUnknownIdentifierMixin = e;
  },
  98,
);
