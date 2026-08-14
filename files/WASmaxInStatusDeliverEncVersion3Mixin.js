__d(
  "WASmaxInStatusDeliverEncVersion3Mixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "v",
        "3",
      );
      return n.success ? o("WAResultOrError").makeResult({ v: n.value }) : n;
    }
    l.parseEncVersion3Mixin = e;
  },
  98,
);
