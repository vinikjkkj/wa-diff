__d(
  "WASmaxInPreKeysSetVnameFailureBadRequestMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      return n.success ? o("WAResultOrError").makeResult({ text: n.value }) : n;
    }
    l.parseSetVnameFailureBadRequestMixin = e;
  },
  98,
);
