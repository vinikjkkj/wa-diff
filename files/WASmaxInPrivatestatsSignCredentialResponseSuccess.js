__d(
  "WASmaxInPrivatestatsSignCredentialResponseSuccess",
  ["WAResultOrError", "WASmaxParseReference", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "sign_credential");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "signed_credential",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "acs_public_key",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "dleq_proof",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").flattenedChildWithTag(l.value, "c");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").flattenedChildWithTag(l.value, "s");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "project_name",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        d.value,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        _.value,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrIntRange(r.value, "t", 0, void 0);
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").contentBytesRange(a.value, 32, 32);
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").contentBytesRange(i.value, 32, 32);
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").contentBytesRange(s.value, 32, 32);
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").contentBytesRange(u.value, 32, 32);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").contentString(c.value);
      return v.success
        ? o("WAResultOrError").makeResult({
            type: p.value,
            signCredentialT: g.value,
            signCredentialSignedCredentialElementValue: h.value,
            signCredentialAcsPublicKeyElementValue: y.value,
            signCredentialDleqProofCElementValue: C.value,
            signCredentialDleqProofSElementValue: b.value,
            signCredentialProjectNameElementValue: v.value,
          })
        : v;
    }
    l.parseSignCredentialResponseSuccess = e;
  },
  98,
);
