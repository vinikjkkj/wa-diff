__d(
  "WASmaxInStreamErrorConflictRequest",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "conflict");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "type");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "reason",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            code: r.value,
            conflictType: a.value,
            conflictReason: i.value,
          })
        : i;
    }
    l.parseConflictRequest = e;
  },
  98,
);
