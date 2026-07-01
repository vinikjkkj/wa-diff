__d(
  "WASmaxInPreKeysPQPreKeyListCountLowMixin",
  ["WASmaxInPreKeysCountLowMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pq_list");
      if (!n.success) return n;
      var r = o("WASmaxInPreKeysCountLowMixin").parseCountLowMixin(n.value);
      return (r.success, r);
    }
    l.parsePQPreKeyListCountLowMixin = e;
  },
  98,
);
