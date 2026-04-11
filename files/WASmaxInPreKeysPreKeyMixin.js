__d(
  "WASmaxInPreKeysPreKeyMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysKeyDataMixin",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "key");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "value");
      if (!r.success) return r;
      var a = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(r.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            keyIdKeyIDMixin: a.value,
            keyValueKeyDataMixin: i.value,
          })
        : i;
    }
    l.parsePreKeyMixin = e;
  },
  98,
);
