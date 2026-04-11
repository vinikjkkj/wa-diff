__d(
  "WASmaxInWaffleGetCertificateResponseMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "encryption_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return r.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "signature_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return r.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "password_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "key_id", 1, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return a.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            keyId: r.value,
            elementValue: a.value,
          })
        : a;
    }
    function c(t) {
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "encryption_pem",
        e,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "signature_pem", s);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "password_pem", u);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(t, "timestamp", 1, void 0);
      return i.success
        ? o("WAResultOrError").makeResult({
            timestamp: i.value,
            encryptionPem: n.value,
            signaturePem: r.value,
            passwordPem: a.value,
          })
        : i;
    }
    ((l.parseGetCertificateResponseEncryptionPem = e),
      (l.parseGetCertificateResponseSignaturePem = s),
      (l.parseGetCertificateResponsePasswordPem = u),
      (l.parseGetCertificateResponseMixin = c));
  },
  98,
);
