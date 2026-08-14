__d(
  "WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "decrypt-fail",
        "hide",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ decryptFail: n.value })
        : n;
    }
    l.parseEncHideDecryptionPlaceholderMixin = e;
  },
  98,
);
