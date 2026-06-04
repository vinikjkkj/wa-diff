__d(
  "WASmaxInMdPasskeyRequestOptionsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "passkey_request_options");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 4096);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parsePasskeyRequestOptionsMixin = e;
  },
  98,
);
