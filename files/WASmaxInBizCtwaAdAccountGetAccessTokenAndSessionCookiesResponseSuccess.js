__d(
  "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountEnums",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "token_type");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentStringEnum(
        e,
        o("WASmaxInBizCtwaAdAccountEnums").ENUM_STRONG_WEAK,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "access_token");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(t, "session_cookies");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(t, "business_person");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(t, "token_type", e);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentString(a.value);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentString(i.value);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrString(l.value, "id");
      if (!d.success) return d;
      var m = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(t, n);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                accessTokenElementValue: u.value,
                sessionCookiesElementValue: c.value,
                businessPersonId: d.value,
              },
              m.value,
              { tokenType: s.value },
            ),
          )
        : m;
    }
    ((l.parseGetAccessTokenAndSessionCookiesResponseSuccessTokenType = e),
      (l.parseGetAccessTokenAndSessionCookiesResponseSuccess = s));
  },
  98,
);
