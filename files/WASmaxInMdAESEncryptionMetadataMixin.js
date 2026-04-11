__d(
  "WASmaxInMdAESEncryptionMetadataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_key");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "nonce");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_data");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "auth_tag");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "version",
        "1",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "algorithm",
        "aes-256-gcm",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(t.value, 1, 2048);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 128);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 8192);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").contentBytesRange(a.value, 1, 128);
      return d.success
        ? o("WAResultOrError").makeResult({
            version: i.value,
            algorithm: l.value,
            encryptedKeyElementValue: s.value,
            nonceElementValue: u.value,
            encryptedDataElementValue: c.value,
            authTagElementValue: d.value,
          })
        : d;
    }
    l.parseAESEncryptionMetadataMixin = e;
  },
  98,
);
