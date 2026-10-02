__d(
  "WASmaxInReceiptEncryptMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypt");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "enc_p");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "enc_iv");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 600);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(a.value, 12, 12);
      return l.success
        ? o("WAResultOrError").makeResult({
            encryptEncPElementValue: i.value,
            encryptEncIvElementValue: l.value,
          })
        : l;
    }
    l.parseEncryptMixin = e;
  },
  98,
);
