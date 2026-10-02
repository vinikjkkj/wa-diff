__d(
  "WASmaxInMessageDeliverEncMediaTypeFutureproofMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "mediatype");
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    l.parseEncMediaTypeFutureproofMixin = e;
  },
  98,
);
