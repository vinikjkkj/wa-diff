__d(
  "WASmaxInStreamErrorXMLNotWellFormedRequest",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "xml-not-well-formed",
      );
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseXMLNotWellFormedRequest = e;
  },
  98,
);
