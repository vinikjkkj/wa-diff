__d(
  "WASmaxInPreKeysSignedPreKeyMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysKeyDataMixin",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "skey");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "value");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "signature");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(a.value, 64, 64);
      if (!i.success) return i;
      var l = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);
      if (!l.success) return l;
      var s = o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(r.value);
      return s.success
        ? o("WAResultOrError").makeResult({
            skeySignatureElementValue: i.value,
            skeyIdKeyIDMixin: l.value,
            skeyValueKeyDataMixin: s.value,
          })
        : s;
    }
    l.parseSignedPreKeyMixin = e;
  },
  98,
);
