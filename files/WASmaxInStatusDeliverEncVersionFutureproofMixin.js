__d(
  "WASmaxInStatusDeliverEncVersionFutureproofMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "v", 3, void 0);
      return n.success ? o("WAResultOrError").makeResult({ v: n.value }) : n;
    }
    l.parseEncVersionFutureproofMixin = e;
  },
  98,
);
