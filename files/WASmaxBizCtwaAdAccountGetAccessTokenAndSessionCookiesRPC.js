__d(
  "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
    "WASmaxInBizCtwaAdAccountEnums",
    "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = p(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return {
          name: "GetAccessTokenAndSessionCookiesResponseSuccess",
          value: a.value,
        };
      var i = m(r, n);
      if (i.success)
        return {
          name: "GetAccessTokenAndSessionCookiesResponseTooManyAttempts",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetAccessTokenAndSessionCookiesResponseIncorrectNonce",
          value: l.value,
        };
      var c = s(r, n);
      if (c.success)
        return {
          name: "GetAccessTokenAndSessionCookiesResponseError",
          value: c.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "GetAccessTokenAndSessionCookies",
          { Success: a, TooManyAttempts: i, IncorrectNonce: l, Error: c },
        ),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
      ).parseCommonAdAccountErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCommonAdAccountErrors: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "code",
        "432",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "text",
        "INCORRECT_NONCE",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorCode: a.value, errorText: i.value },
              l.value,
            ),
          )
        : l;
    }
    function c(e) {
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
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "access_token");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "session_cookies");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(e, "business_person");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "token_type", c);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentString(r.value);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentString(a.value);
      if (!u.success) return u;
      var d = o("WASmaxParseUtils").attrString(i.value, "id");
      if (!d.success) return d;
      var m = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                accessTokenElementValue: s.value,
                sessionCookiesElementValue: u.value,
                businessPersonId: d.value,
              },
              m.value,
              { tokenType: l.value },
            ),
          )
        : m;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "code",
        "431",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "text",
        "TOO_MANY_ATTEMPTS",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorCode: a.value, errorText: i.value },
              l.value,
            ),
          )
        : l;
    }
    function p(e) {
      var t = e.codeElementValue,
        n = o(
          "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(104) },
            o("WASmaxJsx").smax(
              "parameters",
              null,
              o("WASmaxJsx").smax("code", null, t),
            ),
          ),
          e,
        );
      return n;
    }
    ((l.sendGetAccessTokenAndSessionCookiesRPC = e),
      (l.parseGetAccessTokenAndSessionCookiesResponseError = s),
      (l.parseGetAccessTokenAndSessionCookiesResponseIncorrectNonce = u),
      (l.parseGetAccessTokenAndSessionCookiesResponseSuccess = d),
      (l.parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts = m),
      (l.makeGetAccessTokenAndSessionCookiesRequest = p));
  },
  98,
);
