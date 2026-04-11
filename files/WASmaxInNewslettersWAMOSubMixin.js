__d(
  "WASmaxInNewslettersWAMOSubMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_wamo_sub",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsWamoSub: r.value })
        : r;
    }
    l.parseWAMOSubMixin = e;
  },
  98,
);
