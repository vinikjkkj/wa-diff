__d(
  "WASmaxInStreamErrorCodeRequest",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "code");
      return n.success ? o("WAResultOrError").makeResult({ code: n.value }) : n;
    }
    l.parseCodeRequest = e;
  },
  98,
);
