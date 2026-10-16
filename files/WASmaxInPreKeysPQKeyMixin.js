__d(
  "WASmaxInPreKeysPQKeyMixin",
  ["WASmaxInPreKeysPQPreKeyContentsMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pqkey");
      if (!t.success) return t;
      var n = o(
        "WASmaxInPreKeysPQPreKeyContentsMixin",
      ).parsePQPreKeyContentsMixin(t.value);
      return (n.success, n);
    }
    l.parsePQKeyMixin = e;
  },
  98,
);
