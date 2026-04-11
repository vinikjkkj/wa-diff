__d(
  "WASmaxInPrivacyUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "username");
      return t.success
        ? o("WAResultOrError").makeResult({ username: t.value })
        : t;
    }
    l.parseUsernameMixin = e;
  },
  98,
);
