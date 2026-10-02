__d(
  "WASmaxInKeyTransparencyRootHashMixin",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyAuditorSignatureMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "auditor_signature");
      if (!t.success) return t;
      var n = o(
        "WASmaxInKeyTransparencyAuditorSignatureMixin",
      ).parseAuditorSignatureMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "hash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "signature");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "auditor_signature",
        e,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "epoch",
        -9007199254740991,
        9007199254740991,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(n.value, 32, 32);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
      return s.success
        ? o("WAResultOrError").makeResult({
            hashEpoch: i.value,
            hashElementValue: l.value,
            signatureElementValue: s.value,
            auditorSignature: a.value,
          })
        : s;
    }
    ((l.parseRootHashAuditorSignature = e), (l.parseRootHashMixin = s));
  },
  98,
);
