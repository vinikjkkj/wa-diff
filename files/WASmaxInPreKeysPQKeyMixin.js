__d(
  "WASmaxInPreKeysPQKeyMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxInPreKeysPQKeyDataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "pqkey");
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
      var s = o("WASmaxInPreKeysPQKeyDataMixin").parsePQKeyDataMixin(r.value);
      return s.success
        ? o("WAResultOrError").makeResult({
            pqkeySignatureElementValue: i.value,
            pqkeyIdKeyIDMixin: l.value,
            pqkeyValuePQKeyDataMixin: s.value,
          })
        : s;
    }
    l.parsePQKeyMixin = e;
  },
  98,
);
