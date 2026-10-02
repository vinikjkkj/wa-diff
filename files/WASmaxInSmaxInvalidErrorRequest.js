__d(
  "WASmaxInSmaxInvalidErrorRequest",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
        "479",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "smax-invalid",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ code: n.value, text: r.value })
        : r;
    }
    l.parseErrorRequest = e;
  },
  98,
);
