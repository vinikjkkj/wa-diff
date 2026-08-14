__d(
  "WASmaxInStatusDeliverEncVersion2Mixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "v",
        "2",
      );
      return n.success ? o("WAResultOrError").makeResult({ v: n.value }) : n;
    }
    l.parseEncVersion2Mixin = e;
  },
  98,
);
