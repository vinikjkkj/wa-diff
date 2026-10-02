__d(
  "WASmaxInReceiptRetryTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "retry");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "retry",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(n.value, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "count", 1, 256);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "v",
        "1",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(n.value, "t", 0, void 0);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "error",
        0,
        1024,
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            retryId: a.value,
            retryCount: i.value,
            retryV: l.value,
            retryT: s.value,
            retryError: u.value,
          })
        : u;
    }
    l.parseRetryTypeMixin = e;
  },
  98,
);
