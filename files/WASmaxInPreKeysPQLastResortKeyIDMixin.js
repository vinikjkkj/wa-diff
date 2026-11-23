__d(
  "WASmaxInPreKeysPQLastResortKeyIDMixin",
  ["WASmaxInPreKeysKeyIDMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "pq_last_resort_key",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "id");
      if (!n.success) return n;
      var r = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);
      return (r.success, r);
    }
    l.parsePQLastResortKeyIDMixin = e;
  },
  98,
);
