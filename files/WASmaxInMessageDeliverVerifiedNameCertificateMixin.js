__d(
  "WASmaxInMessageDeliverVerifiedNameCertificateMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "verified_name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrInt(n.value, "v");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "verified_level",
        o("WASmaxInMessageDeliverEnums").ENUM_HIGH_LOW_UNKNOWN,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 1024);
      return i.success
        ? o("WAResultOrError").makeResult({
            verifiedNameV: r.value,
            verifiedNameVerifiedLevel: a.value,
            verifiedNameElementValue: i.value,
          })
        : i;
    }
    l.parseVerifiedNameCertificateMixin = e;
  },
  98,
);
