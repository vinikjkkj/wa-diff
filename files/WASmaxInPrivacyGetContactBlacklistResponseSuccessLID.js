__d(
  "WASmaxInPrivacyGetContactBlacklistResponseSuccessLID",
  [
    "WAResultOrError",
    "WASmaxInPrivacyDeprecatedIQResultResponseOptionalFromMixin",
    "WASmaxInPrivacyPrivacyContactListIdentifierMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "jid",
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInPrivacyPrivacyContactListIdentifierMixin",
      ).parsePrivacyContactListIdentifierMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ jid: n.value }, r.value),
          )
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "list");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t, "dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "user", 0, 64e3, e);
      return a.success
        ? o("WAResultOrError").makeResult({ dhash: r.value, user: a.value })
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInPrivacyDeprecatedIQResultResponseOptionalFromMixin",
      ).parseDeprecatedIQResultResponseOptionalFromMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    ((l.parseGetContactBlacklistResponseSuccessLIDPrivacyListUser = e),
      (l.parseGetContactBlacklistResponseSuccessLIDPrivacyList = s),
      (l.parseGetContactBlacklistResponseSuccessLID = u));
  },
  98,
);
