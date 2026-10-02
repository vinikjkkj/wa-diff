__d(
  "WASmaxInMessageDeliverClientFrankingTagMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "franking");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        t.value,
        "franking_tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 16, 128);
      return r.success
        ? o("WAResultOrError").makeResult({
            frankingFrankingTagElementValue: r.value,
          })
        : r;
    }
    l.parseClientFrankingTagMixin = e;
  },
  98,
);
