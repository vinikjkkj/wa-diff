__d(
  "WASmaxInMessageDeliverStsMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "sts",
        15778656e8,
        41024736e8,
      );
      return n.success ? o("WAResultOrError").makeResult({ sts: n.value }) : n;
    }
    l.parseStsMixin = e;
  },
  98,
);
