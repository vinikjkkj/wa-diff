__d(
  "WASmaxInPreKeysSetVnameFailureFallbackMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "text");
      return n.success ? o("WAResultOrError").makeResult({ text: n.value }) : n;
    }
    l.parseSetVnameFailureFallbackMixin = e;
  },
  98,
);
