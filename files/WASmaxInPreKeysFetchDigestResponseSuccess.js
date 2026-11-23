__d(
  "WASmaxInPreKeysFetchDigestResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQResultResponseMixin",
    "WASmaxInPreKeysIdentityDigestBundleMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "digest");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "digest",
        "identity_type",
      ]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "identity_type",
        a.value,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInPreKeysIdentityDigestBundleMixin",
      ).parseIdentityDigestBundleMixin(r.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInPreKeysIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                hasDigestIdentityType: i.value != null,
                digestIdentityDigestBundleMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseFetchDigestResponseSuccess = e;
  },
  98,
);
