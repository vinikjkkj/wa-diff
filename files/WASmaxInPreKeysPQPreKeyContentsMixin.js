__d(
  "WASmaxInPreKeysPQPreKeyContentsMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysKeyIDMixin",
    "WASmaxInPreKeysPQKeyDataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "signature");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(t.value);
      if (!i.success) return i;
      var l = o("WASmaxInPreKeysPQKeyDataMixin").parsePQKeyDataMixin(n.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            signatureElementValue: a.value,
            idKeyIDMixin: i.value,
            valuePQKeyDataMixin: l.value,
          })
        : l;
    }
    l.parsePQPreKeyContentsMixin = e;
  },
  98,
);
