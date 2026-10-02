__d(
  "WASmaxInKeyTransparencyAuditorSignatureMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "auditor_signature");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "signature");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "message");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "pub_key");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        "cloudflare",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(n.value, 64, 64);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 0, void 0);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentBytesRange(a.value, 32, 32);
      return u.success
        ? o("WAResultOrError").makeResult({
            id: i.value,
            signatureElementValue: l.value,
            messageElementValue: s.value,
            pubKeyElementValue: u.value,
          })
        : u;
    }
    l.parseAuditorSignatureMixin = e;
  },
  98,
);
