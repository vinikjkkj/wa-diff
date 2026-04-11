__d(
  "WASmaxInPreKeysIdentityKeyMixin",
  ["WASmaxInPreKeysKeyDataMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "identity");
      if (!t.success) return t;
      var n = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(t.value);
      return (n.success, n);
    }
    l.parseIdentityKeyMixin = e;
  },
  98,
);
