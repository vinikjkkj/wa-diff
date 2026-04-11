__d(
  "WASmaxInBizLinkingIGProfessionalResponseBaseMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ig_handle");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ igHandleElementValue: r.value })
        : r;
    }
    l.parseIGProfessionalResponseBaseMixin = e;
  },
  98,
);
