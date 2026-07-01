__d(
  "WASmaxInPreKeysBotIdentityKeyAuthMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cert");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "identity_auth");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "signature");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "certs");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "version", 1, 100);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "cert",
        1,
        2,
        e,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            identityAuthVersion: i.value,
            identityAuthSignatureElementValue: l.value,
            identityAuthCertsCert: s.value,
          })
        : s;
    }
    ((l.parseBotIdentityKeyAuthIdentityAuthCertsCert = e),
      (l.parseBotIdentityKeyAuthMixin = s));
  },
  98,
);
