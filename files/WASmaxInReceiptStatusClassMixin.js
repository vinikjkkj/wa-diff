__d(
  "WASmaxInReceiptStatusClassMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "status",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ class: n.value })
        : n;
    }
    l.parseStatusClassMixin = e;
  },
  98,
);
