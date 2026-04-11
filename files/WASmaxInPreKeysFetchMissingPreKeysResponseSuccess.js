__d(
  "WASmaxInPreKeysFetchMissingPreKeysResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInPreKeysEnums",
    "WASmaxInPreKeysIQResultResponseMixin",
    "WASmaxInPreKeysResponsePaddingMixin",
    "WASmaxInPreKeysUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInPreKeysEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInPreKeysUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup",
      ).parseUserFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup:
              r.value,
          })
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
      if (!a.success) return a;
      var i = o(
        "WASmaxInPreKeysIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!i.success) return i;
      var l = o(
          "WASmaxInPreKeysResponsePaddingMixin",
        ).parseResponsePaddingMixin(t),
        s = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "user",
          0,
          1e5,
          e,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              responsePaddingMixin: l.success ? l.value : null,
              listUser: s.value,
            }),
          )
        : s;
    }
    ((l.parseFetchMissingPreKeysResponseSuccessListUser = e),
      (l.parseFetchMissingPreKeysResponseSuccess = s));
  },
  98,
);
