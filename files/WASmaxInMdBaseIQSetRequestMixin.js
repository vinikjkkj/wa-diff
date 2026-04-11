__d(
  "WASmaxInMdBaseIQSetRequestMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "set",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, type: r.value })
        : r;
    }
    l.parseBaseIQSetRequestMixin = e;
  },
  98,
);
